import React, { useEffect } from "react";
import Drawer from "@material-ui/core/Drawer";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./styles";
import { useParams, useHistory } from "react-router-dom";
import { getAllProducts } from "../../../store/actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import WithLoading from "../../../components/WithLoading";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";

function CategoryPage() {
  const classes = useStyles();
  const { categoryName } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const data = products.filter((row) => row.category === categoryName);
  const womenCategory = products?.filter(
    (product) => product.category === "زنانه"
  );
  const menCategory = products?.filter(
    (product) => product.category === "مردانه"
  );
  const kidsCategory = products?.filter(
    (product) => product.category === "بچگانه"
  );
  const sportCategory = products?.filter(
    (product) => product.category === "ورزشی"
  );
  const beautyCategory = products?.filter(
    (product) => product.category === "سلامت و زیبایی"
  );

  return (
    <WithLoading>
      <div className={classes.root}>
        <Grid container justifyContent="space-between">
          <Grid item style={{ flexBasis: "20%" }}>
            <Drawer variant="permanent" className={classes.drawerPaper}>
              <Grid container direction="column" className={classes.group}>
                <Typography
                  gutterBottom
                  align="left"
                  className={classes.groupTitle}
                >
                  کالا های اساسی فروشگاه
                </Typography>
                <Typography gutterBottom align="left">
                  زنانه
                </Typography>
                {womenCategory.slice(0, 3).map((item, index) => (
                  <Typography
                    key={index}
                    variant="h5"
                    className={classes.sidbarItem}
                  >
                    {item.name}
                  </Typography>
                ))}
              </Grid>

              <Grid container direction="column" className={classes.group}>
                <Typography gutterBottom align="left">
                  مردانه
                </Typography>
                {menCategory.slice(0, 3).map((item, index) => (
                  <Typography
                    key={index}
                    variant="h5"
                    className={classes.sidbarItem}
                  >
                    {item.name}
                  </Typography>
                ))}
              </Grid>

              <Grid container direction="column" className={classes.group}>
                <Typography gutterBottom align="left">
                  بچگانه
                </Typography>
                {kidsCategory.slice(0, 3).map((item, index) => (
                  <Typography
                    key={index}
                    variant="h5"
                    className={classes.sidbarItem}
                  >
                    {item.name}
                  </Typography>
                ))}
              </Grid>

              <Grid container direction="column" className={classes.group}>
                <Typography gutterBottom align="left">
                  ورزشی
                </Typography>
                {sportCategory.slice(0, 3).map((item, index) => (
                  <Typography
                    key={index}
                    variant="h5"
                    className={classes.sidbarItem}
                  >
                    {item.name}
                  </Typography>
                ))}
              </Grid>

              <Grid container direction="column" className={classes.group}>
                <Typography gutterBottom align="left">
                  زیبایی و سلامت
                </Typography>
                {beautyCategory.slice(0, 3).map((item, index) => (
                  <Typography
                    key={index}
                    variant="h5"
                    className={classes.sidbarItem}
                  >
                    {item.name}
                  </Typography>
                ))}
              </Grid>
            </Drawer>
          </Grid>
          <Grid item style={{ flexBasis: "80%" }}>
            <main className={classes.content}>
              <Container maxWidth="lg" className={classes.container}>
                <Box component="div" align="right" marginBottom={8}>
                  <Typography
                    variant="h5"
                    align="left"
                    color="textPrimary"
                    gutterBottom
                    className={classes.groupTitle}
                  >
                    {categoryName}
                  </Typography>
                </Box>
                <Grid container spacing={10}>
                  {data.map((item, index) => (
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
