import type { RootState } from "@/store/store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

interface SortModeSlice {
    value: boolean
};

const getInitialSortMode = (): boolean => {
    try {
        const stored = localStorage.getItem('draggedUserPreference');
        if (!stored) return true;
        const parsed = JSON.parse(stored);
        return typeof parsed.isActive === 'boolean' ? parsed.isActive : true;
    } catch {
        return true;
    }
};

const initialState: SortModeSlice = {
    value: getInitialSortMode(),
};

export const sortModeSlice = createSlice({
    name: 'sortMode',
    initialState,
    reducers: {
        setSortMode: (state, action: PayloadAction<boolean>) => {
            state.value = action.payload;
        },
    },
});

export const { setSortMode } = sortModeSlice.actions;
export const selectModeSlice = (state: RootState) => state.sortMode.value;
export default sortModeSlice.reducer;