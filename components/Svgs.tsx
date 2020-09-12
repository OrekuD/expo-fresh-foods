import React from "react";
import Svg, { G, Path, Circle, Line, Rect } from "react-native-svg";
import { SvgProps } from "../types";

export function Bulb({ size, color }: SvgProps) {
  return (
    <Svg width={size} height={size * 1.023} viewBox="0 0 30.814 31.532">
      <G id="bulb-icon" transform="translate(-537.007 -637.486)">
        <Path
          id="path"
          d="M550.181,660.911a8.465,8.465,0,1,1,4.488-.006"
          fill="none"
          stroke={color}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
        />
        <Path
          id="path-2"
          data-name="path"
          d="M546.515,658.8a8.441,8.441,0,0,1,2.585,6.089"
          fill="none"
          stroke={color}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
        />
        <Path
          id="path-3"
          data-name="path"
          d="M558.312,658.8a8.444,8.444,0,0,0-2.584,6.089"
          fill="none"
          stroke={color}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
        />
        <Path
          id="path-4"
          data-name="path"
          d="M555.728,664.891v1.61a2.017,2.017,0,0,1-2.017,2.017h-2.595A2.016,2.016,0,0,1,549.1,666.5v-1.61"
          fill="none"
          stroke={color}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
        />
        <Path
          id="path-5"
          data-name="path"
          d="M546.871,652.594a5.494,5.494,0,0,1,5.494-5.494"
          fill="none"
          stroke={color}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
        />
        <Line
          id="line"
          x2="2.467"
          transform="translate(551.131 665.448)"
          fill="none"
          stroke={color}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
        />
        <Line
          id="line-2"
          data-name="line"
          y2="3.15"
          transform="translate(551.722 637.986)"
          fill="none"
          stroke={color}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
        />
        <Line
          id="line-3"
          data-name="line"
          x1="3.15"
          transform="translate(564.171 653.585)"
          fill="none"
          stroke={color}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
        />
        <Line
          id="line-4"
          data-name="line"
          x1="3.15"
          transform="translate(537.507 653.585)"
          fill="none"
          stroke={color}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
        />
        <Line
          id="line-5"
          data-name="line"
          x1="2.014"
          y2="2.014"
          transform="translate(560.474 642.819)"
          fill="none"
          stroke={color}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
        />
        <Line
          id="line-6"
          data-name="line"
          x1="2.014"
          y1="2.014"
          transform="translate(541.881 642.819)"
          fill="none"
          stroke={color}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
        />
      </G>
    </Svg>
  );
}

export function Chat({ size, color }: SvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 19.717 19.722">
      <G
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M19.086 17.671l-.935-3.487a9.379 9.379 0 10-3.443 3.665l3.312.887a.87.87 0 001.066-1.065zM6.522 8.127h6.684M6.522 11.602h6.684" />
      </G>
    </Svg>
  );
}

export function Orders({ size, color }: SvgProps) {
  return (
    <Svg width={size} height={size * 0.79} viewBox="0 0 19 15">
      <G
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M5.5.5h11.265A1.735 1.735 0 0118.5 2.235v1.53A1.735 1.735 0 0116.765 5.5H5.5h0v-5h0zM5.5 9.5h11.265a1.735 1.735 0 011.735 1.735v1.53a1.735 1.735 0 01-1.735 1.735H5.5h0v-5h0zM5.5 5.5H2.13A1.6 1.6 0 01.5 3.922V2.078A1.6 1.6 0 012.13.5H5.5zM5.5 14.5H2.13A1.6 1.6 0 01.5 12.922v-1.844A1.6 1.6 0 012.13 9.5H5.5z" />
      </G>
    </Svg>
  );
}

export function Search({ size, color }: SvgProps) {
  return (
    <Svg width={size} height={size * 1.06} viewBox="0 0 18.833 19.921">
      <G transform="translate(0.5 0.5)">
        <Circle
          cx="8.015"
          cy="8.015"
          r="8.015"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.4"
        />
        <Line
          x2="4.514"
          y2="4.514"
          transform="translate(13.112 14.2)"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.4"
        />
      </G>
    </Svg>
  );
}

export function PlusIcon({ size, color }: SvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 21.299 21.299">
      <G transform="translate(-13.699 -13.699)">
        <Line
          y2="20.299"
          transform="translate(24.349 14.199)"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
        <Line
          x1="20.299"
          transform="translate(14.199 24.349)"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
      </G>
    </Svg>
  );
}

