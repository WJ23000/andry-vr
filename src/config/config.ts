/**
 * 添加项目配置文件
 */
const Env = process.env;
const env = Env.NODE_ENV;
let BASE_API = "";
let HOST = {
  LOGIN: "",
  FRONT: "",
};

if (env == "development") {
  BASE_API = "/api";
  HOST = {
    LOGIN: "http://localhost:8080/#/login",
    FRONT: "http://localhost:8080",
  };
} else {
  BASE_API = "http://119.3.229.111:8088/api/";
  HOST = {
    LOGIN: "http://119.3.229.111:8088/front/#/login",
    FRONT: "http://119.3.229.111:8088/front/#/",
  };
}

export { BASE_API, HOST };
