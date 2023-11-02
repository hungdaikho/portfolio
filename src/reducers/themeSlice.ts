import { ITheme, defaultTheme } from "@/models/reducers/theme.model";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: ITheme = defaultTheme;
export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state: ITheme, action: PayloadAction<ITheme>) => {
      state = action.payload;
      return state;
    },
  },
});
export default themeSlice.reducer;
export const { setTheme } = themeSlice.actions;
