import { Controller } from "egg";
import { Get, Description, TagsAll } from "egg-shell-decorators";
@TagsAll("根目录。。。")
export default class HomeController extends Controller {
  @Get("/")
  @Description("进入根目录")
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi("egg");
  }
}
