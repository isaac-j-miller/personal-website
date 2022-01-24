import React from "react";
import styled from "styled-components";
import { PointList } from "../types";

type PointsProps = {
  i: number;
  j: number;
  points: PointList[];
};

const LiWrapper = styled.span``;

export const Points: React.FC<PointsProps> = ({ points, i, j }) => {
  return (
    <LiWrapper>
      {points.map((point, k) => (
        <div key={`sh-${i}-${j}-${k}`}>
          <h2>{point.header}</h2>
          {point.blurb && <p>{point.blurb}</p>}
          <ul key={`sl-${i}-${j}-${k}`}>
            {point.items &&
              point.items.map((item, l) => {
                return <li key={`s-p-${i}-${j}-${k}-${l}`}>{item}</li>;
              })}
          </ul>
        </div>
      ))}
    </LiWrapper>
  );
};
