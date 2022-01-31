export const safeWindow =
  typeof window === "undefined" ? { innerHeight: undefined, innerWidth: undefined } : window;
