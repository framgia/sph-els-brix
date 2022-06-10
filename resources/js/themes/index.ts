import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    config: {
        useSystemColorMode: true,
        initialColorMode: "dark",
    },
    fonts: {
        heading: "Nunito, sans-serif",
        body: "Nunito, sans-serif",
    },
});

export default theme;
