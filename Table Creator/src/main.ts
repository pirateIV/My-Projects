import { Attributes, Tags } from "./types";

const createTableElement = (tag: Tags, attributes: Attributes = {}) => {
  const $el = document.createElement(tag);

  for (const [attribute, attributeValue] of Object.entries(attributes)) {
    switch (attribute) {
      case "children":

    }
  }

  return $el;
};

const table = createTableElement("table", {
  children: [],
});

document.getElementById("app")!.appendChild(table);
