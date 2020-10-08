import React, { useState, useEffect } from "react";
import { VmsTitleBar, Menu as Nav } from ".";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import routes, { Route } from "../routes";
import NavLink from "../components/nav-link";
import { useLocation } from "@reach/router";

const Layout: React.FC = () => {
    const location = useLocation();
    const [nodeIds, setNodeIds] = useState<string[]>([]);
    const [isNav, showIsNav] = useState(false);
    const result: string[] = [];

    // 控制树组件展开
    const setExpanded = (routes: Route[]) => {
        const paths = location.pathname.split("/");
        paths.forEach((path) => {
            if (path) {
                routes.forEach((route) => {
                    if (route.path === path) {
                        result.indexOf(route.nodeId) === -1 &&
                            result.push(route.nodeId);
                    }
                    if (route.children.length) {
                        setExpanded(route.children);
                    }
                });
            }
        });
        setNodeIds(result);
    };

    const generateMenus = (routes: Route[]) => {
        return routes.map((route) => {
            if (!route.children.length) {
                return (
                    <div key={route.nodeId}>
                        <NavLink
                            fontSize="0.5714285714285714rem"
                            to={route.link}
                        >
                            {route.title}
                        </NavLink>
                    </div>
                );
            } else {
                return (
                    <TreeItem
                        nodeId={route.nodeId}
                        label={route.title}
                        key={route.nodeId}
                    >
                        {generateMenus(route.children)}
                    </TreeItem>
                );
            }
        });
    };

    useEffect(() => {
        setExpanded(routes);
        showIsNav(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (location.pathname === "/dashboard" && !nodeIds.length) {
            showIsNav(true);
            return;
        }
        showIsNav(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    useEffect(() => {
        if (!isNav) {
            setExpanded(routes);
            showIsNav(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isNav]);

    return (
        <>
            <VmsTitleBar />
            {isNav ? (
                <Nav>
                    <TreeView
                        defaultExpanded={nodeIds}
                        defaultCollapseIcon={<ExpandMoreIcon />}
                        defaultExpandIcon={<ChevronRightIcon />}
                    >
                        {generateMenus(routes)}
                    </TreeView>
                </Nav>
            ) : null}
        </>
    );
};

export default Layout;
