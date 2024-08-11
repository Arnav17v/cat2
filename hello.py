import os
import whisper
import base64
import tempfile
from flask import Flask
from flask_socketio import SocketIO, emit
from flask_cors import CORS
import ssl

ssl._create_default_https_context = ssl._create_unverified_context

app = Flask(__name__)
CORS(app)
socketio = SocketIO(app, cors_allowed_origins="*")

# Load the Whisper model
model = whisper.load_model("base")
audio_data_buffer = b""
audio_file_path = None

@socketio.on('connect')
def handle_connect():
    print('Client connected')

@socketio.on('disconnect')
def handle_disconnect():
    print('Client disconnected')

@socketio.on('audio_data')
def handle_audio_data(data):
    global audio_data_buffer, audio_file_path

    try:
        # Decode the base64 data
        chunk = base64.b64decode(data.split(',')[1])
        
        # If this is the first chunk, create a temporary file
        if audio_file_path is None:
            temp_file = tempfile.NamedTemporaryFile(delete=False, suffix=".wav")
            audio_file_path = temp_file.name
            temp_file.close()

        # Append the chunk to the buffer
        audio_data_buffer += chunk

        # Periodically save and process the buffer (for example, after 10 seconds)
        if len(audio_data_buffer) > 16000 * 2 * 10:  # 10 seconds of 16kHz, 16-bit audio
            with open(audio_file_path, 'wb') as f:
                f.write(audio_data_buffer)

            # Transcribe the audio
            result = model.transcribe(audio_file_path)
            print(f"Transcription: {result['text']}")

            # Clear the buffer
            audio_data_buffer = b""

            # Reset file for next chunk
            audio_file_path = None

    except Exception as e:
        print(f"Error processing audio data: {e}")
        if audio_file_path and os.path.exists(audio_file_path):
            os.remove(audio_file_path)
            audio_file_path = None
        audio_data_buffer = b""

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=9000)
