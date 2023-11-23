import { IModal, defaultModal } from "@/models/modal.model";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: IModal = defaultModal;
export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModal: (state: IModal, action: PayloadAction<IModal>) => {
      state = action.payload;
      return state;
    },
  },
});
export default modalSlice.reducer;
export const { setModal } = modalSlice.actions;
