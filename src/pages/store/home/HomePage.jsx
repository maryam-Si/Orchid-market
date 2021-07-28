import React, { useEffect } from "react";
import Slider from "../../../components/store/carousel/Slider";
import { useStyles } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../../../store/actions/productActions";
import Groups from "../../../components/store/groups/Groups";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
function HomePage(props) {
  const classes = useStyles();
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

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
  console.log(womenCategory);

  return (
    <div>
      <Slider />
      <main>
        <Container className={classes.cardGrid} maxWidth="lg">
          <Box component="div" align="right" marginBottom={8}>
            <Typography
              component={Link}
              variant="h5"
              align="left"
              color="textPrimary"
              gutterBottom
              to="/category/زنانه"
              className={classes.groupTitle}
            >
              پوشاک زنانه
            </Typography>
          </Box>
          <Groups groupProducts={womenCategory} />
        </Container>
        <Container className={classes.cardGrid} maxWidth="lg">
          <Box component="div" align="right" marginBottom={8}>
            <Typography
              component={Link}
              variant="h5"
              align="left"
              color="textPrimary"
              gutterBottom
              to="/category/مردانه"
              className={classes.groupTitle}
            >
              پوشاک مردانه
            </Typography>
          </Box>
          <Groups groupProducts={menCategory} />
        </Container>

        <Container className={classes.cardGrid} maxWidth="lg">
          <Box component="div" align="right" marginBottom={8}>
            <Typography
              component={Link}
              variant="h5"
              align="left"
              color="textPrimary"
              gutterBottom
              className={classes.groupTitle}
              to="/category/بچگانه"
            >
              پوشاک بچگانه
            </Typography>
          </Box>
          <Groups groupProducts={kidsCategory} />
        </Container>

        <Container className={classes.cardGrid} maxWidth="lg">
          <Box component="div" align="right" marginBottom={8}>
            <Typography
              component={Link}
              variant="h5"
              align="left"
              color="textPrimary"
              gutterBottom
              className={classes.groupTitle}
              to="/category/ورزشی"
            >
              پوشاک ورزشی
            </Typography>
          </Box>
          <Groups groupProducts={sportCategory} />
        </Container>

        <Container className={classes.cardGrid} maxWidth="lg">
          <Box component="div" align="right" marginBottom={8}>
            <Typography
              component={Link}
              variant="h5"
              align="left"
              color="textPrimary"
              gutterBottom
              className={classes.groupTitle}
              to="/category/سلامت و زیبایی"
            >
              سلامت و زیبایی
            </Typography>
          </Box>
          <Groups groupProducts={beautyCategory} />
        </Container>
      </main>
    </div>
  );
}
export default HomePage;
