import Image from "next/image";
// import Test from "./test";
import Link from "next/link";
// import { auth } from "./firebase/config";
// import Header from "./Header";
import Footer from "./Footer";

export default function Home() {
  return (
    <main className="hi">
      <div className="sticky top-0 bg-white z-10">{/* <Header /> */}</div>
      <article className="grid lg:grid-cols-2  max-w-[88rem] m-auto">
        <div className="px-8 py-20 md:px-20 lg:py-48">
          <h1 className="text-5xl font-semibold  md:text-6xl gradient">
            “Transforming Inspections with AI: Seamless, Accurate, and
            Efficient”
          </h1>
          <div className="flex gap-2 mt-8">
            <a
              className="flex gap-2 px-4 py-2 font-semibold text-gray-600 transition duration-100 rounded-lg hover:text-gray-800"
              href="#features"
            >
              <button className="btn-shine">
                <span>Learn more</span>
              </button>
              <div className="m-auto"></div>
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <img src="next.svg" alt="Next Icon" height={700} width={700} />
        </div>
      </article>
      <div className="bg-yellow-400 p-5">
        <article className="max-w-[88rem] m-auto pb-12 " id="features">
          <h2 className="text-5xl text-black pt-10 font-semibold">
            Why use CAT Inspect?
          </h2>
          <p className="mt-2">
            <a
              href="https://clerk.com/docs?utm_source=vercel-template&utm_medium=template_repos&utm_campaign=nextjs_template"
              className="font-medium text-primary-600 hover:underline"
            ></a>
          </p>
          <div className="grid gap-8 mt-8 lg:grid-cols-3">
            <div className="flex flex-col h-56 gap-1 p-8 bg-black shadow-lg rounded-2xl hover:border-yellow-400 border-2 border-transparent transition-all duration-500 ease-in-out">
              <h3 className="text-3xl font-medium">Enhanced Accuracy: </h3>
              <p className="text-gray-400 hover:text-yellow-400 transition-all duration-700">
                “Minimize human error with precise, AI-driven data extraction
                and reporting.”
              </p>
              <div className="grow"></div>
            </div>
            <div className="flex flex-col h-56 gap-1 p-8 bg-black shadow-lg rounded-2xl hover:border-yellow-400 border-2 border-transparent transition-all duration-500 ease-in-out">
              <h3 className="text-3xl font-medium">Streamlined Workflow:</h3>
              <p className="text-gray-400 hover:text-yellow-400 transition-all duration-700">
                “Speed up inspections with real-time voice-to-text conversion
                and automated data organization.”
              </p>
              <div className="grow"></div>
            </div>
            <div className="flex flex-col h-56 gap-1 p-8 bg-black shadow-lg rounded-2xl hover:border-yellow-400 border-2 border-transparent transition-all duration-500 ease-in-out">
              <h3 className="text-3xl font-medium">Comprehensive Insights:</h3>
              <p className="text-gray-400 hover:text-yellow-400 transition-all duration-700 ">
                “Receive actionable insights and early warnings through
                detailed, interactive reports.”
              </p>
              <div className="grow"></div>
            </div>
          </div>
        </article>
        <article className="max-w-[88rem] flex rounded-xl m-auto px-8 pt-24 pb-10 relative">
          <div className="max-w-[40rem] text-black">
            <div className="text-5xl font-bold">
              Get Started with CAT Inspect
            </div>
            <div className="text-xl pt-5">
              Our product is an AI-powered assistant designed for inspectors in
              the Caterpillar industry. It converts spoken inspection data into
              text using speech-to-text technology, organizes the data into a
              CSV format using NLP, and generates detailed PDF reports,
              streamlining the entire inspection process.
            </div>
          </div>
          <div className="">
            <Image src="/vercel.svg" alt="Next Icon" height={700} width={700} />
          </div>
        </article>
        <article className="max-w-[88rem] bg-black rounded-xl m-auto px-8 pt-24 pb-10">
          <div className="text-7xl font-bold">
            Wanna see our <span className="text-yellow-400">Product</span> in
            action
          </div>
          <div className="flex gap-2 mt-8">
            <a href="./">
              <button className="btn-shine btn">
                <span>Start Demo</span>
              </button>
              <div className="m-auto"></div>
            </a>
          </div>
        </article>
      </div>
      <Footer />
    </main>
  );
}
