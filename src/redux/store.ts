import { menuSlice } from '@/reducers/MenuReducer';
import {
    Action,
    configureStore,
    ThunkAction,
  } from '@reduxjs/toolkit';
  
  export const store = configureStore({
    reducer: {
        menu: menuSlice.reducer
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