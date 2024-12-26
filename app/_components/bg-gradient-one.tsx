import React from "react";

const BgGradientOne: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <svg
        className="w-full h-full"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <rect
          width="1440"
          height="800"
          fill="url(#paint0_radial_1020_560)"
          fillOpacity={0.4}
        />
        <rect
          width="1440"
          height="800"
          transform="matrix(1 0 0 -1 0 800)"
          fill="url(#paint1_radial_1020_560)"
        />
        <defs>
          <radialGradient
            id="paint0_radial_1020_560"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(644.436 -395.581) rotate(90) scale(1417.6 2231.73)"
          >
            <stop offset="0.208781" stopColor="#FFE9C5" />
            <stop offset="0.312499" stopColor="#500CB0" />
            <stop offset="0.512059" />
            <stop offset="1" />
          </radialGradient>
          <radialGradient
            id="paint1_radial_1020_560"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(720 -315.245) rotate(90) scale(1461.75 5801.2)"
          >
            <stop offset="0.208781" stopColor="#FFE9C5" />
            <stop offset="0.312499" stopColor="#500CB0" />
            <stop offset="0.512059" stopOpacity={0} />
            <stop offset="1" stopOpacity={0} />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};
export default BgGradientOne;
