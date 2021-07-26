import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
  Button,
  Drawer,
  Box,
} from "@material-ui/core";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

// IMPORTING ICONS
import MenuIcon from "@material-ui/icons/Menu";
import LocalMall from "@material-ui/icons/LocalMall";
import AccountBalanceWallet from "@material-ui/icons/AccountBalanceWallet";
import EventNote from "@material-ui/icons/EventNote";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import { useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { useStyles } from "./styles";
import { logout } from "../../../utils/auth";

function NavBar() {
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
    <div>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h3"
            component="p"
            color="secondary"
            className={classes.title}
          >
            پنل مدیریت فروشگاه
          </Typography>
          {isMobile ? (
            <>
              <Drawer
                anchor={"right"}
                open={state["right"]}
                onClose={toggleDrawer("right", false)}
              >
                {list("right")}
              </Drawer>
              <Box>
                <IconButton
                  className={classes.menuButton}
                  edge="start"
                  aria-label="menu"
                  onClick={toggleDrawer("right", true)}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
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
          <Typography
            variant="h5"
            color="secondary"
            className={classes.returnBtn}
            onClick={logout}
          >
            خروج
          </Typography>
          <Typography
            variant="h5"
            color="secondary"
            component={Link}
            to="/"
            className={classes.returnBtn}
          >
            بازگشت به سایت
            <ArrowBackIcon fontSize="small" />
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default NavBar;
