
import NavBar from "@/components/NavBar";

const Home = () => (
  <main className="w-full flex flex-col items-center bg-background min-h-screen">
    <NavBar />
    <section id="home" className="w-full py-14 md:py-20 bg-gradient-to-b from-yellow-50 to-blue-50">
      <div className="relative flex flex-col md:flex-row-reverse items-center justify-between gap-8 max-w-6xl mx-auto px-4 min-h-[67vh]">
        {/* Video background */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-[-2] pointer-events-none"
          autoPlay
          muted
          loop
          playsInline
          style={{
            minHeight: "100%",
            minWidth: "100%",
            opacity: 0.86,
            filter: "brightness(1.07) saturate(1.13)",
          }}
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-futuristic-digital-background-with-blue-and-purple-light-1175-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 z-[-1] pointer-events-none bg-gradient-to-b from-yellow-50/70 via-blue-100/70 to-white/90" />
        {/* Logo */}
        <div className="relative z-10">
          <img
            src="/lovable-uploads/37e6260b-26c7-4bdf-9453-1d5ba1c39f7b.png"
            alt="STEMverse logo"
            className="w-40 h-40 md:w-64 md:h-64 drop-shadow-2xl shadow-2xl transition-transform duration-300 hover:scale-105"
            style={{
              objectFit: "contain",
              background: "transparent",
              filter: "drop-shadow(0 8px 32px rgba(38,56,104,0.35)) drop-shadow(0 2px 8px rgba(255, 224, 102,0.08))"
            }}
          />
        </div>
        {/* Content */}
        <div className="flex flex-col items-start gap-4 max-w-xl z-20">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-stemblue mb-1 tracking-tight drop-shadow">
            Unlocking <span className="text-yellow-500">endless possibilities</span> to empower young innovators.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-medium bg-white/60 backdrop-blur rounded-xl px-2 py-1">
            Empowering everyone with skills for the future—kids, teens, teachers, and adults.<br />
            <span className="text-blue-600">#STEMverse</span>
          </p>
        </div>
      </div>
    </section>
  </main>
);

export default Home;
