export type Tags =
  | "table"
  | "thead"
  | "tbody"
  | "tfoot"
  | "th"
  | "tr"
  | "td"
  | "caption"
  | "col"
  | "colgroup";

export interface Attributes {
  text?: string;
  children?: HTMLElement[];
}

export interface TableCreatorProps {
  tag: Tags;
  attributes?: Object;
}
