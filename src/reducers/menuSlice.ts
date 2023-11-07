import {
  IMenu,
  defaultMenu,
  srcDark,
  srcLight,
} from "@/models/reducers/menu.model";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: Array<IMenu> = defaultMenu;
export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenu: (state: Array<IMenu>, action: PayloadAction<Array<IMenu>>) => {
      state = action.payload;
      return state;
    },
    changeThemeIcon: (state: Array<IMenu>, action: PayloadAction<string>) => {
      state.forEach((menu: IMenu) => {
        menu.src =
          action.payload === "light"
            ? srcLight[menu.value]
            : srcDark[menu.value];
      });
      return state;
    },
    changeActiveMenu: (state: Array<IMenu>, action: PayloadAction<any>) => {
      state.forEach((menu: IMenu) => {
        if (menu.value === action.payload) {
          menu.active = true;
        } else {
          menu.active = false;
        }
      });
      return state;
    },
  },
});
export default menuSlice.reducer;
export const { setMenu, changeThemeIcon, changeActiveMenu } = menuSlice.actions;
