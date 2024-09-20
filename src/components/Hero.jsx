import React from 'react';

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p>IT'S TIME TO GET</p>
        <h1 className="uppercase font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Ca<span className="text-blue-400">lys</span>
        </h1>
      </div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis adipisci quidem nisi suscipit ullam eos
        iste enim laboriosam cumque cum sit nobis, officiis repudiandae tempore ipsa veritatis sint corrupti totam!
      </p>
      <button className="px-8 py-4 rounded-md border-blue-400 border-solid border-2 bg-slate-950 blueShadow duration-200">
        <p>Accept & Begin</p>
      </button>
    </div>
  );
}
