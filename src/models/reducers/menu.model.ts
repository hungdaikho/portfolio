export interface IMenu {
  name: string;
  active: boolean;
  value: string;
  src: any;
}

export const srcDark: any = {
  home: "./images/menus/dark/home.svg",
  about: "./images/menus/dark/about.svg",
  service: "./images/menus/dark/service.svg",
  project: "./images/menus/dark/portfolio.svg",
  blog: "./images/menus/dark/blog.svg",
  contact: "./images/menus/dark/contact.svg",
  testimonial: "./images/menus/dark/testimonial.svg",
};
export const srcLight: any = {
  home: "./images/menus/home.svg",
  about: "./images/menus/about.svg",
  service: "./images/menus/service.svg",
  project: "./images/menus/portfolio.svg",
  blog: "./images/menus/blog.svg",
  contact: "./images/menus/contact.svg",
  testimonial: "./images/menus/testimonial.svg",
};
export const defaultMenu: Array<IMenu> = [
  {
    name: "Home",
    active: true,
    value: "home",
    src: "./images/menus/home.svg",
  },
  {
    name: "About",
    active: false,
    value: "about",
    src: "./images/menus/about.svg",
  },
  {
    name: "Service",
    active: false,
    value: "service",
    src: "./images/menus/service.svg",
  },
  {
    name: "Project",
    active: false,
    value: "project",
    src: "./images/menus/portfolio.svg",
  },
  {
    name: "Certificate",
    active: false,
    value: "testimonial",
    src: "./images/menus/testimonial.svg",
  },
  {
    name: "Blog",
    active: false,
    value: "blog",
    src: "./images/menus/blog.svg",
  },
  {
    name: "Contact",
    active: false,
    value: "contact",
    src: "./images/menus/contact.svg",
  },
];
