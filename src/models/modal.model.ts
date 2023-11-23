export interface IModal {
  width?: any;
  open?: boolean;
  content: any;
}
export const defaultModal: IModal = {
  width: "80%",
  open: false,
  content: null,
};
