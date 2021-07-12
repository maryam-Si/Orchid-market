import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
  Button,
  useScrollTrigger,
  Slide,
  Menu,
  MenuItem,
  ListItemIcon,
  Drawer,
} from "@material-ui/core";

import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
// IMPORTING ICONS
import MenuIcon from "@material-ui/icons/Menu";
import LocalMall from "@material-ui/icons/LocalMall";
import AccountBalanceWallet from "@material-ui/icons/AccountBalanceWallet";
import EventNote from "@material-ui/icons/EventNote";

// REACT APP IMPORTS
import PanelQuantity from "../../panel-quantity/PanelQuantity";
import PanelOrders from "../../panel-orders/PanelOrders";
import PanelProducts from "../../panel-products/PanelProducts";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom";
import { useStyles } from "./styles";

function NavBar() {
  const history = useHistory();
  const classes = useStyles();
  const [state, setState] = useState({
    right: false,
  });
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem component={Link} to="/admin/panel-products">
          <ListItemText primary="کالاها" />
        </ListItem>

        <ListItem component={Link} to="/admin/panel-quantity">
          <ListItemText primary="موجودی و قیمت ها" />
        </ListItem>

        <ListItem component={Link} to="/admin/panel-orders">
          <ListItemText primary="سفارش ها" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h5"
            component="p"
            color="secondary"
            className={classes.title}
          >
            پنل مدیریت فروشگاه
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                className={classes.menuButton}
                edge="start"
                aria-label="menu"
                onClick={toggleDrawer("right", true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor={"right"}
                open={state["right"]}
                onClose={toggleDrawer("right", false)}
              >
                {list("right")}
              </Drawer>
            </>
          ) : (
            <div className={classes.links}>
              <Button
                className={classes.button}
                variant="text"
                component={Link}
                to="/admin/panel-products"
                color="default"
              >
                <LocalMall />
                کالا ها
              </Button>
              <Button
                className={classes.button}
                variant="text"
                component={Link}
                to="/admin/panel-quantity"
                color="default"
              >
                <AccountBalanceWallet />
                موجودی و قیمت
              </Button>
              <Button
                className={classes.button}
                variant="text"
                component={Link}
                to="/admin/panel-orders"
                color="default"
              >
                <EventNote />
                سفارش ها
              </Button>
            </div>
          )}
          <Button
            type="button"
            variant="text"
            color="secondary"
            component={Link}
            to="/"
            className={classes.returnBtn}
          >
            بازگشت به سایت
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default NavBar;
