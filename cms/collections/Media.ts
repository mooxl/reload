import type { CollectionConfig } from "payload/types";

const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: (): boolean => true, // Everyone can read Media
  },
  upload: {
    adminThumbnail: "card",
    staticDir: "media",
    staticURL: "/media",
    formatOptions: { format: "webp" },
    imageSizes: [
      {
        name: "card",
        width: 640,
        height: 480,
        formatOptions: { format: "webp" },
      },
      {
        name: "feature",
        width: 1024,
        height: 576,
        formatOptions: { format: "webp" },
      },
    ],
  },
  fields: [
    {
      name: "alt",
      label: "Alt Text",
      type: "text",
      required: true,
    },
  ],
};

export default Media;
