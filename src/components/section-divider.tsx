import styled from "styled-components";

export const SectionDivider = styled.h1`
  font-family: "Patua One", helvetica;
  font-weight: bold;
  text-align: center;

  margin-left: 5%;
  margin-right: 5%;
  @media only screen and (min-width: 600px) {
    margin-left: 10%;
    margin-right: 10%;
    font-size: 64px;
  }
  border-bottom: 4px double black;
`;
