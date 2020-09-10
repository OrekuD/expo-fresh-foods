import React from "react";
import Svg, { G, Path } from "react-native-svg";

interface Props {
  size: number;
  color?: string;
}

export function Close({ size, color }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20">
      <G
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path stroke={color} d="M.707.707l6.005 6.005M6.712.707L.707 6.712" />
      </G>
    </Svg>
  );
}
