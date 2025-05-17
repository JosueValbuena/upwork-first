import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setSortMode } from "@/store/features/sort-mode/sortModeSlice";
import { useTheme } from "@/styles/theme-provider";

import { IconSortableNotAllowedOutlinedBlack, IconSortableOutlinedBlack } from '@/utils/icons'
import { useEffect } from "react";

const SortModeToggler = () => {

    const { value: isSortMode } = useAppSelector(state => state.sortMode);
    const dispatch = useAppDispatch();
    const { theme } = useTheme();

    const onToggleSortMode = () => {
        isSortMode ? dispatch(setSortMode(false)) : dispatch(setSortMode(true));
    };

    useEffect(() => {
        const storedValue = localStorage.getItem('draggedUserPreference');
        const draggedUserPreferences = storedValue ? JSON.parse(storedValue) : {};
        console.log({ draggedUserPreferences })
        let newDraggedUserPreferences = {
            ...draggedUserPreferences,
            isActive: isSortMode
        }
        localStorage.setItem('draggedUserPreference', JSON.stringify(newDraggedUserPreferences));
    }, [isSortMode]);

    return (
        <>
            {isSortMode ? (
                <IconSortableOutlinedBlack
                    className="mx-2 w-6 cursor-pointer text-foreground"
                    stroke={theme === 'dark' ? '#fff' : ''}
                    {...(theme === 'dark' ? { fill: '#fff' } : {})}
                    onClick={onToggleSortMode}
                />
            ) : (
                <IconSortableNotAllowedOutlinedBlack
                    className="mx-2 w-6 cursor-pointer text-foreground"
                    stroke={theme === 'dark' ? '#fff' : ''}
                    onClick={onToggleSortMode}
                />
            )}
        </>
    )
}

export default SortModeToggler