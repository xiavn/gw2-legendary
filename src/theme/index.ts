import { ThemeConfig } from "@chakra-ui/theme";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/theme-utils";
import components from "./components";
import typography from "./typography";

const config: ThemeConfig = {
    initialColorMode: "system",
    useSystemColorMode: true,
};

const overrides = {
    config,
    styles: {
        global: (props: StyleFunctionProps) => ({
            body: {
                bg: mode("gray.100", "gray.800")(props),
            },
        }),
    },
    ...typography,
    components,
};

export default extendTheme(overrides);
