import { Application } from "egg";
import { EggShell } from "egg-shell-decorators";

export default (app: Application) => {
  const { controller, router } = app;
  EggShell(app, {
    prefix: "/",
    quickStart: true,
    swaggerOpt: {
      open: true,
      title: "示例",
      version: "1.0.0",
      host: "127.0.0.1",
      port: 7001,
      schemes: ["http"],
      paths: {
        outPath: "./app/public/json/main.json",
        definitionPath: "./definitions",
        swaggerPath: "./swagger"
      }
    }
  });
  router.get("/", controller.home.index);
};
