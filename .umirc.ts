import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/demo1", component: "Demo1" },
    { path: "/demo2", component: "Demo2" },
    { path: "/demo3", component: "Demo3" },
    { path: "/demo4", component: "Demo4" },
    { path: "/demoEmpty", component: "DemoEmpty" },
    { path: "/keyDownError", component: "KeyDownError" },
    { path: "/showMoreOverOneLine", component: "ShowMoreOverOneLine" },
    { path: "/verticalEllipse", component: "VerticalEllipse" },
  ],
  npmClient: "yarn",
  plugins: [require.resolve("@umijs/plugins/dist/unocss")],
  unocss: {
    // 检测 className 的文件范围，若项目不包含 src 目录，可使用 `pages/**/*.tsx`
    watch: ["src/**/*.tsx"],
  },
  proxy: {
    "/api": {
      target: "https://ap.api-bet.net/api",
      changeOrigin: true,
      pathRewrite: { "^/api": "" },

      // localAddress: "45.150.227.37",
      // localAddress: "127.0.0.1:23457",
    },
  },
});
