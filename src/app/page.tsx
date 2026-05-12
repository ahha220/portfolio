// Page.tsx is default page rendered (run npm start dev)
/*
media stream has tracks (video/audio), can let you stop the stram (camera), turn off hardware
?. -> optional chaining, if stream is null or undefined, it won't throw an error, just return undefined
await so that it finishes loading first before we set the video source object to the stream, otherwise it might not work (same as .then())
as = type assertion (ts) 
await only pauses function not page
*/
'use client'

import {useRef, useState} from 'react';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(false);

  async function toggleCamera(){
    if(active){
      const stream = videoRef.current?.srcObject as MediaStream; // react ref pointing to DOM element, .current is actual HTMLVideo, if null
      stream?.getTracks().forEach(t => t.stop());
      videoRef.current!.srcObject = null;
      setActive(false);
    } else{
      const stream = await navigator.mediaDevices.getUserMedia({video: true});
      videoRef.current!.srcObject = stream;
      setActive(true);
    }
  }
  return (
    <main className="flex flex-col">
      <section className="h-screen flex flex-col">
        <div className="h-1/6 flex items-end justify-center pb-4">
          <div className="w-full max-w-3xl flex items-center justify-between">
            <div className="flex items-center gap-8">
              <button className="text-sm uppercase tracking-widest text-white hover:text-blue-500 transition-colors">projects</button>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <button className="text-sm uppercase tracking-widest text-white hover:text-blue-500 transition-colors">resume</button>
              </a>
              <button className="text-sm uppercase tracking-widest text-white hover:text-blue-500 transition-colors">additionals.</button>
            </div>

            <div className="flex items-center gap-3">
              <span className={`text-sm uppercase tracking-widest transition-colors ${active ? 'text-white/60' : 'text-blue-500'}`}>3d me & you?</span>
              <button
                onClick={toggleCamera}
                className={`relative w-10 h-5 rounded-full transition-colors ${
                  active ? 'bg-blue-500' : 'bg-white'
                }`}
              >
                <div
                  className={`absolute top-0.5 left-0.5 w-4 h-4 bg-black rounded-full transition-transform ${
                    active ? 'translate-x-5' : ''
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-center">
          <div 
            className={!active ? "w-full max-w-3xl aspect-video bg-white flex justify-center items-center" : "hidden"}>
              <p className = "text-center text-black">temporary</p>
              </div>
          <video 
            ref={videoRef} 
            autoPlay playsInline style={{transform: 'scaleX(-1)'}} 
            className={active ? 'w-full max-w-3xl aspect-video object-cover' : 'hidden'}>
            </video>
        </div>
        <div className="flex flex-col items-center pt-8 pb-4">
          <div className="w-full max-w-3xl">
            <h3 className="text-3xl font-bold text-white">AMY HUANG</h3>
            <p className="text-blue-500 text-xs uppercase tracking-widest">Systems Design Engineering @Uwaterloo</p>
            <p className="text-white text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </section>
      <section className="min-h-screen flex flex-col items-center py-20">
        <div className="w-full max-w-3xl mx-auto">
          <h2 className="text-white mb-8 text-left">PROJECTS</h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </section>
    </main>
  );
}
