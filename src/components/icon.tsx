import React from "react";
import styled from "styled-components";

export type Props = {
  src: string;
  link: string;
};

const Icon = styled.img`
  height: 2em;
  width: auto;
`;
const IconAnchor = styled.a``;

export const SocialIcon: React.FC<Props> = (props) => {
  return (
    <IconAnchor href={props.link}>
      <Icon src={props.src} />
    </IconAnchor>
  );
};
