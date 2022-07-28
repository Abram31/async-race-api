import { body, createDomNode, IDomNode } from "../base/base";

const headerDescription: IDomNode = {
  typeElement: "header",
  className: "header",
  parentElement: body,
};
export const header = createDomNode(headerDescription);
