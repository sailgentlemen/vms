import React from "react";
import CustomScroll from "react-custom-scroll";
import styled from "react-emotion";
import { colors } from "../styles";
import mapRightTop from "../assets/images/mapRightTop.png";
import mapRightBottom from "../assets/images/mapRightBottom.png";

import Draggable from "react-draggable";

interface ScrollViewMenu {
    title: string;
}

const ScrollView: React.FC<ScrollViewMenu> = ({ children, title }) => {
    const onStart = () => {};
    const onStop = () => {};
    const dragHandlers = { onStart: onStart, onStop: onStop };
    return (
        <Draggable {...dragHandlers}>
            <div>
                <Container>
                    <Title>{title}</Title>
                    <CustomScroll>
                        <List>
                            <ContentFill>{children}</ContentFill>
                        </List>
                    </CustomScroll>
                    <LeftConer />
                </Container>
            </div>
        </Draggable>
    );
};

export default ScrollView;

const Container = styled("div")`
    position: absolute;
    padding-bottom: 13px;
    cursor: move;

    &::before {
        content: "";
        position: absolute;
        height: 17px;
        width: calc(100% - 96px);
        background-color: ${colors.background};
        top: 0;
        left: 0;
    }

    &::after {
        content: "";
        display: block;
        position: absolute;
        width: 97px;
        height: 13px;
        background: url(${mapRightBottom}) no-repeat;
        bottom: 0;
        right: 0;
    }
`;

const Title = styled("div")`
    position: absolute;
    top: -0.5rem;
    left: 0;
    width: 60%;
    line-height: 100%;
    font-size: 16px;
    color: #fff;
    text-align: center;

    &::before {
        content: "";
        display: block;
        position: absolute;
        width: 14px;
        height: 1px;
        background-color: #0090ff;
        top: 7px;
        left: 0;
    }
`;

const List = styled("ul")`
    max-height: 80vh;
`;

const ContentFill = styled("div")`
    background: ${colors.background};
    border-left: #0090ff solid 1px;
    border-right: #0090ff solid 1px;
    padding-bottom: 7.6%;
    margin-top: 17px;
    min-width: 168px;
    padding-left: 10px;
    padding-right: 10px;

    &::before {
        content: "";
        display: block;
        width: 1px;
        height: 18px;
        background-color: #0090ff;
        position: absolute;
        top: -1px;
        left: 0px;
    }

    &::after {
        content: "";
        display: block;
        position: absolute;
        background: url(${mapRightTop}) no-repeat;
        width: 97px;
        height: 18px;
        top: -1px;
        right: -1px;
    }
`;
const LeftConer = styled("span")`
    display: block;
    height: 10px;
    width: calc(100% - 98px);
    border-bottom: #0090ff solid 1px;
    border-left: #0090ff solid 1px;
    background: rgba(0, 144, 255, 0.2);
    position: absolute;
    bottom: 2px;
    left: 0;
`;
