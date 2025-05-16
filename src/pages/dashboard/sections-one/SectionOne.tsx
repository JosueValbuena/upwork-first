import { InventoryAgeAnalysis, RiskAssessments } from "@/components/organism";
/* @ts-ignore */
import { DndContext, closestCenter, DragEndEvent } from "@dnd-kit/core";
import {
    SortableContext,
    verticalListSortingStrategy,
    useSortable,
    arrayMove
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useEffect, useState } from "react";

const SortableItem = ({ id, children }: { id: string; children: React.ReactNode }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}  className="w-full lg:w-1/2" >
            {children}
        </div>
    );
};

const DashboardSectionOne = () => {
    const [componentOrder, setComponentOrder] = useState<string[]>([]);

    /* @ts-ignore */
    const map: Record<string, JSX.Element> = {
        InventoryAgeAnalysis: <InventoryAgeAnalysis />,
        RiskAssessments: <RiskAssessments />,
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
        if (draggedUserPreferences?.dashboardSectionOneLayout) {
            setComponentOrder(draggedUserPreferences?.dashboardSectionOneLayout);
            return
        };

        if (!draggedUserPreferences?.dashboardSectionOneLayout) {
            setComponentOrder([
                "InventoryAgeAnalysis",
                 "RiskAssessments"
            ])
        };
    }, []);

    useEffect(() => {
        if (componentOrder.length > 1) {
            const storedValue = localStorage.getItem('draggedUserPreference');
            const draggedUserPreferences = storedValue ? JSON.parse(storedValue) : {};
            let newDraggedUserPreferences = {
                ...draggedUserPreferences,
                dashboardSectionOneLayout: componentOrder
            };

            localStorage.setItem('draggedUserPreference', JSON.stringify(newDraggedUserPreferences));
        }
    }, [componentOrder]);

    return (
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
    );
};

export default DashboardSectionOne;