import React from "react";
import ReactDOM from "react-dom";
import injectGlobal from "./styles";
import Pages from "./pages/index";
import "@amap/amap-jsapi-types";
import { colors } from "./styles";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
// add reset css
injectGlobal();

interface PaletteColor {
    light?: string;
    main: string;
    dark?: string;
    contrastText?: string;
}

const theme = createMuiTheme({
    spacing: colors.spacing,
    palette: {
        primary: {
            main: colors.primary,
        },
        background: {
            default: colors.background,
        },
        secondary: colors.secondary,
        text: {
            primary: colors.text,
            secondary: colors.textSecondary,
        },
    },
    typography: {
        fontSize: 8,
    },
});

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Pages />
    </ThemeProvider>,
    document.getElementById("root")
);
