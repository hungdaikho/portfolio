export interface ISocial {
  value: string;
  src: any;
  link: any;
}
export const darkSocial: any = {
  facebook: "./images/social/dark/facebook.png",
  twitter: "./images/social/dark/twitter.png",
  instagram: "./images/social/dark/instagram.png",
  linkedin: "./images/social/dark/linkedin.png",
};
export const lightSocial: any = {
  facebook: "./images/social/facebook.png",
  twitter: "./images/social/twitter.png",
  instagram: "./images/social/instagram.png",
  linkedin: "./images/social/linkedin.png",
};
export const defaultSocial: Array<ISocial> = [
  {
    value: "facebook",
    src: "./images/social/facebook.png",
    link: "",
  },
  {
    value: "twitter",
    src: "./images/social/twitter.png",
    link: "",
  },
  {
    value: "instagram",
    src: "./images/social/instagram.png",
    link: "",
  },
  {
    value: "linkedin",
    src: "./images/social/linkedin.png",
    link: "",
  },
];
