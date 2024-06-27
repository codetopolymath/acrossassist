// import {
//   IconUsers,
//   IconList,
//   IconLayoutDashboard,
//   IconUser,
//   IconPhoto,
//   IconSchool,
//   IconClipboard,
//   IconBug,
//   IconBrandLinkedin,
// } from "@tabler/icons";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Divider,
  ListSubheader,
  IconButton,
  Typography,
  Tooltip,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  History as HistoryIcon,
  ChevronLeft as ChevronLeftIcon,
  Menu as MenuIcon,
  Person as PersonIcon,
  Dashboard,
} from "@mui/icons-material";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    navlabel: true,
    subheader: "Home",
  },
  {
    id: uniqueId(),
    title: "Dashboard",
    icon: DashboardIcon,
    href: "/dashboard",
  },
  {
    id: uniqueId(),
    title: "Policy History",
    icon: HistoryIcon,
    href: "/dashboard/policy-history",
  },
  {
    id: uniqueId(),
    title: "Profile",
    icon: PersonIcon,
    href: "/dashboard/profile",
  },
];

export default Menuitems;
