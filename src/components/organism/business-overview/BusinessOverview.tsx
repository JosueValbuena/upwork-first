import React, { useEffect, useState } from "react";
import { CardBusinessOverview } from "@/components/molecules";
import { metrics as metricsData } from "@/utils/constants";
/* @ts-ignore */
import { DndContext, closestCenter, DragEndEvent } from "@dnd-kit/core";
import {
    SortableContext,
    useSortable,
    arrayMove,
    rectSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useAppSelector } from "@/store/hooks";

// Componente contenedor sortable para cada tarjeta
const SortableCard = ({ id, children }: { id: string; children: React.ReactNode }) => {
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
    ${isSortMode ? 'cursor-grab' : ''}        
            `}
        >
            {children}
        </div>
    );
};

const BusinessOverview = () => {
    const [orderedMetrics, setOrderedMetrics] = useState<string[]>([]);
    const { value: isSortMode } = useAppSelector(state => state.sortMode);

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (active.id !== over?.id) {
            setOrderedMetrics((prev) => {
                const oldIndex = prev.indexOf(active.id as string);
                /* @ts-ignore */
                const newIndex = prev.indexOf(over.id as string);
                return arrayMove(prev, oldIndex, newIndex);
            });
        }
    };

    useEffect(() => {
        const storedValue = localStorage.getItem('draggedUserPreference');
        const draggedUserPreferences = storedValue ? JSON.parse(storedValue) : {};
        if (draggedUserPreferences?.dashboardBusinessOverviewLayout) {
            setOrderedMetrics(draggedUserPreferences?.dashboardBusinessOverviewLayout);
            return
        };

        if (!draggedUserPreferences?.dashboardBusinessOverviewLayout) {
            setOrderedMetrics(metricsData.map((m) => m.label))
        };
    }, []);

    useEffect(() => {
        if (orderedMetrics.length > 1) {
            const storedValue = localStorage.getItem('draggedUserPreference');
            const draggedUserPreferences = storedValue ? JSON.parse(storedValue) : {};
            let newDraggedUserPreferences = {
                ...draggedUserPreferences,
                dashboardBusinessOverviewLayout: orderedMetrics
            };

            localStorage.setItem('draggedUserPreference', JSON.stringify(newDraggedUserPreferences));
        }
    }, [orderedMetrics]);

    return (
        <div className={`my-3 flex justify-center ${isSortMode ? 'z-110' : ''}`}>
            {isSortMode ? (
                <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                    <SortableContext items={orderedMetrics} strategy={rectSortingStrategy}>
                        <div className="flex gap-y-1 gap-x-1 flex-wrap justify-center max-w-[1300px] mx-auto">
                            {orderedMetrics?.map((label) => {
                                const metric = metricsData.find((m) => m.label === label);
                                if (!metric) return null;

                                return (
                                    <SortableCard key={label} id={label}>
                                        <CardBusinessOverview data={metric} />
                                    </SortableCard>
                                );
                            })}
                        </div>
                    </SortableContext>
                </DndContext>
            ) : (
                <div className="flex gap-y-1 gap-x-1 flex-wrap justify-center max-w-[1300px] mx-auto">
                    {orderedMetrics?.map((label) => {
                        const metric = metricsData.find((m) => m.label === label);
                        if (!metric) return null;

                        return (
                            <React.Fragment key={label}>
                                <CardBusinessOverview data={metric} />
                            </React.Fragment>
                        );
                    })}
                </div>
            )}

        </div>
    );
};

export default BusinessOverview;
