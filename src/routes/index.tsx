import React from "react";

// 顶级路由容器
import PartOne from "../pages/PartOne";
import PartTwo from "../pages/PartTwo";
import PartThree from "../pages/PartThree";
import PartFour from "../pages/PartFour";
import PartFive from "../pages/PartFive";
import PartSix from "../pages/PartSix";
import PartSeven from "../pages/PartSeven";

// 二级路由容器
import Vehiclestate from "../pages/PartTwo/vehiclestate";
import Vehicle from "../pages/PartSeven/vehicle";
import Rule from "../pages/PartSeven/rule";
import Personnel from "../pages/PartSeven/personnel";
import System from "../pages/PartSeven/system";

import { RouteComponentProps } from "@reach/router";
interface PageProps extends RouteComponentProps {}

export const Placeholder: React.FC<PageProps> = () => (
    <>
        <div>placeholder</div>
    </>
);

const routes = [
    {
        title: "首页",
        path: "/dashboard",
        component: Placeholder,
        nodeId: "73",
        link: "/dashboard",
        children: [],
    },
    {
        title: "监控中心",
        path: "partOne",
        component: PartOne,
        nodeId: "1",
        link: "/partOne",
        children: [
            {
                title: "业务数据统计",
                path: "statistics",
                nodeId: "2",
                link: "/partOne/statistics",
                component: Placeholder,
                children: [],
            },
            {
                title: "违规驾驶排行",
                path: "toprank",
                nodeId: "3",
                link: "/partOne/toprank",
                component: Placeholder,
                children: [],
            },
            {
                title: "作业质量分析",
                path: "vehicletrack",
                nodeId: "4",
                link: "/partOne/vehicletrack",
                component: Placeholder,
                children: [],
            },
            {
                title: "作业视频跟踪",
                path: "videomonitor",
                nodeId: "6",
                link: "/partOne/videomonitor",
                component: Placeholder,
                children: [],
            },
            {
                title: "作业图片抓拍",
                path: "capture",
                nodeId: "7",
                link: "/partOne/capture",
                component: Placeholder,
                children: [],
            },
            {
                title: "车辆短信下发",
                path: "sendsms",
                nodeId: "8",
                link: "/partOne/sendsms",
                component: Placeholder,
                children: [],
            },
        ],
    },
    {
        title: "指挥调度",
        nodeId: "9",
        path: "partTwo",
        link: "/partTwo",
        component: PartTwo,
        children: [
            {
                title: "车辆监控",
                path: "/vehiclemonitor",
                nodeId: "10",
                link: "/partTwo/vehiclemonitor",
                component: Placeholder,
                children: [],
            },
            {
                title: "指令下方",
                path: "platforminstruct",
                nodeId: "11",
                link: "/partTwo/platforminstruct",
                component: Placeholder,
                children: [],
            },
            {
                title: "工作计划",
                path: "worktimeplangroup",
                nodeId: "5",
                link: "/partTwo/worktimeplangroup",
                component: Placeholder,
                children: [],
            },
            {
                title: "任务班次",
                path: "scheduleinfo",
                nodeId: "12",
                link: "/partTwo/scheduleinfo",
                component: Placeholder,
                children: [],
            },
            {
                title: "任务模板",
                path: "tasktemplateinfo",
                nodeId: "13",
                link: "/partTwo/tasktemplateinfo",
                component: Placeholder,
                children: [],
            },
            {
                title: "任务信息",
                path: "assignmenttaskinfo",
                nodeId: "14",
                link: "/partTwo/assignmenttaskinfo",
                component: Placeholder,
                children: [],
            },
            {
                title: "开关量状态",
                path: "vehiclestate",
                component: Vehiclestate,
                link: "/partTwo/vehiclestate",
                nodeId: "15",
                children: [
                    {
                        title: "状态规则",
                        path: "staterule",
                        nodeId: "73",
                        link: "/partTwo/vehiclestate/staterule",
                        component: Placeholder,
                        children: [],
                    },
                    {
                        title: "状态规则项",
                        path: "stateitemrule",
                        link: "/partTwo/vehiclestate/stateitemrule",
                        nodeId: "74",
                        component: Placeholder,
                        children: [],
                    },
                    {
                        title: "车辆状态绑定",
                        path: "vehiclebindstate",
                        nodeId: "75",
                        link: "/partTwo/vehiclestate/vehiclebindstate",
                        component: Placeholder,
                        children: [],
                    },
                ],
            },
        ],
    },
    {
        title: "违规驾驶",
        path: "partThree",
        component: PartThree,
        link: "/partThree",
        nodeId: "16",
        children: [
            {
                title: "报警信息",
                path: "vehiclealarminfo",
                nodeId: "17",
                component: Placeholder,
                link: "/partThree/vehiclealarminfo",
                children: [],
            },
            {
                title: "超速报警",
                path: "overspeedalarm",
                nodeId: "18",
                link: "/partThree/overspeedalarm",
                component: Placeholder,
                children: [],
            },
            {
                title: "超时停车",
                path: "overtimealarm",
                nodeId: "19",
                link: "/partThree/overtimealarm",
                component: Placeholder,
                children: [],
            },
            {
                title: "漏油报警",
                path: "oilspillalarm",
                nodeId: "20",
                link: "/partThree/oilspillalarm",
                component: Placeholder,
                children: [],
            },
            {
                title: "出区域报警",
                path: "crossregionalalarm",
                nodeId: "21",
                link: "/partThree/crossregionalalarm",
                component: Placeholder,
                children: [],
            },
            {
                title: "主动安全报警",
                path: "activesafety",
                link: "/partThree/activesafety",
                nodeId: "22",
                component: Placeholder,
                children: [],
            },
        ],
    },
    {
        title: "里程油耗",
        path: "partFour",
        link: "/partFour",
        component: PartFour,
        nodeId: "23",
        children: [
            {
                title: "里程油耗统计",
                path: "vehiclestatisticsbusiness",
                nodeId: "24",
                link: "/partFour/vehiclestatisticsbusiness",
                component: Placeholder,
                children: [],
            },
            {
                title: "里程油耗曲线",
                path: "ehiclefuelmileage",
                nodeId: "25",
                link: "/partFour/ehiclefuelmileage",
                component: Placeholder,
                children: [],
            },
            {
                title: "里程油耗报表",
                path: "fuelmileage",
                nodeId: "26",
                link: "/partFour/fuelmileage",
                component: Placeholder,
                children: [],
            },
        ],
    },
    {
        title: "车辆养护",
        path: "partFive",
        component: PartFive,
        nodeId: "27",
        link: "/partFive",
        children: [
            {
                title: "车辆保养",
                path: "vehiclemaintain",
                nodeId: "28",
                link: "/partFive/vehiclemaintain",
                component: Placeholder,
                children: [],
            },
            {
                title: "车辆维修",
                path: "vehiclerepairrecord",
                nodeId: "29",
                link: "/partFive/vehiclerepairrecord",
                component: Placeholder,
                children: [],
            },
            {
                title: "车辆保险",
                path: "vehicleinsurance",
                nodeId: "30",
                link: "/partFive/vehicleinsurance",
                component: Placeholder,
                children: [],
            },
            {
                title: "维修审核",
                path: "auditorder",
                nodeId: "31",
                link: "/partFive/auditorder",
                component: Placeholder,
                children: [],
            },
            {
                title: "设备类型",
                path: "devicemodel",
                nodeId: "32",
                link: "/partFive/devicemodel",
                component: Placeholder,
                children: [],
            },
            {
                title: "常见故障",
                path: "commonfault",
                nodeId: "33",
                link: "/partFive/commonfault",
                component: Placeholder,
                children: [],
            },
            {
                title: "维修建议",
                path: "repairsuggest",
                nodeId: "34",
                link: "/partFive/repairsuggest",
                component: Placeholder,
                children: [],
            },
            {
                title: "维修记录",
                path: "repairrecord",
                nodeId: "35",
                link: "/partFive/repairrecord",
                component: Placeholder,
                children: [],
            },
            {
                title: "维修状态",
                path: "repairstate",
                nodeId: "36",
                link: "/partFive/repairstate",
                component: Placeholder,
                children: [],
            },
            {
                title: "维修评价",
                path: "repairevaluate",
                nodeId: "37",
                link: "/partFive/repairevaluate",
                component: Placeholder,
                children: [],
            },
            {
                title: "维修订单",
                path: "repairorder",
                nodeId: "38",
                link: "/partFive/repairorder",
                component: Placeholder,
                children: [],
            },
        ],
    },
    {
        title: "环卫设施",
        path: "partSix",
        link: "/partSix",
        component: PartSix,
        nodeId: "39",
        children: [
            {
                title: "公厕",
                path: "tolietinfo",
                nodeId: "40",
                link: "/partSix/tolietinfo",
                component: Placeholder,
                children: [],
            },
            {
                title: "清洁站",
                path: "clearningstationinfo",
                nodeId: "41",
                link: "/partSix/clearningstationinfo",
                component: Placeholder,
                children: [],
            },
            {
                title: "窨井",
                path: "maniinfo",
                nodeId: "42",
                link: "/partSix/maniinfo",
                component: Placeholder,
                children: [],
            },
            {
                title: "垃圾桶",
                path: "trashinfo",
                nodeId: "43",
                link: "/partSix/trashinfo",
                component: Placeholder,
                children: [],
            },
            {
                title: "垃圾处理厂",
                path: "wasteplantinfo",
                nodeId: "44",
                link: "/partSix/wasteplantinfo",
                component: Placeholder,
                children: [],
            },
            {
                title: "工作路段",
                path: "workroadinfo",
                nodeId: "45",
                link: "/partSix/workroadinfo",
                component: Placeholder,
                children: [],
            },
            {
                title: "工作区域",
                path: "workareainfo",
                nodeId: "46",
                link: "/partSix/workareainfo",
                component: Placeholder,
                children: [],
            },
        ],
    },
    {
        title: "基础数据",
        path: "partSeven",
        nodeId: "47",
        link: "/partSeven",
        component: PartSeven,
        children: [
            {
                title: "通讯设备",
                path: "siminfo",
                nodeId: "48",
                link: "/partSeven/siminfo",
                component: Placeholder,
                children: [],
            },
            {
                title: "车辆信息",
                path: "vehicle",
                nodeId: "49",
                link: "/partSeven/vehicle",
                component: Vehicle,
                children: [
                    {
                        title: "车辆基础",
                        path: "vehicleinfo",
                        nodeId: "50",
                        link: "/partSeven/vehicle/vehicleinfo",
                        component: Placeholder,
                        children: [],
                    },
                    {
                        title: "车辆台账",
                        path: "vehicleledger",
                        nodeId: "51",
                        link: "/partSeven/vehicle/vehicleledger",
                        component: Placeholder,
                        children: [],
                    },
                    {
                        title: "调记录",
                        path: "vehiclelendrecord",
                        nodeId: "52",
                        link: "/partSeven/vehicle/vehiclelendrecord",
                        component: Placeholder,
                        children: [],
                    },
                    {
                        title: "车辆类型",
                        path: "vehicletype",
                        nodeId: "53",
                        link: "/partSeven/vehicle/vehicletype",
                        component: Placeholder,
                        children: [],
                    },
                    {
                        title: "油耗参数",
                        path: "fuelinfo",
                        nodeId: "54",
                        link: "/partSeven/vehicle/fuelinfo",
                        component: Placeholder,
                        children: [],
                    },
                    {
                        title: "车辆品牌",
                        path: "vehiclebrand",
                        nodeId: "55",
                        link: "/partSeven/vehicle/vehiclebrand",
                        component: Placeholder,
                        children: [],
                    },
                ],
            },
            {
                title: "报警规则",
                path: "rule",
                nodeId: "56",
                link: "/partSeven/rule",
                component: Rule,
                children: [
                    {
                        title: "报警规则管理",
                        path: "dangerrule",
                        nodeId: "57",
                        link: "/partSeven/rule/dangerrule",
                        component: Placeholder,
                        children: [],
                    },
                    {
                        title: "报警类型管理",
                        path: "dangercondition/",
                        nodeId: "58",
                        link: "/partSeven/rule/dangercondition",
                        component: Placeholder,
                        children: [],
                    },
                    {
                        title: "报警规则绑定管理",
                        path: "dangerbindthing",
                        nodeId: "59",
                        link: "/partSeven/rule/dangerbindthing",
                        component: Placeholder,
                        children: [],
                    },
                ],
            },
            {
                title: "人员信息",
                path: "personnel",
                nodeId: "60",
                link: "/partSeven/personnel",
                component: Personnel,
                children: [
                    {
                        title: "人员台账信息管理",
                        path: "personnelledger",
                        nodeId: "61",
                        link: "/partSeven/personnel/personnelledger",
                        component: Placeholder,
                        children: [],
                    },
                    {
                        title: "人员基础信息管理",
                        path: "personnelinfo",
                        nodeId: "62",
                        link: "/partSeven/personnel/personnelinfo",
                        component: Placeholder,
                        children: [],
                    },
                    {
                        title: "人员类型管理",
                        path: "personneltype",
                        nodeId: "63",
                        link: "/partSeven/personnel/personneltype",
                        component: Placeholder,
                        children: [],
                    },
                    {
                        title: "岗位职级管理",
                        path: "positioninfo",
                        nodeId: "64",
                        link: "/partSeven/personnel/positioninfo",
                        component: Placeholder,
                        children: [],
                    },
                    {
                        title: "劳务派遣公司管理",
                        path: "servicecompany",
                        nodeId: "65",
                        link: "/partSeven/personnel/servicecompany",
                        component: Placeholder,
                        children: [],
                    },
                    {
                        title: "部门信息管理",
                        path: "departmentinfo",
                        nodeId: "66",
                        link: "/partSeven/personnel/departmentinfo",
                        component: Placeholder,
                        children: [],
                    },
                ],
            },
            {
                title: "业务设置",
                path: "system",
                nodeId: "67",
                link: "/partSeven/system",
                component: System,
                children: [
                    {
                        title: "地理区域",
                        path: "mapregion",
                        nodeId: "68",
                        link: "/partSeven/system/mapregion",
                        component: Placeholder,
                        children: [],
                    },
                    {
                        title: "平台地图",
                        path: "icongroup",
                        nodeId: "69",
                        link: "/partSeven/system/icongroup",
                        component: Placeholder,
                        children: [],
                    },
                    {
                        title: "短信模板",
                        path: "messagetemplategroup",
                        nodeId: "70",
                        link: "/partSeven/system/messagetemplategroup",
                        component: Placeholder,
                        children: [],
                    },
                    {
                        title: "短信记录",
                        path: "messagerecord",
                        nodeId: "71",
                        link: "/partSeven/system/messagerecord",
                        component: Placeholder,
                        children: [],
                    },
                    {
                        title: "今日油价",
                        path: "gasolineinfo",
                        nodeId: "72",
                        link: "/partSeven/system/gasolineinfo",
                        component: Placeholder,
                        children: [],
                    },
                ],
            },
        ],
    },
];

export default routes;

export interface Route {
    title: string;
    path: string;
    children: Route[];
    component: any;
    nodeId: string;
    link: string;
}
