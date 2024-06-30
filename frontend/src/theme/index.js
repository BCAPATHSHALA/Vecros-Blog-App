import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "Nunito, sans-serif",
    heading: "Nunito, sans-serif",
  },
  styles: {
    global: {
      "html, body": {
        fontFamily: "Nunito, sans-serif",
      },
    },
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});

export default theme;
