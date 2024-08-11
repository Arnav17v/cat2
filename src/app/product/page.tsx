"use client";
import React, { useEffect, useState } from "react";
import io from "socket.io-client";

function ProductDemo() {
  const [isRunning, setIsRunning] = useState(false);
  const [socket, setSocket] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);

  useEffect(() => {
    const newSocket = io("http://localhost:9000"); // Backend URL
    setSocket(newSocket);

    return () => newSocket.close();
  }, []);

  const startDemo = async () => {
    setIsRunning(true);

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    setMediaRecorder(recorder);

    recorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        const reader = new FileReader();
        reader.onload = function () {
          socket.emit("audio_data", reader.result);
        };
        reader.readAsDataURL(event.data);
      }
    };

    recorder.start(10000); // Send audio data in 1-second chunks
  };

  return (
    <div>
      {!isRunning ? (
        <button onClick={startDemo}>Start</button>
      ) : (
        <p>The demo is running...</p>
      )}
    </div>
  );
}

export default ProductDemo;
