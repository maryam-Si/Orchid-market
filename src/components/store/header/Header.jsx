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
  Grid,
} from "@material-ui/core";
import { isLoggedIn } from "../../../utils/auth";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Logo from "../../../assets/images/logo.png";
// IMPORTING ICONS
import MenuIcon from "@material-ui/icons/Menu";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useTheme } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom";
import { useStyles } from "./styles";

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
          <ListItemText primary="مدیریت" />
        </ListItem>

        <ListItem component={Link} to="/admin/panel-quantity">
          <ListItemText primary="سبد خرید" />
          <ShoppingCartIcon fontSize="small" />
        </ListItem>
      </List>
    </div>
  );

  const history = useHistory();
  function handleAdminPage() {
    if (isLoggedIn) {
      history.push("/admin/panel-products");
    } else {
      history.push("/admin/login");
    }
  }
  return (
    <div>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item lg={2}>
              <img src={Logo} alt="logo" className={classes.logo} />
            </Grid>
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
              <Grid
                item
                container
                justifyContent="flex-end"
                lg={2}
                className={classes.links}
              >
                <Grid item container alignItems="center" lg={4}>
                  <Typography
                    onClick={handleAdminPage}
                    color="secondary"
                    className={classes.navbar}
                  >
                    <PersonOutlineIcon />
                    <Typography>مدیریت</Typography>
                  </Typography>
                </Grid>
                <Grid
                  item
                  container
                  alignItems="center"
                  direction="column"
                  lg={4}
                >
                  <Typography
                    component={Link}
                    color="secondary"
                    to="/cart"
                    className={classes.navbar}
                  >
                    <ShoppingCartIcon fontSize="small" />
                    <Typography>سبد خرید</Typography>
                  </Typography>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default NavBar;
