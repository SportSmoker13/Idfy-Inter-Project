import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
{
	title: "Home",
	path: "/about-us",
	icon: <AiIcons.AiOutlineHome />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	
},
{
	title: "Usage Insights",
	path: "/services",
	icon: <RiIcons.RiStackLine />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	
},
{
	title: "Credits and Pricing",
	path: "/contact",
	icon: <AiIcons.AiOutlineStar/>,
},
{
	title: "API Documentation",
	path: "/events",
	icon: <FaIcons.FaBook />,

	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

},
{
	title: "API Credentials",
	path: "/support",
	icon: <RiIcons.RiShieldLine />,
},
{
	title: "Support",
	path: "/support",
	icon: <IoIcons.IoMdCall />,
},
];
