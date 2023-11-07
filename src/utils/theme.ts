import { changeThemeIcon } from "@/reducers/menuSlice";
import { changeSocialTheme } from "@/reducers/socialSlice";
import { setTheme } from "@/reducers/themeSlice";
import { store } from "@/redux/store";

const changeTheme = () => {
  const state = store.getState();
  const theme = state.theme;
  const social = state.social;
  const boundary = document.getElementById("themeBoundary");
  const img = document.getElementById("imgTheme");
  if (theme.name === "light") {
    store.dispatch(changeThemeIcon("dark"));
    store.dispatch(changeSocialTheme("dark"));
    store.dispatch(setTheme({ name: "dark" }));
    boundary?.setAttribute("data-theme", "dark");
    img?.setAttribute("src", "./images/lightIcon.png");
  } else {
    store.dispatch(changeThemeIcon("light"));
    store.dispatch(changeSocialTheme("light"));
    store.dispatch(setTheme({ name: "light" }));
    boundary?.setAttribute("data-theme", "light");
    img?.setAttribute("src", "./images/darkIcon.png");
  }
};
export { changeTheme };
