import React, { useEffect } from "react";
import { RouteComponentProps, Link } from "@reach/router";
import {
    GridList,
    GridListTile,
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
    Box,
    LinearProgress,
} from "@material-ui/core";
import { LinearProgressProps } from "@material-ui/core/LinearProgress";
import { makeStyles } from "@material-ui/core/styles";
import styled from "react-emotion";
import { colors } from "../styles";

const useStyles = makeStyles((theme) => ({
    rootList: {
        width: "calc(100vw - 210px)",
        display: "flex",
        flexWrap: "nowrap",
        justifyContent: "space-around",
    },
    rootCard: {
        background: colors.background,
    },
    rootTile: {
        height: "auto !important",
    },
    rootTypography: {
        borderBottom: `1px solid ${colors.textSecondary}`,
        paddingBottom: "18px",
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },

    link: {
        color: colors.primary,
    },

    h5: {
        fontSize: "16px",
    },

    body: {
        paddingTop: "8px",
    },

    emphasis: {
        fontSize: "16px",
    },

    progressWidth: {
        width: "100%",
    },

    arrow: {
        border: `solid ${colors.text} 5px`,
        borderColor: `${colors.text} transparent transparent transparent`,
        marginLeft: "5px",
        marginTop: "5px",
    },
}));

function SimpleCard() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.rootCard}>
            <CardContent>
                <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                >
                    Word of the Day
                </Typography>
                <Typography variant="h5" component="h2">
                    be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    adjective
                </Typography>
                <Typography variant="body2" component="p">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

function LinearProgressWithLabel(
    props: LinearProgressProps & { value: number }
) {
    return (
        <Box display="flex" alignItems="center">
            <Box width="100%" mr={1}>
                <LinearProgress
                    classes={{
                        barColorPrimary: "red",
                    }}
                    variant="determinate"
                    {...props}
                />
            </Box>
            <Box minWidth={68}>
                <Typography
                    variant="body2"
                    color="textSecondary"
                >{`${Math.round(props.value)}%已上线`}</Typography>
            </Box>
        </Box>
    );
}

function OnlineCard() {
    const classes = useStyles();
    const [progress, setProgress] = React.useState(10);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) =>
                prevProgress >= 100 ? 10 : prevProgress + 10
            );
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <Card className={classes.rootCard}>
            <CardContent>
                <Box
                    className={[classes.title, classes.rootTypography].join(
                        " "
                    )}
                    justifyContent="space-between"
                    display="flex"
                >
                    <Typography variant="body1" gutterBottom>
                        车辆在线
                    </Typography>
                    <Link className={classes.link} to="/">
                        查看详情
                    </Link>
                </Box>
                <Box
                    className={[classes.body, classes.h5].join(" ")}
                    justifyContent="space-around"
                    display="flex"
                >
                    <Typography variant="body1" gutterBottom>
                        当前车辆在线数量
                    </Typography>
                    <Box display="flex" alignItems="center">
                        <Typography
                            className={classes.emphasis}
                            variant="body1"
                            gutterBottom
                        >
                            129
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            辆车
                        </Typography>
                    </Box>
                </Box>
                <Box
                    className={[
                        classes.pos,
                        classes.rootTypography,
                        classes.progressWidth,
                    ].join(" ")}
                >
                    <LinearProgressWithLabel value={progress} />
                </Box>
                <Box justifyContent="space-between" display="flex">
                    <Typography variant="body1" gutterBottom>
                        车辆总数
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        532 辆
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}

