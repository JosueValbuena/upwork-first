import { configureStore } from '@reduxjs/toolkit';
import sortModeReducer from '@/store/features/sort-mode/sortModeSlice';

export const store = configureStore({
    reducer: {
        sortMode: sortModeReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;