import Title from "../blocks/Title";
import Image from "../blocks/Image";
import Grid from "../blocks/Grid";
import type { CollectionConfig } from "payload/types";
const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
  },
  /*  hooks: {
    afterChange: [
      async ({ doc }) => {
        cache.delete(doc.route);
      },
    ],
  }, */
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "public",
          label: "Öffentlich",
          type: "checkbox",
          defaultValue: false,
        },
        {
          name: "home",
          label: "Startseite",
          type: "checkbox",
          defaultValue: false,
        },
      ],
    },
    {
      name: "title",
      label: "Seitentitel",
      type: "text",
      required: true,
      unique: true,
      admin: {
        condition: (data) => !data.home,
      },
    },
    {
      name: "layout",
      label: "Aufbau",
      type: "group",
      fields: [
        {
          name: "blocks",
          label: "Blöcke",
          type: "blocks",
          blocks: [Title, Image, Grid],
        },
      ],
    },
    {
      name: "meta",
      label: "Metadaten",
      type: "group",
      fields: [
        {
          name: "title",
          label: "Titel",
          type: "text",
        },
        {
          name: "description",
          label: "Beschreibung",
          type: "textarea",
        },
        {
          name: "keywords",
          label: "Schlagwörter",
          type: "text",
        },
      ],
    },
    {
      name: "route",
      label: "Pfad",
      type: "text",
      admin: { position: "sidebar", readOnly: true },
      hooks: {
        beforeChange: [
          ({ data }) => {
            if (data && data.breadcrumbs) {
              const route = data!.breadcrumbs.at(-1).url;
              return route === "/null" ? "/" : route;
            }
          },
        ],
      },
    },
    {
      name: "slug",
      label: "Pfad",
      type: "text",
      admin: {
        hidden: true,
      },
      hooks: {
        beforeValidate: [
          ({ data }) => {
            if (data!.home) {
              return null;
            } else {
              return data!.title
                .replace(/ /g, "-")
                .replace(/[^\w-/]+/g, "")
                .toLowerCase();
            }
          },
        ],
      },
    },
  ],
};

export default Pages;
