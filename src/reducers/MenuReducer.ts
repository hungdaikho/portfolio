import { IMenu, defaultMenu } from "@/models/Menu.model";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: Array<IMenu> = defaultMenu
export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers:{
        changeActiveMenu : (state = initialState, action: PayloadAction<any>) =>{
            state.map((menu: IMenu)=>{
                if(menu.id === action.payload){
                    menu.active = true
                }else{
                    menu.active = false
                }
            })
            return state
        }
    }
})
export default menuSlice.reducer
export const {changeActiveMenu} = menuSlice.actions