import menuSlice from "@/reducers/menuSlice";
import modalSlice from "@/reducers/modalSlice";
import serviceSlice from "@/reducers/serviceSlice";
import socialSlice from "@/reducers/socialSlice";
import themeSlice from "@/reducers/themeSlice";
import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    menu: menuSlice,
    social: socialSlice,
    service: serviceSlice,
    modal: modalSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