function DriveCard() {
    const classes = useStyles();

    return (
        <Card className={classes.rootCard}>
            <CardContent>
                <Box
                    className={[classes.title, classes.rootTypography].join(
                        " "
                    )}
                    justifyContent="space-between"
                    display="flex"
                >
                    <Typography variant="body1" gutterBottom>
                        违规驾驶
                    </Typography>
                    <Link className={classes.link} to="/">
                        查看详情
                    </Link>
                </Box>
                <Box
                    className={[
                        classes.body,
                        classes.h5,
                        classes.pos,
                        classes.rootTypography,
                        classes.progressWidth,
                    ].join(" ")}
                >
                    <Box display="flex" justifyContent="space-around">
                        <Typography variant="body1" gutterBottom>
                            违规驾驶数量
                        </Typography>
                        <Box display="flex" alignItems="center">
                            <Typography
                                className={classes.emphasis}
                                variant="body1"
                                gutterBottom
                            >
                                32
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                件
                            </Typography>
                        </Box>
                    </Box>
                    <Box display="flex" justifyContent="space-around">
                        <Typography variant="body2" component="div">
                            <Box display="flex" alignItems="center">
                                <span>日同比 -93%</span>
                                <span className={classes.arrow}></span>
                            </Box>
                        </Typography>
                        <Typography variant="body2" component="div">
                            <Box display="flex" alignItems="center">
                                <span>周同比 -72%</span>
                                <span className={classes.arrow}></span>
                            </Box>
                        </Typography>
                    </Box>
                </Box>
                <Box justifyContent="space-between" display="flex">
                    <Typography variant="body1" gutterBottom>
                        今日违规驾驶总数
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        32 件
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}

function CostCard() {
    const classes = useStyles();

    return (
        <Card className={classes.rootCard}>
            <CardContent className="card-echart">
                <Box
                    className={[classes.title, classes.rootTypography].join(
                        " "
                    )}
                    justifyContent="space-between"
                    display="flex"
                >
                    <Typography variant="body1" gutterBottom>
                        今日油耗费用（元）
                    </Typography>
                    <Link className={classes.link} to="/">
                        查看详情
                    </Link>
                </Box>
                <Box
                    className={[
                        classes.body,
                        classes.h5,
                        classes.pos,
                        classes.rootTypography,
                        classes.progressWidth,
                    ].join(" ")}
                    style={{
                        marginBottom: 0,
                        borderBottom: "none",
                    }}
                >
                    <Box display="flex" justifyContent="space-around">
                        <Typography variant="body1" gutterBottom>
                            今日油耗费用
                        </Typography>
                        <Box display="flex" alignItems="center">
                            <Typography
                                className={classes.emphasis}
                                variant="body1"
                                gutterBottom
                            >
                                2438.45
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                元
                            </Typography>
                        </Box>
                    </Box>
                    <Box display="flex" justifyContent="space-around">
                        <Typography variant="body2">今日油量消耗</Typography>
                        <Box display="flex" alignItems="center">
                            <Typography variant="body2">406.43</Typography>
                            <Typography variant="body2">升</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box
                    style={{ height: "61.66666px" }}
                    justifyContent="space-between"
                    display="flex"
                >
                    echarts
                </Box>
            </CardContent>
        </Card>
    );
}

const tileData = [
    {
        title: "当前车辆在线数",
        Card: <OnlineCard />,
        cols: 1,
    },
    {
        title: "违规驾驶车辆",
        Card: <DriveCard />,
        cols: 1,
    },
    {
        title: "今日油耗费用",
        Card: <CostCard />,
        cols: 1,
    },
    {
        title: "公里",
        Card: <SimpleCard />,
        cols: 1,
    },
];

interface PageProps extends RouteComponentProps {}

const Dashboard: React.FC<PageProps> = () => {
    const classes = useStyles();

    return (
        <>
            <Container>
                <GridList
                    classes={{
                        root: classes.rootList,
                    }}
                    cols={4}
                    spacing={10}
                >
                    {tileData.map((tile) => (
                        <GridListTile
                            className={classes.rootTile}
                            key={tile.title}
                            cols={tile.cols || 1}
                        >
                            {tile.Card}
                        </GridListTile>
                    ))}
                </GridList>
            </Container>
        </>
    );
};

export default Dashboard;

const Container = styled("div")`
    position: absolute;
    right: 10px;
    top: 76px;
`;
