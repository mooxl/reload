import { useLoaderData } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getPage } from "~/utils/payload.server";

export const loader = async ({ params }: LoaderArgs) => {
  return json(await getPage(`/${params["*"] || ""}`));
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
  return (
    <main>
      {data.layout.blocks.map((block) => {
        switch (block.blockType) {
          case "title": {
            return (
              <h1
                key={block.id}
                className="text-4xl text-center bg-red-500 md:bg-blue-700"
              >
                {block.title}
              </h1>
            );
          }
          case "grid": {
            return (
              <div className="grid grid-cols-2 gap-2">
                {block.grid.map((item) => (
                  <div key={item.id} className="bg-red-500">
                    {item.title}
                  </div>
                ))}
              </div>
            );
          }
          case "image": {
            if (typeof block.image !== "string") {
              return (
                <img
                  key={block.id}
                  className="mx-auto my-6 h-52"
                  src={block.image.url}
                  alt={block.image.alt!}
                />
              );
            }
            break;
          }
        }
        return null;
      })}
    </main>
  );
}
