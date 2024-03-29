import LRUCache from "lru-cache";

const options = {
  max: 500,
  maxSize: 500000,
  ttl: 1000 * 60 * 60 * 24 * 30, // 30 days
  allowStale: true,
  sizeCalculation: (value: any) => Buffer.byteLength(JSON.stringify(value)),
  debug: true,
};

export const cache = new LRUCache(options);
