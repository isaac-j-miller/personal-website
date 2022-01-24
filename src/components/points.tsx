import React from "react";
import styled from "styled-components";
import { convert } from "../format";
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
          <h2 dangerouslySetInnerHTML={convert(point.header)} />
          {point.blurb && <p dangerouslySetInnerHTML={convert(point.blurb)} />}
          <ul key={`sl-${i}-${j}-${k}`}>
            {point.items &&
              point.items.map((item, l) => {
                return (
                  <li
                    key={`s-p-${i}-${j}-${k}-${l}`}
                    dangerouslySetInnerHTML={convert(item)}
                  />
                );
              })}
          </ul>
        </div>
      ))}
    </LiWrapper>
  );
};
