import React from "react";
import { RouteComponentProps } from "@reach/router";
import { gql } from "@apollo/client";
import { Layout } from "../components/";

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

const Home: React.FC<PageProps> = ({ children }) => {
    return (
        <>
            <Layout />
            {children}
        </>
    );
};

export default Home;
