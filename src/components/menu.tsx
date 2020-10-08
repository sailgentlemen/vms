import React from "react";
import { RouteComponentProps } from "@reach/router";
import { gql } from "@apollo/client";
import styled from "react-emotion";
import { ScrollViewMenu } from "../components";

export const LAUNCH_TILE_DATA = gql`
    fragment LaunchTile on Launch {
        __typename
        id
        isBooked
        rocket {
            id
            name
        }
        mission {
            name
            missionPatch
        }
    }
`;

interface LocationProps extends RouteComponentProps {}

const Location: React.FC<LocationProps> = ({ children }) => {
    return (
        <>
            <Container>
                <ScrollViewMenu title="导航栏">{children}</ScrollViewMenu>
            </Container>
        </>
    );
};

export default Location;

const Container = styled("div")`
    position: absolute;
    top: 76px;
    left: 10px;
    z-index: 9999;
`;
