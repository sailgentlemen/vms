import React from "react";
import { Link, RouteComponentProps } from "@reach/router";
import { colors } from "../styles.js";

interface NavLinkProp extends RouteComponentProps {
    partial?: boolean;
    to: string;
    fontSize?: string;
    color?: string;
}

const NavLink: React.FC<NavLinkProp> = ({
    fontSize,
    color,
    partial = true,
    to,
    ...props
}) => (
    <Link
        to={to}
        {...props}
        getProps={({ isCurrent, isPartiallyCurrent }) => {
            const isActive = partial ? isPartiallyCurrent : isCurrent;
            return {
                style: {
                    color: isActive ? color || colors.primary : "#b8e0ff",
                    fontSize: fontSize,
                },
            };
        }}
    />
);

export default NavLink;
