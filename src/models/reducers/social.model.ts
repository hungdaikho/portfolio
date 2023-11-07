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
    link: "https://www.facebook.com/profile.php?id=61552199285705",
  },
  {
    value: "twitter",
    src: "./images/social/twitter.png",
    link: "https://twitter.com/",
  },
  {
    value: "instagram",
    src: "./images/social/instagram.png",
    link: "https://www.instagram.com/",
  },
  {
    value: "linkedin",
    src: "./images/social/linkedin.png",
    link: "https://www.linkedin.com/in/hung-tran-9079a6257/",
  },
];
