import {
  ISocial,
  darkSocial,
  defaultSocial,
  lightSocial,
} from "@/models/reducers/social.model";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: Array<ISocial> = defaultSocial;
export const socialSlice = createSlice({
  name: "social",
  initialState,
  reducers: {
    setSocical: (
      state: Array<ISocial>,
      action: PayloadAction<Array<ISocial>>
    ) => {
      state = action.payload;
      return state;
    },
    changeSocialTheme: (
      state: Array<ISocial>,
      action: PayloadAction<string>
    ) => {
      state.forEach((social: ISocial) => {
        social.src =
          action.payload === "light"
            ? lightSocial[social.value]
            : darkSocial[social.value];
      });
      return state;
    },
  },
});
export default socialSlice.reducer;
export const { setSocical, changeSocialTheme } = socialSlice.actions;
