import {SidebarConfig4Multiple} from "vuepress/config";

import guideSideBar from "./sidebars/guideSideBar";
// @ts-ignore
export default {
    "/": guideSideBar,
    "/攻略/": guideSideBar,
} as SidebarConfig4Multiple;
