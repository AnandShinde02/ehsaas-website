import React from 'react';

const SVGBackground = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    className="svg-background"
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
  >
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#A7C7E7', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#E3D5F1', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="40" fill="url(#grad1)">
      <animate attributeName="r" from="40" to="50" begin="0s" dur="4s" repeatCount="indefinite" />
      <animate attributeName="opacity" from="0.7" to="0.3" begin="0s" dur="4s" repeatCount="indefinite" />
    </circle>
  </svg>
);

export default SVGBackground;
