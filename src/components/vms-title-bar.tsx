import React, { useState, useEffect, useRef } from "react";
import moment from "moment";

import styled, { css } from "react-emotion";

import Tt2 from "../assets/images/titleTime2.png";
import Tt1 from "../assets/images/titleTime1.png";
import rtb from "../assets/images/risingTitleBg.png";

const VmsTitleBar: React.FC = () => {
    const d = moment().format("YYYY/MM/DD");
    const t = moment().format("hh:mm:ss");
    const [date, setDate] = useState(d);
    const [time, setTime] = useState(t);
    const timer: any = useRef(null);
    useEffect(() => {
        timer.current = setInterval(() => {
            let d = moment().format("YYYY/MM/DD");
            let t = moment().format("hh:mm:ss");
            setDate(d);
            setTime(t);
        }, 1000);

        return () => {
            // clean
            if (timer) {
                clearInterval(timer);
            }
        };
    }, []);
    return (
        <Container>
            <DatePicker>{date}</DatePicker>
            <TitleWrap>
                <Title>小树智城车联网平台</Title>
            </TitleWrap>
            <TimeClock>{time}</TimeClock>
        </Container>
    );
};

export default VmsTitleBar;

const Container = styled("div")({
    width: "904px",
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 2,
    textAlign: "center",
    color: "#fff",
});

const timeRange = css({
    display: "block",
    position: "absolute",
    top: 0,
    height: "50px",
    lineHeight: "36px",
    fontSize: "20px",
    color: "#b8e0ff",
    textShadow: "0 0 15px rgba(0,144,255,1)",
    textAlign: "left",
    paddingTop: "6px",
    fontFamily: "'LcdD','黑体','微软雅黑'",
    fontStyle: "italic",
});

const DatePicker = styled("span")(timeRange, {
    left: "4px",
    background: `url(${Tt2}) no-repeat center top`,
    width: "165px",
    paddingLeft: "75px",
});

const TimeClock = styled("span")(timeRange, {
    right: "4px",
    background: `url(${Tt1}) no-repeat center top`,
    width: "175px",
    paddingLeft: "65px",
});

const TitleWrap = styled("div")({
    width: "512px",
    height: "48px",
    paddingTop: "12px",
    margin: "6px 0 0 195px",
    position: "relative",
    background: `url(${rtb}) no-repeat center bottom`,
    backgroundSize: "100% auto",
});

const Title = styled("h1")({
    padding: "0 40px",
    lineHeight: "100%",
    fontSize: "1.5rem",
    fontWeight: "bold",
    textAlign: "center",
    textShadow: `0 0 15px rgba(26,187,156,1)`,
    position: "relative",
    display: "inline-block",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
});
