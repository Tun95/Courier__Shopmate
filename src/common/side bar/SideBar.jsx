import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import PlaceIcon from "@mui/icons-material/Place";
import HomeIcon from "@mui/icons-material/Home";
import ChromeReaderModeIcon from "@mui/icons-material/ChromeReaderMode";
import CallIcon from "@mui/icons-material/Call";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import BuildIcon from "@mui/icons-material/Build";
import Logo from "../../asset/Logo/Website Logo/Logo.png";

function SideBar() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const webItemList = [
    {
      text: "",
      icon: <img src={Logo} alt="" />,
      to: "/",
    },
    {
      text: "Home",
      icon: <HomeIcon style={{ fill: "black" }} />,
      to: "/",
    },
    {
      text: "About",
      icon: <HelpCenterIcon style={{ fill: "black" }} />,
      to: "/about",
    },
    {
      text: "Services",
      icon: <BuildIcon style={{ fill: "black" }} />,
      to: "/services",
    },
    {
      text: "Track Goods",
      icon: <PlaceIcon style={{ fill: "black" }} />,
      to: "/track-goods",
    },
    {
      text: "Contact",
      icon: <CallIcon style={{ fill: "black" }} />,
      to: "/contact",
    },
    {
      text: "Blog",
      icon: <ChromeReaderModeIcon style={{ fill: "black" }} />,
      to: "/blog-post",
    },
  ];

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {webItemList.map((item, index) => {
          const { text, icon } = item;
          return (
            <ListItem disablePadding component={Link} to={item.to} key={text}>
              <ListItemButton>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} className="listItemText" />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            className="menu_btn_icon"
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon className="menu_icon" />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default SideBar;
