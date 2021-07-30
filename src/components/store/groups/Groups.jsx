import React from "react";
import { useStyles } from "./style";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Link, useHistory } from "react-router-dom";
function Groups({ groupProducts }) {
  const classes = useStyles();
  return (
    <Grid container spacing={10}>
      {groupProducts.slice(0, 3).map((item, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={4} xl={4}>
          <Card className={classes.card}>
            <Link to={`/product/${item.id}`} className={classes.linkStyle}>
              <CardMedia
                className={classes.cardMedia}
                image={item.image}
                title={item.name}
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom component={"h2"}>
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
  );
}
export default Groups;
