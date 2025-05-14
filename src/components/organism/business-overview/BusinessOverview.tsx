import { useState } from "react";
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

// Componente contenedor sortable para cada tarjeta
const SortableCard = ({ id, children }: { id: string; children: React.ReactNode }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            {children}
        </div>
    );
};

const BusinessOverview = () => {
    // Usamos el label como ID para ordenarlas
    const [orderedMetrics, setOrderedMetrics] = useState(metricsData.map((m) => m.label));

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

    return (
        <div className="my-3 flex justify-center">
            <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <SortableContext items={orderedMetrics} strategy={rectSortingStrategy}>
                    <div className="flex gap-y-1 gap-x-1 flex-wrap justify-center max-w-[1300px] mx-auto">
                        {orderedMetrics.map((label) => {
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
        </div>
    );
};

export default BusinessOverview;
