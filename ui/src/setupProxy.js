const { createProxyMiddleware } = require("http-proxy-middleware");
// const target = process.env.WF_SERVER || "http://10.190.32.158:8080";
const target = process.env.WF_SERVER || "http://10.190.51.224:8080";

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: target,
      //pathRewrite: { "^/api/": "/" },
      changeOrigin: true,
    })
  );
};
