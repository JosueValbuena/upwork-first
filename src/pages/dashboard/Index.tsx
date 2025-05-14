import {
    BusinessOverview,
    InventoryByBrand,
    LinearHorizontalChartSalesOverview,
} from "@/components/organism";
/* @ts-ignore */
import { closestCenter, DndContext, DragEndEvent } from "@dnd-kit/core";
import {
    SortableContext,
    verticalListSortingStrategy,
    useSortable,
    arrayMove
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";
import DashboardSectionOne from './sections-one/SectionOne';
import DashboardSectionTwo from './sections-two/SectionTwo';

const SortableItem = ({ id, children }: { id: string, children: React.ReactNode }) => {
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

const Dashboard = () => {
    /* @ts-ignore */
    const componentsMap: Record<string, JSX.Element> = {
        BusinessOverview: <BusinessOverview />,
        SalesOverview: <LinearHorizontalChartSalesOverview />,
        InventoryGroup1: <DashboardSectionOne />,
        InventoryGroup2: <DashboardSectionTwo />,
        InventoryByBrand: <InventoryByBrand />
    };

    const [componentOrder, setComponentOrder] = useState<string[]>([
        "BusinessOverview",
        "SalesOverview",
        "InventoryGroup1",
        "InventoryGroup2",
        "InventoryByBrand"
    ]);

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

    return (
        <div className="bg-background-primary-customized">
            <DndContext
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
            >
                <SortableContext
                    items={componentOrder}
                    strategy={verticalListSortingStrategy}
                >
                    {componentOrder.map((id) => (
                        <SortableItem key={id} id={id}>
                            {componentsMap[id]}
                        </SortableItem>
                    ))}
                </SortableContext>
            </DndContext>
        </div>
    );
};

export default Dashboard;