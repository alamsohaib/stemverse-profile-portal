
import React from "react";

const JoinFamilyCallout = () => (
  <section className="w-full flex justify-center my-10 px-4">
    <div className="max-w-2xl w-full flex flex-col items-center bg-stemblue/90 rounded-3xl shadow-xl border border-yellow-200 p-8 gap-3 text-center animate-fade-in">
      <span className="text-xl font-bold text-accent mb-1">Join the STEMverse Network</span>
      <span className="text-white text-base font-medium">
        Whether you're a passionate STEM educator, a potential collaborator, or a school seeking innovative learning solutions, we'd love to work with you.
      </span>
      <a
        href="mailto:quratulain@mystemverse.com"
        className="text-accent hover:text-yellow-300 font-semibold underline mt-2"
      >
        Explore Instructor Roles & Partnership Opportunities
      </a>
    </div>
  </section>
);

export default JoinFamilyCallout;
