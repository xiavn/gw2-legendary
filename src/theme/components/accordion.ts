import { accordionAnatomy as parts } from "@chakra-ui/anatomy";
import {
    createMultiStyleConfigHelpers,
    defineStyle,
} from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(parts.keys);

// Defining a custom variant called outline
const outline = definePartsStyle((props) => {
    return {
        container: {
            border: "1px solid",
            borderColor: "gray.100",
            m: 4,
        },
        button: {
            color: "gray.500",
            fontSize: "lg",
            alignItems: "center",
            _hover: {
                color: "teal.500",
                bg: "none",
            },
        },
    };
});

const variants = {
    outline,
};

const size = {
    md: defineStyle({
        w: 8,
        h: 8,
    }),
};

const sizes = {
    md: definePartsStyle({
        icon: size.md,
    }),
};

export default defineMultiStyleConfig({
    variants,
    sizes,
    defaultProps: {
        size: "md",
        variant: "outline",
    },
});
