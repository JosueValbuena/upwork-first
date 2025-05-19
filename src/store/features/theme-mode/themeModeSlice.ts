import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/store/store";

export type Theme = "dark" | "light" | "system";
const STORAGE_KEY = "themeMode";

const getInitialTheme = (): Theme => {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored === "dark" || stored === "light" || stored === "system") {
        return stored;
      };

      localStorage.setItem(STORAGE_KEY, "light");
      return "light";
};

interface ThemeModeState {
    theme: Theme;
}

const initialState: ThemeModeState = {
    theme: getInitialTheme(),
};

const themeModeSlice = createSlice({
    name: "themeMode",
    initialState,
    reducers: {
        setThemeMode(state, action: PayloadAction<Theme>) {
            state.theme = action.payload;
            localStorage.setItem(STORAGE_KEY, action.payload);
        },
    },
});

export const { setThemeMode } = themeModeSlice.actions;
export const selectTheme = (state: RootState) => state.themeMode;
export default themeModeSlice.reducer;