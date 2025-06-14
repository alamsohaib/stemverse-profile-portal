
import NavBar from "@/components/NavBar";

const Mission = () => (
  <main className="w-full flex flex-col items-center bg-background min-h-screen">
    <NavBar />
    <section id="about" className="w-full py-14 md:py-20 bg-gradient-to-r from-blue-100 via-yellow-50 to-green-50">
      <div className="max-w-3xl mx-auto px-4 text-center animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-blue-700 mb-4">STEMverse Mission</h2>
        <p className="text-xl text-blue-900 font-semibold mb-2">
          At STEMverse, we are dedicated to equipping individuals of all ages with the skills and knowledge necessary to thrive in the dynamic landscape of the 21st century.
        </p>
        <p className="text-lg font-normal text-gray-700">
          Our mission is clear: to empower the next generation and beyond through comprehensive STEM sessions tailored for youngsters, teenagers, teachers, and older adults.
        </p>
      </div>
    </section>
  </main>
);

export default Mission;
