import { defineStyleConfig } from "@chakra-ui/react";

const Divider = defineStyleConfig({
    baseStyle: {
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: "gray.900",
        _dark: {
            borderColor: "gray.200",
        },
    },
});

export default Divider;
