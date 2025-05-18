import { useEffect, useState } from "react";

import { useTheme } from "@/styles/theme-provider";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setSortMode } from "@/store/features/sort-mode/sortModeSlice";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import { IconSortableNotAllowedOutlinedBlack, IconSortableOutlinedBlack } from '@/utils/icons'
import PopoverCustom from "../pop-over-custom/PopOverCustom";
import { Button } from "@/components/ui/button";
import { ModalCustom } from "@/components/molecules";
import IMG from "@/assets/img/9u8edp.gif"

const SortModeToggler = () => {

    const [isOpen, changePopOverIsOpen] = useState<boolean | undefined>();
    const [isOpenModalInformavtive, setIsOpenModalInformative] = useState({
        isOpen: false,
        title: '',
        message: '',
        img: ''
    });
    const { value: isSortMode } = useAppSelector(state => state.sortMode);
    const dispatch = useAppDispatch();
    const { theme } = useTheme();

    const onToggleSortMode = () => {
        isSortMode ? dispatch(setSortMode(false)) : dispatch(setSortMode(true));
    };

    const handleOpenModal = () => {
        const storedValue = localStorage.getItem('dragInfoModal');
        const isModalShowed: boolean = storedValue ? JSON.parse(storedValue) : false;

        if (!isModalShowed) {
            setIsOpenModalInformative({
                isOpen: true,
                title: 'Tip',
                message: 'You can drag and rearrange the tiles on your dashboard.',
                img: IMG
            });
        };
    };

    const handleCloseModal = () => {
        setIsOpenModalInformative({
            isOpen: false,
            title: '',
            message: '',
            img: ''
        });

        localStorage.setItem('dragInfoModal', JSON.stringify(true));
    };

    const handleOpenPopOver = () => {
        isOpen ? handleClosePopOver() : changePopOverIsOpen(true)
    };

    const handleClosePopOver = () => {
        changePopOverIsOpen(false);
        localStorage.setItem('dragInfoButton', JSON.stringify(true));

        handleOpenModal();
    };

    const RenderComponente = () => {
        return (
            <div>
                <p>You can activate the rearange mode</p>
                <div className="mt-3 flex justify-end">
                    <Button onClick={handleClosePopOver}>Continue</Button>
                </div>
            </div>
        )
    };

    useEffect(() => {
        const storedValue = localStorage.getItem('dragInfoButton');
        const dragInfoButton = storedValue ? JSON.parse(storedValue) : false;
        if (!dragInfoButton) {
            changePopOverIsOpen(true);
        }

    }, []);

    useEffect(() => {
        const storedValue = localStorage.getItem('draggedUserPreference');
        const draggedUserPreferences = storedValue ? JSON.parse(storedValue) : {};
        let newDraggedUserPreferences = {
            ...draggedUserPreferences,
            isActive: isSortMode
        }
        localStorage.setItem('draggedUserPreference', JSON.stringify(newDraggedUserPreferences));
    }, [isSortMode]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            handleClosePopOver();
        }, 7000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div>
            <ModalCustom modalInfo={isOpenModalInformavtive} onAccept={handleCloseModal} />


            {isSortMode && (
                isOpen ? (
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <PopoverCustom
                                    triggerIcon={
                                        <IconSortableOutlinedBlack
                                            id="sort-toggle"
                                            className="mx-2 w-6 cursor-pointer text-foreground h-fit sort-toggle"
                                            stroke={theme === 'dark' ? '#fff' : ''}
                                            {...(theme === 'dark' ? { fill: '#fff' } : {})}
                                            onClick={onToggleSortMode}
                                        />
                                    }
                                    handleOpenPopOver={handleOpenPopOver}
                                    isOpen={isOpen}
                                    Render={RenderComponente}
                                    sideX={'left'}
                                    sideY={'end'}
                                />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Customize layout</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                ) : (
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <IconSortableOutlinedBlack
                                    id="sort-toggle"
                                    className="mx-2 w-6 cursor-pointer text-foreground h-fit sort-toggle"
                                    stroke={theme === 'dark' ? '#fff' : ''}
                                    {...(theme === 'dark' ? { fill: '#fff' } : {})}
                                    onClick={onToggleSortMode}
                                />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Customize layout</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                )
            )}

            {!isSortMode && (

                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <IconSortableNotAllowedOutlinedBlack
                                className="mx-2 w-6 cursor-pointer text-foreground h-fit"
                                stroke={theme === 'dark' ? '#fff' : ''}
                                onClick={onToggleSortMode}
                            />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Customize layout</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            )}

        </div>
    )
}

export default SortModeToggler