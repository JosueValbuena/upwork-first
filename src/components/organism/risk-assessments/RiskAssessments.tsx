import { useState } from "react";
import { CardRiskAssessments } from "@/components/molecules";
import { riskdData } from "@/utils/constants";
/* @ts-ignore */
import { DndContext, closestCenter, DragEndEvent } from "@dnd-kit/core";
import {
    SortableContext,
    useSortable,
    arrayMove,
    rectSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

// Componente individual sortable
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

const RiskAssessments = () => {
    const [orderedItems, setOrderedItems] = useState(riskdData.map(item => item.label));

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (active.id !== over?.id) {
            setOrderedItems((prev) => {
                const oldIndex = prev.indexOf(active.id as string);
                /* @ts-ignore */
                const newIndex = prev.indexOf(over.id as string);
                return arrayMove(prev, oldIndex, newIndex);
            });
        }
    };

    return (
        <div className="bg-background-secondary-customized px-4 py-3 grow-1 w-full pt-5">
            <p className="text-lg font-semibold">Risk Assessments</p>
            <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <SortableContext items={orderedItems} strategy={rectSortingStrategy}>
                    <div className="flex flex-row justify-between gap-y-3 gap-x-0 flex-wrap mt-1">
                        {orderedItems.map(label => {
                            const item = riskdData.find(i => i.label === label);
                            if (!item) return null;

                            return (
                                <SortableCard key={label} id={label}>
                                    <CardRiskAssessments riskData={item} />
                                </SortableCard>
                            );
                        })}
                    </div>
                </SortableContext>
            </DndContext>
        </div>
    );
};

export default RiskAssessments;