import type { Block } from "payload/types";
import Title from "./Title";

const Grid: Block = {
  slug: "grid",
  labels: {
    singular: "Grid",
    plural: "Grids",
  },
  fields: [{ name: "grid", label: "Grid", type: "blocks", blocks: [Title] }],
};

export default Grid;
