
import React from "react";

// Updated images with new uploads and corresponding captions
const showcaseImgs = [
  "/lovable-uploads/8227a7cc-3529-4def-9b47-06d867c9cfa2.png",
  "/lovable-uploads/3f2ecfeb-ae22-47cc-a3af-a968ad07517c.png",
  "/lovable-uploads/734feffc-9234-4249-9eac-ca5fb3d4163d.png"
];

const captions = [
  "Students explore robotics through hands-on, guided learning.",
  "Students bring ideas to life using 3D modeling tools.",
  "Teachers gain practical skills to lead STEM learning in classrooms."
];

const ShowcaseCarousel = () => (
  <section className="w-full bg-[#f5fafe] py-10 px-4 flex flex-col items-center">
    <h2 className="text-2xl md:text-3xl font-bold font-playfair text-center text-stemblue mb-7">Our Community in Action</h2>
    <div className="flex flex-col md:flex-row gap-5 w-full max-w-4xl justify-center">
      {showcaseImgs.map((src, i) => (
        <div
          key={src}
          className="rounded-2xl bg-white/90 border border-yellow-100 shadow-lg overflow-hidden flex flex-col items-center hover:shadow-2xl transition animate-fade-in"
        >
          <img src={src} className="w-full h-56 object-cover object-center" alt={captions[i]} />
          <div className="p-4 font-medium text-center text-stemblue text-sm">{captions[i]}</div>
        </div>
      ))}
    </div>
    <span className="mt-4 text-xs text-gray-500">@mystemverse</span>
  </section>
);

export default ShowcaseCarousel;
