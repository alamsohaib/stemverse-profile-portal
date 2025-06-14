
import React from "react";

// A lively, large SVG scene with playful layered animation!
const AnimatedKidsRobots = () => (
  <div className="w-full flex justify-center items-center select-none pointer-events-none z-10">
    <svg
      viewBox="0 0 900 350"
      width="100%"
      height="340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="max-w-5xl w-full"
      style={{ display: "block" }}
    >
      {/* Glowing background gradient for vibrancy */}
      <defs>
        <radialGradient id="bg-grad" cx="50%" cy="68%" r="70%">
          <stop offset="0%" stopColor="#ffecd2" />
          <stop offset="60%" stopColor="#c2e9fb" />
          <stop offset="100%" stopColor="#b9c6e2" />
        </radialGradient>
        <radialGradient id="robotGlow" cx="60%" cy="65%" r="30%">
          <stop offset="20%" stopColor="#80c0ff" stopOpacity="0.26" />
          <stop offset="100%" stopColor="#80c0ff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="ground-grad" cx="50%" cy="100%" r="60%">
          <stop offset="0%" stopColor="#e8f7f6" />
          <stop offset="100%" stopColor="#a2c2e7" />
        </radialGradient>
      </defs>
      {/* Background */}
      <rect width="900" height="360" fill="url(#bg-grad)" />
      {/* Ground shadow */}
      <ellipse
        cx="470"
        cy="310"
        rx="320"
        ry="25"
        fill="url(#ground-grad)"
        opacity="0.9"
        style={{
          animation: "groundpulse 3.5s infinite alternate"
        }}
      />
      {/* Giant robot with animated eyes and waving arm */}
      <g>
        {/* Glow */}
        <ellipse
          cx="670"
          cy="220"
          rx="100"
          ry="37"
          fill="url(#robotGlow)"
        />
        {/* Body */}
        <ellipse cx="670" cy="178" rx="54" ry="62" fill="#7dc1fa" />
        {/* Buttons */}
        <circle cx="670" cy="190" r="9" fill="#6060ff" opacity="0.28" />
        {/* Head */}
        <ellipse cx="670" cy="120" rx="36" ry="28" fill="#ffe76a" />
        {/* Antenna */}
        <rect x="664" y="89" width="12" height="18" rx="5" fill="#b2b2b2">
          <animate attributeName="y" values="89;80;89" dur="2s" repeatCount="indefinite"/>
        </rect>
        <circle cx="670" cy="84" r="8" fill="#81e6d9" opacity="0.7">
          <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite"/>
        </circle>
        {/* Eyes (animated blinking) */}
        <ellipse cx="660" cy="123" rx="5" ry="7" fill="#32365e">
          <animate attributeName="ry" values="7;2;7" keyTimes="0;0.15;1" dur="3s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="680" cy="123" rx="5" ry="7" fill="#32365e">
          <animate attributeName="ry" values="7;2;7" keyTimes="0;0.15;1" begin="0.3s" dur="3s" repeatCount="indefinite" />
        </ellipse>
        {/* Smile */}
        <path d="M661 134 Q670 145 679 134" stroke="#a4933d" strokeWidth="3" fill="none">
          <animate attributeName="d" values="
            M661 134 Q670 145 679 134;
            M661 134 Q670 148 679 134;
            M661 134 Q670 145 679 134
          " keyTimes="0;0.5;1" dur="2.7s" repeatCount="indefinite" />
        </path>
        {/* Left waving arm */}
        <g>
          <g>
            <rect x="601" y="155" width="38" height="14" rx="7" fill="#6286ff"
              style={{ transformOrigin: "604px 160px" }}>
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="0 604 160;-27 604 160;0 604 160"
                keyTimes="0;0.5;1"
                dur="2.5s"
                repeatCount="indefinite"
              />
            </rect>
            {/* Hand */}
            <ellipse cx="598" cy="162" rx="11" ry="9" fill="#ffe76a">
              <animate attributeName="cy" values="162;155;162" dur="2.5s" repeatCount="indefinite" />
            </ellipse>
            {/* Sparkle on hand (little star) */}
            <g>
              <polygon points="598,154 600,158 604,158 601,160 603,164 598,161 593,164 595,160 592,158 596,158"
                fill="#fff2a8" opacity="0.85">
                <animate attributeName="opacity" values="0.85;1;0.85;" dur="1.2s" repeatCount="indefinite" />
              </polygon>
            </g>
          </g>
        </g>
        {/* Right arm (raised up) */}
        <g>
          <rect x="713" y="143" width="37" height="13" rx="6.8" fill="#6286ff"
            style={{ transformOrigin: "748px 149px" }}>
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 748 149;30 748 149;0 748 149"
              keyTimes="0;0.5;1"
              dur="2.6s"
              repeatCount="indefinite"
            />
          </rect>
          {/* Hand */}
          <ellipse cx="754" cy="148" rx="11" ry="9" fill="#ffe76a">
            <animate attributeName="cy" values="148;140;148" dur="2.2s" repeatCount="indefinite" />
          </ellipse>
        </g>
        {/* Legs (robot hops) */}
        <rect x="647" y="235" width="13" height="47" rx="6" fill="#548be9">
          <animate attributeName="height" values="47;60;47" dur="2s" repeatCount="indefinite" />
        </rect>
        <rect x="678" y="235" width="13" height="47" rx="6" fill="#548be9">
          <animate attributeName="height" values="47;60;47" begin="0.3s" dur="2s" repeatCount="indefinite" />
        </rect>
      </g>

      {/* Kid 1 hopping with joy */}
      <g>
        {/* Shadow */}
        <ellipse cx="240" cy="308" rx="16" ry="5.2" fill="#bfe3ff" opacity="0.35">
          <animate attributeName="cy" values="308;295;308" dur="1.6s" repeatCount="indefinite" />
        </ellipse>
        {/* Body */}
        <rect x="228" y="236" width="27" height="54" rx="12" fill="#f9aac6">
          <animate attributeName="y" values="236;222;236" dur="1.6s" repeatCount="indefinite" />
        </rect>
        {/* Head */}
        <ellipse cx="241.5" cy="227" rx="15" ry="14" fill="#fff0c4">
          <animate attributeName="cy" values="227;213;227" dur="1.6s" repeatCount="indefinite" />
        </ellipse>
        {/* Smile */}
        <path d="M235 234 Q242 239 248 234" stroke="#875731" strokeWidth="3" fill="none" />
        {/* Eyes */}
        <ellipse cx="237.5" cy="229" rx="2" ry="2.3" fill="#875731" />
        <ellipse cx="245.5" cy="229" rx="2" ry="2.3" fill="#875731" />
        {/* Left arm (waving) */}
        <rect x="210" y="245" width="22" height="6" rx="2.8" fill="#fff0c4"
          style={{ transformOrigin: "221px 248px" }}>
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="13 221 248;30 221 248;13 221 248"
            dur="1.7s"
            repeatCount="indefinite"
          />
        </rect>
        {/* Right arm (reaching to robot) */}
        <rect x="255" y="247" width="25" height="6" rx="2.6" fill="#fff0c4"
          style={{ transformOrigin: "257px 249px" }}>
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="-18 257 249;-34 257 249;-18 257 249"
            dur="1.9s"
            repeatCount="indefinite"
          />
        </rect>
        {/* Blue pants */}
        <rect x="233" y="286" width="8" height="26" rx="4" fill="#5c6cf2" />
        <rect x="245" y="286" width="8" height="31" rx="4" fill="#3455c4" />
      </g>

      {/* Kid 2 running */}
      <g>
        {/* Shadow */}
        <ellipse cx="370" cy="310" rx="15" ry="6" fill="#bfe3ff" opacity="0.32">
          <animate attributeName="cx" values="370;390;370" dur="2s" repeatCount="indefinite" />
        </ellipse>
        {/* Legs */}
        <rect x="365" y="270" width="7" height="40" rx="3.5" fill="#20c442">
          <animate attributeName="height" values="40;30;40" dur="1.7s" repeatCount="indefinite" />
        </rect>
        <rect x="379" y="282" width="7" height="28" rx="3.3" fill="#6adecd" />
        {/* Body */}
        <rect x="362" y="230" width="32" height="48" rx="13.5" fill="#aeeff8" />
        {/* Head */}
        <ellipse cx="378" cy="218" rx="12" ry="12" fill="#fbe6a3" />
        {/* Smile */}
        <path d="M372.5 223 Q378 227 384 223" stroke="#895c1e" strokeWidth="2.2" fill="none" />
        {/* Eyes */}
        <ellipse cx="375" cy="219.5" rx="1.8" ry="2.1" fill="#6c4111" />
        <ellipse cx="381.7" cy="219.5" rx="1.8" ry="2.1" fill="#6c4111" />
        {/* Arms pumping */}
        <rect x="347" y="242" width="23" height="5.5" rx="2.5" fill="#fbe6a3"
          style={{ transformOrigin: "358px 244px" }}>
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="28 358 244;48 358 244;28 358 244"
            dur="2s" repeatCount="indefinite" />
        </rect>
        <rect x="390" y="239" width="18" height="5.5" rx="2.5" fill="#fbe6a3"
          style={{ transformOrigin: "399px 241px" }}>
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="-25 399 241;-45 399 241;-25 399 241"
            dur="2s" repeatCount="indefinite" />
        </rect>
      </g>

      {/* Small bot rolling */}
      <g>
        {/* Trail */}
        <ellipse cx="150" cy="290" rx="15" ry="4.5" fill="#bbdefb" opacity="0.5">
          <animate attributeName="cx" values="150;240;150" dur="4.5s" repeatCount="indefinite" />
        </ellipse>
        {/* Body */}
        <ellipse cx="150" cy="280" rx="13" ry="12" fill="#5ec8e6">
          <animate attributeName="cx" values="150;240;150" dur="4.5s" repeatCount="indefinite" />
        </ellipse>
        {/* Bottom wheel */}
        <ellipse cx="150" cy="292" rx="7" ry="3.5" fill="#333" opacity="0.26">
          <animate attributeName="cx" values="150;240;150" dur="4.5s" repeatCount="indefinite" />
        </ellipse>
        {/* Eyes */}
        <ellipse cx="145" cy="277" rx="1.6" ry="2.4" fill="#224b68" />
        <ellipse cx="155" cy="277" rx="1.6" ry="2.4" fill="#224b68" />
        {/* Antenna */}
        <rect x="147" y="266" width="6" height="13" rx="2" fill="#b7e5fa" />
        <circle cx="150" cy="265" r="3.3" fill="#ede37b">
          <animate attributeName="r" values="3.3;6;3.3" dur="2s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Floating sparkles around scene (animated stars) */}
      <g>
        <circle cx="220" cy="90" r="3" fill="#fcf8ba" opacity="0.85">
          <animate attributeName="cy" values="90;110;90" dur="3.4s" repeatCount="indefinite" />
        </circle>
        <circle cx="700" cy="65" r="2.5" fill="#fcf8ba" opacity="0.7">
          <animate attributeName="cy" values="65;48;65" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="500" cy="70" r="2.3" fill="#fcf8ba" opacity="0.65">
          <animate attributeName="cy" values="70;87;70" dur="3.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="740" cy="270" r="2.5" fill="#fcf8ba" opacity="0.8">
          <animate attributeName="cy" values="270;295;270" dur="3.1s" repeatCount="indefinite" />
        </circle>
        <circle cx="160" cy="192" r="2.7" fill="#fcf8ba" opacity="0.7">
          <animate attributeName="cy" values="192;170;192" dur="3.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="430" cy="290" r="2" fill="#fcf8ba" opacity="0.9">
          <animate attributeName="cy" values="290;310;290" dur="2.4s" repeatCount="indefinite" />
        </circle>
      </g>
      <style>{`
        @keyframes groundpulse {
          0% { opacity: 0.76; }
          100% { opacity: 0.95; }
        }
      `}</style>
    </svg>
  </div>
);

export default AnimatedKidsRobots;
