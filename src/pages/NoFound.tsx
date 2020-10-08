import React from "react";
import { RouteComponentProps } from "@reach/router";
import { gql } from "@apollo/client";
import { NavLink } from "../components";

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

const NoFound: React.FC<PageProps> = () => {
    return (
        <>
            <div
                style={{
                    width: "100vw",
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                }}
            >
                <span
                    role="img"
                    aria-label="emoji rocket"
                    style={{ fontSize: "60px" }}
                >
                    🚀
                </span>
                <span style={{ margin: "10px 0", fontSize: "18px" }}>
                    糟糕，您要的内容已飞往外太空啦 ~~
                </span>
                <NavLink color="inhert" fontSize="16px" to="/">
                    返回
                </NavLink>
            </div>
        </>
    );
};

export default NoFound;
