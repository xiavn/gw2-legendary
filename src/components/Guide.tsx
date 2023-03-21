import { Accordion } from "@chakra-ui/react";
import { ComponentType } from "react";
import data from "../pathways/envoy.json";
import Stage, { StageStatus } from "./Stage";

const determineStatus = (id: string) => {
    if (id === "lost-art") {
        return StageStatus.COMPLETED;
    }
    if (id === "envoy-armor-1") {
        return StageStatus.IN_PROGRESS;
    }
    return StageStatus.LOCKED;
};

const Guide: ComponentType = () => {
    const order = (data.order as (keyof typeof data.stages)[]).map((stage) => ({
        ...data.stages[stage],
        status: determineStatus(data.stages[stage].id),
    }));
    return (
        <Accordion allowMultiple allowToggle defaultIndex={[0]}>
            {order.map((stage) => (
                <Stage key={stage.id} stage={stage} />
            ))}
        </Accordion>
    );
};

export default Guide;
