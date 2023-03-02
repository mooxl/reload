import type { Page } from "cms/types";
import payload from "payload";
import { cache } from "cache";

export const getPage = async (route: string): Promise<Page> => {
  if (!cache.has(route)) {
    console.log("NO CACHE", cache.has(route), route);
    cache.set(
      route,
      (
        await payload.find({
          collection: "pages",
          where: { route: { equals: route } },
          limit: 1,
        })
      ).docs[0]
    );
  }
  return cache.get(route);
};
