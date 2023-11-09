import {
  IService,
  darkService,
  defaultService,
  lightService,
} from "@/models/reducers/service.model";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: Array<IService> = defaultService;
export const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    changeService: (state: Array<IService>, action: PayloadAction<string>) => {
      state.forEach((service: IService) => {
        service.url =
          action.payload === "light"
            ? lightService[service.name]
            : darkService[service.name];
      });
      return state;
    },
  },
});
export default serviceSlice.reducer;
export const { changeService } = serviceSlice.actions;
