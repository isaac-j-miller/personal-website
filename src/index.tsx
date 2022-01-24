import React from "react";
import { render } from "react-dom";
import { App } from "./app";

const fontLink = (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <link
      href="https://fonts.googleapis.com/css2?family=Patua+One&family=Zilla+Slab:ital,wght@0,300;0,400;1,300&display=swap"
      rel="stylesheet"
    />
  </>
);

const elem = document.createElement("div");
elem.id = "root";
document.body.appendChild(elem);
render(fontLink, document.head);
render(<App></App>, elem);
