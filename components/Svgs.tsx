import React from "react";
import Svg, { G, Path, Circle, Line, Rect } from "react-native-svg";

interface Props {
  size: number;
  color?: string;
}

export function Account({ size, color }: Props) {
  return (
    <Svg width={size} height={size * 0.95} viewBox="0 0 19.692 18.686">
      <Path
        d="M19.192 18.186a9.343 9.343 0 00-7.167-9.081V8.066a4.1 4.1 0 10-4.358 0v1.039A9.343 9.343 0 00.5 18.186"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function Padlock({ size, color }: Props) {
  return (
    <Svg width={size} height={size * 1.1} viewBox="0 0 21 23.181">
      <G
        transform="translate(.5 .5)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M20 13.181v4.994a4.005 4.005 0 01-4.006 4.006H4.006A4.005 4.005 0 010 18.175v-4.994M0 9.327a4.005 4.005 0 014.006-4.005h11.988A4.005 4.005 0 0120 9.327" />
        <Circle
          cx={2.013}
          cy={2.013}
          r={2.013}
          transform="translate(7.987 10.166)"
        />
        <Path d="M5.421 4.581a4.579 4.579 0 019.158 0M10 14.192v2.304" />
      </G>
    </Svg>
  );
}

export function Mail({ size, color }: Props) {
  return (
    <Svg width={size} height={size * 0.76} viewBox="0 0 21 16">
      <G
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M20.5 4.5v6.994a4.005 4.005 0 01-4.006 4.006H4.506A4.005 4.005 0 01.5 11.494V4.5" />
        <Path d="M5.675.5H18.6L10.388 9 2.18.5z" />
      </G>
    </Svg>
  );
}

export function Onboarding({ size, color }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 315 315">
      <G transform="translate(1531.335 -288.772)">
        <Circle
          cx="157.5"
          cy="157.5"
          r="157.5"
          transform="translate(-1531.335 288.772)"
          fill={color}
        />
        <Line
          y2="10.409"
          transform="translate(-1484.947 465.347)"
          fill="none"
          stroke="#7bed8d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <Line
          x1="10.409"
          transform="translate(-1490.151 470.552)"
          fill="none"
          stroke="#7bed8d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <Line
          y2="10.409"
          transform="translate(-1283.53 521.364)"
          fill="none"
          stroke="#7bed8d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <Line
          x1="10.409"
          transform="translate(-1288.735 526.568)"
          fill="none"
          stroke="#7bed8d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <G transform="translate(-130 40)" opacity="0">
          <Line
            y2="10.409"
            transform="translate(-1283.53 521.364)"
            fill="none"
            stroke="#7bed8d"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
          />
          <Line
            x1="10.409"
            transform="translate(-1288.735 526.568)"
            fill="none"
            stroke="#7bed8d"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
          />
        </G>
        <Circle
          cx="6.169"
          cy="6.169"
          r="6.169"
          transform="translate(-1481.509 383.699)"
          fill="none"
          stroke="#7bed8d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <Circle
          cx="6.169"
          cy="6.169"
          r="6.169"
          transform="translate(-1273.825 430.672)"
          fill="none"
          stroke="#7bed8d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <Circle
          cx="6.169"
          cy="6.169"
          r="6.169"
          transform="translate(-1356.937 325.091)"
          fill="none"
          stroke="#7bed8d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <G transform="translate(-441.196 103.158)" opacity="0">
          <Path
            d="M-911.522,282.614h-42.215a17.257,17.257,0,0,0-17.237,17.237v23.655a17.257,17.257,0,0,0,17.237,17.237h10.643l10.465,9.057,10.464-9.057h10.643a17.257,17.257,0,0,0,17.237-17.237V299.851A17.257,17.257,0,0,0-911.522,282.614Z"
            fill="#f2fff1"
            stroke="#7bed8d"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
          />
          <Path
            d="M-916.673,305.135a8.259,8.259,0,0,0-7.745-5.791,7.95,7.95,0,0,0-5.641,2.372h0a13.171,13.171,0,0,0-2.57,3.224,13.188,13.188,0,0,0-2.571-3.224h0a7.95,7.95,0,0,0-5.641-2.372,8.259,8.259,0,0,0-7.745,5.791c-3.191,8.942,9.443,18.671,14.206,21.953a3.086,3.086,0,0,0,3.5,0C-926.116,323.806-913.482,314.077-916.673,305.135Z"
            transform="translate(0 100)"
            fill="#acffb2"
            stroke="#7bed8d"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
          />
        </G>
        <Path
          d="M-1400.882,506.791h75.744a14.844,14.844,0,0,0,14.968-13.869,14.573,14.573,0,0,0-14.556-15.277"
          fill="none"
          stroke="#7bed8d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <Path
          d="M-1311.4,486.3c0,.011.01.021.01.031,0-.01-.01-.02-.01-.031l-35.523-86.612h-90.831a15.141,15.141,0,0,0-14,20.9l16.968,41.237a25.519,25.519,0,0,0,23.6,15.821h86.459A14.583,14.583,0,0,1-1311.4,486.3Z"
          fill="#dfffca"
          stroke="#7bed8d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <Path
          d="M-1398.365,506.791a25.53,25.53,0,0,1-23.609-15.816"
          fill="none"
          stroke="#7bed8d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <Path
          d="M-1325.513,385.12a14.573,14.573,0,0,1-14.573,14.573h-6.839"
          fill="none"
          stroke="#7bed8d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <Circle
          cx="14.573"
          cy="14.573"
          r="14.573"
          transform="translate(-1403.706 506.791)"
          fill="#dfffca"
          stroke="#7bed8d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <Path
          d="M-1394.582,520.454a4.6,4.6,0,0,1,4.6-4.6"
          fill="none"
          stroke="#7bed8d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <Line
          x2="16.966"
          y2="41.241"
          transform="translate(-1430.233 418.069)"
          fill="none"
          stroke="#7bed8d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <Line
          x2="16.966"
          y2="41.241"
          transform="translate(-1407.3 418.069)"
          fill="none"
          stroke="#7bed8d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <Line
          x2="16.966"
          y2="41.241"
          transform="translate(-1384.366 418.069)"
          fill="none"
          stroke="#7bed8d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <Line
          x2="16.966"
          y2="41.241"
          transform="translate(-1361.432 418.069)"
          fill="none"
          stroke="#7bed8d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <Path
          d="M-1454.6,486.44"
          fill="none"
          stroke="#7bed8d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="8"
        />
        <Line
          x2="67.543"
          transform="translate(-1421.75 438.69)"
          fill="none"
          stroke="#7bed8d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <Path
          d="M-1294.438,376.082a8.935,8.935,0,0,0-8.263-5.535h-8.239a14.573,14.573,0,0,0-14.573,14.573h25.02a6.548,6.548,0,0,0,6.055-9.038Z"
          fill="#acffb2"
          stroke="#7bed8d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <Circle
          cx="14.573"
          cy="14.573"
          r="14.573"
          transform="translate(-1350.768 506.791)"
          fill="#dfffca"
          stroke="#7bed8d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <Path
          d="M-1341.644,520.454a4.6,4.6,0,0,1,4.6-4.6"
          fill="none"
          stroke="#7bed8d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <Path
          d="M-1371.2,398.563c.105-8.518-4.914-18.4-14.843-17.307a16.822,16.822,0,0,0-3.89.913,6.807,6.807,0,0,1-4.7,0,16.815,16.815,0,0,0-3.889-.913c-9.93-1.1-14.948,8.789-14.843,17.307"
          fill="#dfffca"
          stroke="#7bed8d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <Path
          d="M-1392.281,381.551a7.927,7.927,0,0,0-7.931-7.932"
          fill="none"
          stroke="#7bed8d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <Path
          d="M-1380.7,369.97a11.574,11.574,0,0,1-11.581,11.581A11.575,11.575,0,0,1-1380.7,369.97Z"
          fill="#dfffca"
          stroke="#7bed8d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <Path
          d="M-1398.921,389.172s-5.919,2.167-6.679,9.917"
          fill="#dfffca"
          stroke="#7bed8d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
      </G>
    </Svg>
  );
}

export function Onboarding2({ size, color }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 315 320">
      <G transform="translate(1090.139 -280.614)">
        <Circle
          cx="157.5"
          cy="157.5"
          r="157.5"
          transform="translate(-1090.139 285.614)"
          fill={color}
        />
        <G transform="translate(476.196 -89.158)">
          <Line
            y2="10.409"
            transform="translate(-1484.947 465.347)"
            fill="none"
            stroke="#7bed8d"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
          />
          <Line
            x1="10.409"
            transform="translate(-1490.151 470.552)"
            fill="none"
            stroke="#7bed8d"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
          />
        </G>
        <G transform="translate(431.196 -125.158)">
          <Line
            y2="10.409"
            transform="translate(-1283.53 521.364)"
            fill="none"
            stroke="#7bed8d"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
          />
          <Line
            x1="10.409"
            transform="translate(-1288.735 526.568)"
            fill="none"
            stroke="#7bed8d"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
          />
        </G>
        <G transform="translate(345.196 23.842)">
          <Line
            y2="10.409"
            transform="translate(-1283.53 521.364)"
            fill="none"
            stroke="#7bed8d"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
          />
          <Line
            x1="10.409"
            transform="translate(-1288.735 526.568)"
            fill="none"
            stroke="#7bed8d"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
          />
        </G>
        <Circle
          cx="6.169"
          cy="6.169"
          r="6.169"
          transform="translate(-1050.313 453.541)"
          fill="none"
          stroke="#7bed8d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <Circle
          cx="6.169"
          cy="6.169"
          r="6.169"
          transform="translate(-915.741 321.933)"
          fill="none"
          stroke="#7bed8d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
          opacity="0"
        />
        <Circle
          cx="6.169"
          cy="6.169"
          r="6.169"
          transform="translate(-831.629 487.514)"
          fill="none"
          stroke="#7bed8d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <Path
          d="M-911.522,282.614h-42.215a17.257,17.257,0,0,0-17.237,17.237v23.655a17.257,17.257,0,0,0,17.237,17.237h10.643l10.465,9.057,10.464-9.057h10.643a17.257,17.257,0,0,0,17.237-17.237V299.851A17.257,17.257,0,0,0-911.522,282.614Z"
          fill="#f2fff1"
          stroke="#7bed8d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <Path
          d="M-916.673,305.135a8.259,8.259,0,0,0-7.745-5.791,7.95,7.95,0,0,0-5.641,2.372h0a13.171,13.171,0,0,0-2.57,3.224,13.188,13.188,0,0,0-2.571-3.224h0a7.95,7.95,0,0,0-5.641-2.372,8.259,8.259,0,0,0-7.745,5.791c-3.191,8.942,9.443,18.671,14.206,21.953a3.086,3.086,0,0,0,3.5,0C-926.116,323.806-913.482,314.077-916.673,305.135Z"
          fill="#acffb2"
          stroke="#7bed8d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <Rect
          width="78.648"
          height="140.462"
          rx="14.832"
          transform="translate(-971.954 372.854)"
          fill="#dfffca"
          stroke="#7bed8d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <Rect
          width="78.648"
          height="58.54"
          rx="14.832"
          transform="translate(-971.954 372.854)"
          fill="#acffb2"
          stroke="#7bed8d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <Rect
          width="47.17"
          height="14.097"
          rx="6.352"
          transform="translate(-956.215 483.09)"
          fill="#7bed8d"
        />
        <Line
          x2="47.17"
          transform="translate(-956.215 448.07)"
          fill="#acffb2"
          stroke="#7bed8d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <Line
          x2="47.17"
          transform="translate(-956.215 458.31)"
          fill="#acffb2"
          stroke="#7bed8d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <Line
          x2="47.17"
          transform="translate(-956.215 468.551)"
          fill="#acffb2"
          stroke="#7bed8d"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <G transform="translate(460.196 30.842)">
          <Path
            d="M-1371.2,398.563c.105-8.518-4.914-18.4-14.843-17.307a16.822,16.822,0,0,0-3.89.913,6.807,6.807,0,0,1-4.7,0,16.815,16.815,0,0,0-3.889-.913c-9.93-1.1-14.948,8.789-14.843,17.307"
            fill="#dfffca"
            stroke="#7bed8d"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
          />
          <Path
            d="M-1392.281,381.551a7.927,7.927,0,0,0-7.931-7.932"
            fill="none"
            stroke="#7bed8d"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
          />
          <Path
            d="M-1380.7,369.97a11.574,11.574,0,0,1-11.581,11.581A11.575,11.575,0,0,1-1380.7,369.97Z"
            fill="#dfffca"
            stroke="#7bed8d"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
          />
          <Path
            d="M-1398.921,389.172s-5.919,2.167-6.679,9.917"
            fill="#dfffca"
            stroke="#7bed8d"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
          />
        </G>
      </G>
    </Svg>
  );
}
