import React from "react";
import { RouteComponentProps } from "@reach/router";
import { gql } from "@apollo/client";

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

interface PageProps extends RouteComponentProps {}

const Template: React.FC<PageProps> = () => {
    return <>我是模板</>;
};

export default Template;
