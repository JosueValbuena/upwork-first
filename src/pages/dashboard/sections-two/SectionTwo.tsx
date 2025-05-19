import { InventoryAllocation, SmartRepricerActivityLog } from "@/components/organism";
import { useAppSelector } from "@/store/hooks";
/* @ts-ignore */
import { DndContext, closestCenter, DragEndEvent } from "@dnd-kit/core";
import {
    SortableContext,
    verticalListSortingStrategy,
    useSortable,
    arrayMove
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React, { useEffect, useState } from "react";

const SortableItem = ({ id, children }: { id: string; children: React.ReactNode }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
    const { value: isSortMode } = useAppSelector(state => state.sortMode);

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className={`
            w-full lg:w-1/2
            ${isSortMode ? 'cursor-grab' : ''}
        `}
        >
            {children}
        </div>
    );
};

const DashboardSectionTwo = () => {
    const [componentOrder, setComponentOrder] = useState<string[]>([]);
    const { value: isSortMode } = useAppSelector(state => state.sortMode);

    /* @ts-ignore */
    const map: Record<string, JSX.Element> = {
        InventoryAllocation: <InventoryAllocation />,
        SmartRepricerActivityLog: <SmartRepricerActivityLog />,
    };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        if (active.id !== over?.id) {
            setComponentOrder((prev) => {
                const oldIndex = prev.indexOf(active.id as string);
                const newIndex = prev.indexOf(over?.id as string);
                return arrayMove(prev, oldIndex, newIndex);
            });
        }
    };

    useEffect(() => {
        const storedValue = localStorage.getItem('draggedUserPreference');
        const draggedUserPreferences = storedValue ? JSON.parse(storedValue) : {};
        if (draggedUserPreferences?.dashboardSectionTwoLayout) {
            setComponentOrder(draggedUserPreferences?.dashboardSectionTwoLayout);
            return
        };

        if (!draggedUserPreferences?.dashboardSectionTwoLayout) {
            setComponentOrder([
                "InventoryAllocation",
                "SmartRepricerActivityLog"
            ]);
        };
    }, []);

    useEffect(() => {
        if (componentOrder.length > 1) {

            const storedValue = localStorage.getItem('draggedUserPreference');
            const draggedUserPreferences = storedValue ? JSON.parse(storedValue) : {};
            let newDraggedUserPreferences = {
                ...draggedUserPreferences,
                dashboardSectionTwoLayout: componentOrder
            };

            localStorage.setItem('draggedUserPreference', JSON.stringify(newDraggedUserPreferences));
        }
    }, [componentOrder]);

    return (
        <>
            {isSortMode ? (
                <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                    <SortableContext items={componentOrder} strategy={verticalListSortingStrategy}>
                        <div className="flex justify-between flex-wrap max-w-[1360px] mx-auto gap-3 lg:flex-nowrap mt-3">
                            {componentOrder.map((id) => (
                                <SortableItem key={id} id={id}>
                                    {map[id]}
                                </SortableItem>
                            ))}
                        </div>
                    </SortableContext>
                </DndContext>
            ) : (
                <div className="flex justify-between flex-wrap max-w-[1360px] mx-auto gap-3 lg:flex-nowrap mt-3">
                    {componentOrder.map((id) => (
                        <React.Fragment key={id}>
                            {map[id]}
                        </React.Fragment>
                    ))}
                </div>
            )}
        </>
    );
};

export default DashboardSectionTwo;