import { buildConfig } from "payload/config";
import path from "path";
import Pages from "./cms/collections/Pages";
import Users from "./cms/collections/Users";
import Media from "./cms/collections/Media";
import nestedDocs from "@payloadcms/plugin-nested-docs";

export default buildConfig({
  serverURL: "http://localhost:3000",
  admin: {
    user: Users.slug,
  },
  collections: [Pages, Media, Users],
  typescript: {
    outputFile: path.resolve(__dirname, "cms/types.ts"),
  },
  upload: {
    limits: {
      fileSize: 5000000, // 5MB
    },
  },
  plugins: [
    nestedDocs({
      collections: ["pages"],
      generateURL: (docs) =>
        docs.reduce((url, doc) => `${url}/${doc.slug}`, ""),
    }),
  ],
});
