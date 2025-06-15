
import React from "react";
// Placeholder images - replace with Instagram integration or custom uploads
const showcaseImgs = [
  "/lovable-uploads/ef0f2976-79fd-47b8-ab0a-a598251ada8f.png",
  "/lovable-uploads/1ecf0702-eaa5-4283-9bb5-ff187df825bf.png",
  "/lovable-uploads/414562a0-bc63-4d90-ad88-a6f39add6aac.png"
];

const captions = [
  "Real students exploring robotics 🚗",
  "Hands-on STEM at camp sessions 🔬",
  "Teachers training in AI integration 🤖"
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
