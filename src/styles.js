import { injectGlobal } from "react-emotion";
import fullScreenBg from "./assets/images/fullScreenBg.jpg";

export const unit = 8;
export const colors = {
    primary: "#e6c922",
    spacing: 5,
    secondary: {
        main: "#14cbc4",
        light: "#fff",
        dark: "#fff",
        contrastText: "#fff",
    },
    accent: "#e535ab",
    background: "rgba(0,144,255,.2)",
    grey: "#d8d9e0",
    text: "#b8e0ff",
    textSecondary: "#b8e0ff",
};

export default () =>
    injectGlobal({
        // reset strat
        [["html", "body"]]: {
            height: "100%",
        },
        body: {
            margin: 0,
            padding: 0,
            fontFamily: "微软雅黑, 宋体, 黑体,'Source Sans Pro', sans-serif",
            backgroundColor: colors.background,
            color: colors.text,
            lineHeight: 1,
            overflow: "hidden",
            minWidth: "1024px",
            backgroundImage: `url(${fullScreenBg})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
        },
        "#root": {
            display: "flex",
            flexDirection: "column",
            minHeight: "100%",
        },
        a: {
            textDecoration: "none",
            color: "inherit",
        },
        [["h1", "h2", "h3", "h4", "h5", "h6"]]: {
            margin: 0,
            fontWeight: 600,
        },
        h1: {
            fontSize: 48,
            lineHeight: 1,
        },
        h2: {
            fontSize: 40,
        },
        h3: {
            fontSize: 36,
        },
        h5: {
            fontSize: 16,
            textTransform: "uppercase",
            letterSpacing: 4,
        },
        [["ol", "ul"]]: {
            listStyle: "none",
            margin: 0,
            padding: 0,
        },
        [["blockquote", "q"]]: {
            quotes: "none",
        },
        [["blockquote:before", "blockquote:after", "q:before", "q:after"]]: {
            content: '""',
        },
        table: {
            borderCollapse: "collapse",
            borderSpacing: 0,
        },
        ".MuiTreeView-root :first-child a": {
            marginLeft: "23px"
        },
        ".card-echart:last-child": {
            paddingBottom: "0 !important",
        }
    });

