
import React from "react";

const AnimatedKidsRobots = () => (
  <svg
    width="260"
    height="230"
    viewBox="0 0 260 230"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="animate-fade-in"
    style={{ display: "block" }}
  >
    {/* Ground */}
    <ellipse
      cx="130"
      cy="210"
      rx="95"
      ry="16"
      fill="#e6e7ee"
      style={{
        animation: "pulse 2.5s infinite alternate"
      }}
    />
    {/* Robot (simple round robot with waving arm) */}
    <g>
      <ellipse cx="174" cy="160" rx="28" ry="32" fill="#89b6ff" />
      <rect x="163" y="184" width="22" height="12" rx="6" fill="#607cff" />
      {/* Head */}
      <ellipse cx="174" cy="135" rx="16" ry="14" fill="#ffe066" />
      <circle cx="174" cy="134" r="4" fill="#aaa" />
      {/* Eyes */}
      <ellipse cx="170" cy="137" rx="2" ry="2.5" fill="#444" />
      <ellipse cx="178" cy="137" rx="2" ry="2.5" fill="#444" />
      {/* Left waving arm */}
      <g style={{
        transformOrigin: "156px 150px",
        animation: "wave-arm 1.8s infinite alternate"
      }}>
        <rect x="145" y="145" width="13" height="5" rx="2" fill="#607cff" />
        <circle cx="144" cy="148" r="4" fill="#ffe066" />
      </g>
      {/* Right arm */}
      <rect x="193" y="148" width="14" height="5" rx="2.5" fill="#607cff" />
      <circle cx="208" cy="151" r="4" fill="#ffe066" />
    </g>
    {/* Kid 1 */}
    <g>
      {/* Body */}
      <rect x="50" y="144" width="20" height="30" rx="8" fill="#ffa9c1" />
      {/* Head */}
      <ellipse cx="60" cy="137" rx="9.5" ry="10" fill="#fde2a3" />
      {/* Eyes */}
      <ellipse cx="57" cy="139" rx="1.2" ry="1.6" fill="#885839" />
      <ellipse cx="63" cy="139" rx="1.2" ry="1.6" fill="#885839" />
      {/* Smile */}
      <path d="M57 143 Q60 146 63 143" stroke="#885839" strokeWidth="1" fill="none" />
      {/* Left arm */}
      <rect x="36" y="155" width="18" height="4" rx="2" fill="#fde2a3"
        style={{ transform: 'rotate(-19deg)', transformOrigin: '53px 157px', animation: 'kidarm1 2s infinite alternate' }} />
      {/* Right arm raised "touching robot" */}
      <rect x="68" y="152" width="17" height="4" rx="2" fill="#fde2a3"
        style={{ transform: 'rotate(32deg)', transformOrigin: '69px 154px', animation: 'kidarm2 1.9s infinite alternate' }} />
      {/* Leg left */}
      <rect x="52" y="172" width="3.2" height="18" rx="1.5" fill="#5569ad" />
      {/* Leg right */}
      <rect x="65" y="172" width="3.2" height="18" rx="1.5" fill="#5569ad" />
    </g>
    {/* Kid 2 playing with robot */}
    <g>
      {/* Body */}
      <rect x="110" y="162" width="17" height="28" rx="7" fill="#9fffc7" />
      {/* Head */}
      <ellipse cx="119" cy="156" rx="7.5" ry="8" fill="#fddea3" />
      {/* Eyes */}
      <ellipse cx="116" cy="158" rx="1" ry="1.5" fill="#554421" />
      <ellipse cx="121.5" cy="158" rx="1" ry="1.5" fill="#554421" />
      {/* Smile */}
      <path d="M117 161 Q119 163 122 161" stroke="#554421" strokeWidth="1" fill="none" />
      {/* Arm reaching toward robot */}
      <rect x="123" y="167" width="16" height="4" rx="2" fill="#fddea3"
        style={{ transform: 'rotate(-19deg)', transformOrigin: '127px 169px', animation: 'kid2arm 1.4s infinite alternate' }} />
      {/* Arm (side) */}
      <rect x="107" y="169" width="9" height="3" rx="1.2" fill="#fddea3" />
      {/* Legs */}
      <rect x="112" y="185" width="2.6" height="13" rx="1.2" fill="#228e55" />
      <rect x="123" y="187" width="2.6" height="13" rx="1.2" fill="#228e55" />
    </g>
    {/* Styles for simple animation */}
    <style>{`
      @keyframes wave-arm {
        0% { transform: rotate(-10deg); }
        100% { transform: rotate(25deg); }
      }
      @keyframes kidarm1 {
        0% { transform: rotate(-18deg); }
        100% { transform: rotate(-34deg); }
      }
      @keyframes kidarm2 {
        0% { transform: rotate(34deg); }
        100% { transform: rotate(14deg); }
      }
      @keyframes kid2arm {
        0% { transform: rotate(-20deg);}
        100%{ transform: rotate(5deg);}
      }
      @keyframes pulse {
        0% { opacity: 0.7; }
        100% { opacity: 1; }
      }
    `}</style>
  </svg>
);

export default AnimatedKidsRobots;
