import type { Block } from "payload/types";

const Title: Block = {
  slug: "title",
  labels: {
    singular: "Titel",
    plural: "Titel",
  },
  fields: [{ name: "title", label: "Titel", type: "text" }],
};

export default Title;