export function Settings({ size, color }: SvgProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 22.752 22.752">
      <G
        transform="translate(.5 .5)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Circle
          cx={4.045}
          cy={4.045}
          r={4.045}
          transform="translate(6.831 6.831)"
        />
        <Path d="M21.752 11.822V9.931a.857.857 0 00-.857-.857h-1.016a.863.863 0 01-.834-.6 8.449 8.449 0 00-.983-2.154.843.843 0 01.128-1.045h0a.858.858 0 000-1.212l-.5-.5a.856.856 0 00-1.212 0h0a.842.842 0 01-1.044.127 8.42 8.42 0 00-2.155-.982.863.863 0 01-.6-.835V.858a.857.857 0 00-.856-.857H9.931a.857.857 0 00-.856.857v1.016a.861.861 0 01-.6.834 8.458 8.458 0 00-2.155.983.842.842 0 01-1.044-.127h0a.856.856 0 00-1.212 0l-.5.5a.858.858 0 000 1.212h0a.843.843 0 01.128 1.045 8.449 8.449 0 00-.983 2.154.863.863 0 01-.834.6H.861a.857.857 0 00-.857.857v1.891a.857.857 0 00.857.857h1.016a.862.862 0 01.834.6 8.465 8.465 0 00.983 2.154.843.843 0 01-.128 1.045h0a.857.857 0 000 1.211l.5.5a.857.857 0 001.212 0h0a.842.842 0 011.044-.128 8.456 8.456 0 002.155.983.863.863 0 01.6.834v1.016a.856.856 0 00.856.857h1.892a.856.856 0 00.856-.857v-1.016a.863.863 0 01.6-.834 8.456 8.456 0 002.155-.983.842.842 0 011.044.128h0a.858.858 0 001.212 0l.5-.5a.857.857 0 000-1.211h0a.843.843 0 01-.128-1.045 8.465 8.465 0 00.983-2.154.862.862 0 01.834-.6h1.016a.857.857 0 00.855-.858z" />
      </G>
    </Svg>
  );
}

export function Store({ size, color }: SvgProps) {
  return (
    <Svg width={size} height={size * 0.89} viewBox="0 0 21.648 19.273">
      <G
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M21.146 11.624h-1.059v7.146h-2.916v-7.149h-4.233v7.149H1.558v-7.149H.5V9.504l1.858-5.291H19.29l1.858 5.291zm-11.124 4.233v-4.233h-5.55v4.233zM2.358.5H19.29v2.117H2.358z" />
      </G>
    </Svg>
  );
}

export function Cart({ size, color }: SvgProps) {
  return (
    <Svg width={size} height={size * 1.04} viewBox="0 0 25.778 26.748">
      <G
        transform="translate(.518 .5)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Circle
          cx={2.269}
          cy={2.269}
          r={2.269}
          transform="translate(15.902 21.211)"
        />
        <Path d="M8.1 21.211h11.792a2.312 2.312 0 002.331-2.16 2.269 2.269 0 00-2.267-2.378H6.497a3.975 3.975 0 01-3.676-2.462L.18 7.79a2.356 2.356 0 012.179-3.253h15.206" />
        <Path d="M8.492 21.211a3.975 3.975 0 01-3.676-2.463h0M17.565 4.537a2.269 2.269 0 002.269-2.269" />
        <Circle
          cx={2.269}
          cy={2.269}
          r={2.269}
          transform="translate(6.703 21.211)"
        />
        <Path d="M3.53 7.398l2.641 6.421M7.1 7.398l2.641 6.421M10.671 7.398l2.641 6.421M14.241 7.398l2.641 6.421M16.5 4.537l5.556 13.505M4.851 10.608h10.515M24.672.861A1.392 1.392 0 0023.385 0h-1.282a2.268 2.268 0 00-2.269 2.268h3.9a1.019 1.019 0 00.943-1.407z" />
      </G>
    </Svg>
  );
}

export function Recipes({ size, color }: SvgProps) {
  return (
    <Svg width={size} height={size * 0.77} viewBox="0 0 23.324 18.506">
      <G
        transform="translate(.5 .5)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Rect
          width={12.697}
          height={17.506}
          rx={0.872}
          transform="translate(4.813)"
        />
        <Path d="M3.271 2.76h1.543v11.987h0-1.543a.872.872 0 01-.872-.872V3.632a.872.872 0 01.872-.872z" />
        <Path d="M.872 5.088H2.4v7.33h0H.872A.872.872 0 010 11.546V5.96a.872.872 0 01.872-.872zM19.053 14.747H17.51h0V2.76h1.543a.872.872 0 01.872.872v10.243a.872.872 0 01-.872.872z" />
        <Path d="M21.452 12.418h-1.528 0v-7.33h1.528a.872.872 0 01.872.872v5.586a.872.872 0 01-.872.872zM11.162 10.869L8.896 12.06l.433-2.523L7.496 7.75l2.533-.368 1.133-2.3 1.133 2.3 2.533.368-1.833 1.787.433 2.523z" />
      </G>
    </Svg>
  );
}

export function Account({ size, color }: SvgProps) {
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

export function Padlock({ size, color }: SvgProps) {
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

export function Mail({ size, color }: SvgProps) {
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

export function Onboarding({ size, color }: SvgProps) {
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

export function Onboarding2({ size, color }: SvgProps) {
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
