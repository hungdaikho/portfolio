export interface IService {
  value: any;
  url: string;
  name: string;
  title: any;
}
export const lightService: any = {
  webdevelop: "./images/service/webdevelop.png",
  mobile: "./images/service/mobile.png",
  uiux: "./images/service/uiux.png",
  server: "./images/service/server.png",
};
export const darkService: any = {
  webdevelop: "./images/service/dark/webdevelop.png",
  mobile: "./images/service/dark/mobile.png",
  uiux: "./images/service/dark/uiux.png",
  server: "./images/service/dark/server.png",
};
export const defaultService: Array<IService> = [
  {
    value: 1,
    url: "./images/service/webdevelop.png",
    name: "webdevelop",
    title: "Web Developer",
  },
  {
    value: 2,
    url: "./images/service/mobile.png",
    name: "mobile",
    title: "Mobile Developer",
  },
  {
    value: 3,
    url: "./images/service/uiux.png",
    name: "uiux",
    title: "UI-UX Design",
  },
  {
    value: 4,
    url: "./images/service/server.png",
    name: "server",
    title: "Server Developer",
  },
];
