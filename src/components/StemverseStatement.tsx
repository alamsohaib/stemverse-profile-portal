
import React from "react";
import { Calculator, FlaskConical, Microchip, Home } from "lucide-react";

const ICON_SIZE = 42;

// Helper for rounded, colored backgrounds for icons
const IconBlock = ({
  children,
  color,
}: {
  children: React.ReactNode;
  color: string;
}) => (
  <span
    className={`inline-flex items-center justify-center rounded-md mx-1`}
    style={{
      background: color,
      padding: "2px 8px",
      verticalAlign: "middle",
      minWidth: ICON_SIZE,
      minHeight: ICON_SIZE,
      height: ICON_SIZE,
    }}
  >
    {children}
  </span>
);

const StemverseStatement = () => (
  <section className="w-full flex flex-col items-center justify-center px-2 py-7 bg-[#f8f6ed] relative z-[5]">
    <div className="text-center mb-3">
      <span className="text-base md:text-lg text-[#263868]">
        Here's a fun fact:<br />
        <span className="font-normal text-black/90">Behind every session is a mission to spark minds.</span>
      </span>
    </div>
    <div className="flex flex-col gap-3 md:gap-2 items-center w-full max-w-5xl">
      <span className="font-extrabold text-3xl md:text-5xl text-black leading-tight tracking-tight">
        Skills for{" "}
        <IconBlock color="#FFCE27">
          <Calculator color="#263868" size={ICON_SIZE - 6} strokeWidth={2.4} />
        </IconBlock>
        every age.
      </span>
      <span className="font-extrabold text-3xl md:text-5xl text-black leading-tight tracking-tight">
        STEM{" "}
        <IconBlock color="#71C676">
          <FlaskConical color="#263868" size={ICON_SIZE - 6} strokeWidth={2.4} />
        </IconBlock>
        for young minds.
      </span>
      <span className="font-extrabold text-3xl md:text-5xl text-black leading-tight tracking-tight">
        Powering up{" "}
        <IconBlock color="#A593F3">
          <FlaskConical color="#fff" size={ICON_SIZE - 6} strokeWidth={2.4} />
        </IconBlock>
        teachers.
      </span>
      <span className="font-extrabold text-3xl md:text-5xl text-black leading-tight tracking-tight">
        Ready for the{" "}
        <IconBlock color="#FFB800">
          <Microchip color="#263868" size={ICON_SIZE - 6} strokeWidth={2.4} />
        </IconBlock>
        <IconBlock color="#7AD7F9">
          <Home color="#263868" size={ICON_SIZE - 6} strokeWidth={2.4} />
        </IconBlock>
        future.
      </span>
    </div>
  </section>
);

export default StemverseStatement;
