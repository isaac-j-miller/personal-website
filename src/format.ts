import Md from "markdown-it";
import sup from "markdown-it-sup";

const md = Md({
  xhtmlOut: true,
  breaks: true,
  typographer: true,
}).use(sup);

export const convert = (
  text: string | undefined
): { __html: string } | undefined => {
  if (typeof text === "undefined") {
    return undefined;
  }
  const html = md.renderInline(text);
  return {
    __html: html,
  };
};
