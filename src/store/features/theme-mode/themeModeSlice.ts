import type { RootState } from "@/store/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';

interface ThemeModeSlice {
    theme: string
};

const getInitialThemeMode = (): string => {
    try {
        const stored = localStorage.getItem('themeMode');
        if (!stored) {
            localStorage.setItem('themeMode', JSON.stringify('light'))
            return 'light';
        }
        const parsed = JSON.parse(stored);
        return parsed
    } catch {
        return 'light'
    };
};

const initialState: ThemeModeSlice = {
    theme: getInitialThemeMode(),
};

export const themeModeSlice = createSlice({
    name: 'themeMode',
    initialState,
    reducers: {
        setThemeMode: (state, action: PayloadAction<string>) => {
            state.theme = action.payload;
        },
    },
});

export const { setThemeMode } = themeModeSlice.actions;
export const selectThemeSlice = (state: RootState) => state.themeMode;
export default themeModeSlice.reducer;