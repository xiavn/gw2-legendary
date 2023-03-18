import { Accordion } from "@chakra-ui/react";
import { ComponentType } from "react";
import data from "../pathways/envoy.json";
import Stage from "./Stage";

const Guide: ComponentType = () => {
    const order = data.order as (keyof typeof data.stages)[];
    return (
        <Accordion>
            {order.map((stage) => (
                <Stage key="stage" stage={data.stages[stage]} />
            ))}
        </Accordion>
    );
};

export default Guide;
