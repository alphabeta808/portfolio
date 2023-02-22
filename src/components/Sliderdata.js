import React from "react";

import * as AiIcons from "react-icons/ai";
import * as SiIcons from "react-icons/si";
import * as TbIcons from "react-icons/tb";
import * as MdIcons from "react-icons/md";
import * as TiIcons from "react-icons/ti";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "About Me",
    path: "/about",
    icon: <SiIcons.SiAboutdotme />,
    cName: "nav-text"
  },
  {
    title: "My Projects",
    path: "/myprojects",
    icon: <AiIcons.AiFillProject />,
    cName: "nav-text"
  },
  {
    title: "Certificate",
    path: "/certificate",
    icon: <TbIcons.TbCertificate />,
    cName: "nav-text"
  },
  {
    title: "Social Media",
    path: "/social",
    icon: <TiIcons.TiSocialAtCircular />,
    cName: "nav-text"
  },
  {
    title: "Contact Me",
    path: "/contact",
    icon: <MdIcons.MdContactPage/>,
    cName: "nav-text"
  }
];
