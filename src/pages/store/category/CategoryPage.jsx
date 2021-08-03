import React, { useEffect, useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./styles";
import { useParams, useHistory } from "react-router-dom";
import { searching, sortAndPagination } from "../../../api/products";
import { useSelector, useDispatch } from "react-redux";
import WithLoading from "../../../components/WithLoading";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import ReactPaginate from "react-paginate";
import "../../../styles/sass/pagination.scss";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";

import {
  Box,
  useMediaQuery,
  IconButton,
  Divider,
  AppBar,
  Toolbar,
  TextField,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { getList, getCategoryList } from "../../../api/products";
import { setLoading } from "../../../store/actions/LoadingActions";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { useTheme } from "@material-ui/core/styles";
import ListIcon from "@material-ui/icons/List";
import { Search } from "@material-ui/icons";
function CategoryPage() {
  const classes = useStyles();
  const { categoryName } = useParams();
  const dispatch = useDispatch();
  const [listItems, setListItmes] = useState([]);
  const [womenCategory, setWomenCategory] = useState([]);
  const [menCategory, setMenCategory] = useState([]);
  const [kidsCategory, setKidsCategory] = useState([]);
  const [sportCategory, setSportCategory] = useState([]);
  const [beautyCategory, setBeautyCategory] = useState([]);
  const [search, setSearch] = useState(null);
  const [sortName, setSortName] = useState("جدیدترین");
  const [order, setOrder] = useState("desc");
  const [sortType, setSortType] = useState("id");
  const [pageNumber, setPageNumber] = useState(1);
  const [pageCount, setpageCount] = useState(1);
  const [state, setState] = useState({
    right: false,
  });

  const theme = useTheme();
  useEffect(() => {
    dispatch(setLoading(true));
    getCategoryList(categoryName).then((res) => {
      setListItmes(res.data);
      dispatch(setLoading(false));
      setpageCount(Math.ceil(listItems.length / 3));
    });
  }, [categoryName]);

  /**pagination */
  console.log(listItems.length);
  const changePage = (e) => {
    setPageNumber(e.selected + 1);
  };

  console.log(`pageCount : ${pageCount}`);
  console.log(`pageNumber ${pageNumber}`);

  /////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    getCategoryList("زنانه").then((res) => setWomenCategory(res.data));
    getCategoryList("مردانه").then((res) => setMenCategory(res.data));
    getCategoryList("بچگانه").then((res) => setKidsCategory(res.data));
    getCategoryList("ورزشی").then((res) => setSportCategory(res.data));
    getCategoryList("سلامت و زیبایی").then((res) =>
      setBeautyCategory(res.data)
    );
  }, []);

  /**sorting */
  function handleSorting(value) {
    console.log(value);

    setSortName(value);
    if (value === "جدیدترین") {
      setSortType("id");
      setOrder("desc");
    }
    if (value === "گران ترین") {
      setSortType("price");
      setOrder("desc");
    }
    if (value === "ارزان ترین") {
      setSortType("price");
      setOrder("asc");
    }
  }

  useEffect(() => {
    if (search) {
      searching(categoryName, sortType, order, pageNumber, search).then((res) =>
        setListItmes(res.data)
      );
    } else {
      sortAndPagination(categoryName, sortType, order, pageNumber).then((res) =>
        setListItmes(res.data)
      );
    }
  }, [categoryName, sortType, order, pageNumber, search]);

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
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Typography
        gutterBottom
        align="left"
        className={classes.groupTitle}
        variant="h3"
      >
        کالا های اساسی فروشگاه
      </Typography>
      <Divider />
      <List>
        <ListItem component={Link} to="/category/زنانه">
          <Typography component="h4">زنانه</Typography>
        </ListItem>

        <ListItem component={Link} to="/category/مردانه">
          <Typography component="h4">مردانه</Typography>
        </ListItem>

        <ListItem component={Link} to="/category/بچگانه">
          <Typography component="h4">بچگانه</Typography>
        </ListItem>
        <ListItem component={Link} to="/category/ورزشی">
          <Typography component="h4">ورزشی</Typography>
        </ListItem>

        <ListItem component={Link} to="/category/سلامت و زیبایی">
          <Typography component="h4">سلامت و زیبایی</Typography>
        </ListItem>
      </List>
    </div>
  );

  return (
    <WithLoading>
      <div className={classes.root}>
        <Grid container justifyContent="space-between" alignItems="center">
          <AppBar className={classes.appBar}>
            <Toolbar>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item xl={2}>
                  <IconButton
                    edge="start"
                    aria-label="menu"
                    onClick={toggleDrawer("left", true)}
                  >
                    <Typography>دسته بندی</Typography>
                    <ListIcon />
                  </IconButton>
                </Grid>
                <Grid item xl={3}>
                  <TextField
                    variant="standard"
                    placeholder="جستجو... "
                    color="primary"
                    name="جستجو"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon className={classes.searchIcon} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid
                  item
                  xl={2}
                  container
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <InputLabel>
                    <Typography component="span"> ترتیب :</Typography>
                  </InputLabel>

                  <FormControl variant="standard">
                    <Select
                      value={sortName}
                      onChange={(e) => handleSorting(e.target.value)}
                      className={classes.select}
                    >
                      <MenuItem value={"جدیدترین"}>جدیدترین</MenuItem>
                      <MenuItem value={"گران ترین"}>گران ترین</MenuItem>
                      <MenuItem value={"ارزان ترین"}>ارزان ترین</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>

          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            style={{ zIndex: 9999 }}
          >
            {list("left")}
          </Drawer>

          <Grid item xl={12} container justifyContent="center">
            <main className={classes.content}>
              <Container maxWidth="lg" className={classes.container}>
                <Box component="div" marginBottom={8}>
                  <Typography
                    variant="h3"
                    align="left"
                    color="textPrimary"
                    gutterBottom
                    className={classes.groupTitle}
                  >
                    {categoryName}
                  </Typography>
                </Box>
                <Grid container justifyContent="center" spacing={10}>
                  {listItems.map((item, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={4} xl={4}>
                      <Card className={classes.card}>
                        <Link
                          to={`/product/${item.id}`}
                          className={classes.linkStyle}
                        >
                          <CardMedia
                            className={classes.cardMedia}
                            image={item.image}
                            title={item.name}
                          />
                          <CardContent className={classes.cardContent}>
                            <Typography
                              gutterBottom
                              component={"h2"}
                              className={classes.productName}
                            >
                              {item.name}
                            </Typography>

                            <Typography gutterBottom style={{ fontSize: 13 }}>
                              قیمت:{(+item.price).toLocaleString("fa-IR")} تومان
                            </Typography>
                          </CardContent>
                        </Link>
                      </Card>
                    </Grid>
                  ))}
                  <Grid>
                    <ReactPaginate
                      previousLabel={"قبلی"}
                      nextLabel={"بعدی"}
                      pageCount={pageCount}
                      onPageChange={changePage}
                      containerClassName={"paginationBttns"}
                      previousLinkClassName={"previousBttn"}
                      nextLinkClassName={"nextBttn"}
                      activeClassName={"paginationActive"}
                    />
                  </Grid>
                </Grid>
              </Container>
            </main>
          </Grid>
        </Grid>
      </div>
    </WithLoading>
  );
}

export default CategoryPage;
