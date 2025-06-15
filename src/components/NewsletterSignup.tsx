
import React from "react";
import { Button } from "@/components/ui/button";

const NewsletterSignup = () => (
  <section className="w-full flex justify-center py-8 px-4 bg-gradient-to-r from-[#e8f6fd] via-white to-[#fffbe7]">
    <form
      className="max-w-xl w-full bg-white/90 rounded-2xl border border-accent/20 shadow-md p-7 flex flex-col items-center gap-4 animate-fade-in"
      onSubmit={e => {
        e.preventDefault();
        alert("Thank you for subscribing! You'll receive updates about camps, workshops & resources.");
      }}
    >
      <span className="text-lg font-bold text-stemblue mb-1 text-center">
        Be the first to hear about upcoming camps, workshops, and free STEM resources—join our mailing list today!
      </span>
      <input
        type="email"
        required
        placeholder="Your email address"
        className="w-full py-3 px-4 rounded-xl border border-blue-200 focus:ring-2 focus:ring-yellow-200 outline-none transition-all text-base bg-white"
      />
      <Button
        type="submit"
        className="px-7 py-3 bg-stemblue text-accent font-bold rounded-xl shadow hover:bg-accent hover:text-stemblue transition-all"
      >
        Subscribe
      </Button>
    </form>
  </section>
);

export default NewsletterSignup;
