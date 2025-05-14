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
import { useState } from "react";

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
    const [order, setOrder] = useState<string[]>(["InventoryAgeAnalysis", "RiskAssessments"]);

    /* @ts-ignore */
    const map: Record<string, JSX.Element> = {
        InventoryAgeAnalysis: <InventoryAgeAnalysis />,
        RiskAssessments: <RiskAssessments />,
    };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        if (active.id !== over?.id) {
            setOrder((prev) => {
                const oldIndex = prev.indexOf(active.id as string);
                const newIndex = prev.indexOf(over?.id as string);
                return arrayMove(prev, oldIndex, newIndex);
            });
        }
    };

    return (
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={order} strategy={verticalListSortingStrategy}>
                <div className="flex justify-between flex-wrap max-w-[1360px] mx-auto gap-3 lg:flex-nowrap mt-3">
                    {order.map((id) => (
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