self.__uv$config = {
  prefix: "/celestial/service/ultra/",
  encodeUrl: (str) => {
    if (!str) return str;
    return encodeURIComponent(str);
  },
  decodeUrl: (str) => {
    if (!str) return str;
    return decodeURIComponent(str);
  },
  handler:
    "/celestial/violet/violet.handler.js",
  client:
    "/celestial/violet/violet.client.js",
  bundle:
    "/celestial/violet/violet.bundle.js",
  config: "/celestial/violet.config.js",
  sw: "/celestial/violet/violet.sw.js",
}
