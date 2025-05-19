import { configureStore } from '@reduxjs/toolkit';
import sortModeReducer from '@/store/features/sort-mode/sortModeSlice';
import themeModeReducer from '@/store/features/theme-mode/themeModeSlice';

export const store = configureStore({
    reducer: {
        sortMode: sortModeReducer,
        themeMode: themeModeReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;