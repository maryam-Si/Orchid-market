import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import DataTable from "../../../components/admin/tables/DataTable";
import Header from "../../../components/admin/Header";
import { getAllProducts } from "../../../store/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import ModalContainer from "../../../components/modals/ModalContainer";
import AddOrEditProductModal from "../../../components/modals/AddOrEditProductModal";
import { setLoading } from "../../../store/actions/LoadingActions";
import WithLoading from "../../../components/WithLoading";

const useStyle = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "space-between",
    transform: "translate(0px, 73px)",
    position: "relative",
  },
  table: {
    width: "100%",
    height: "400px",
    margin: `${theme.spacing(5)}px auto 0`,
  },
}));

const PanelProducts = (props) => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);
  const isLoading = useSelector((state) => state.isLoading.isLoading);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <WithLoading>
      <div className={classes.root}>
        <Header
          title="مدیریت کالاها"
          btnText="افزودن کالا"
          handelClick={handleOpen}
        />
        <div className={classes.table}>
          <DataTable
            headers={["تصویر", "نام کالا", "نام برند", "دسته بندی"]}
            data={products}
          />
          <ModalContainer open={open} onClose={handleClose}>
            <AddOrEditProductModal
              btnText="ذخیره"
              type="add"
              title="افزودن / ویرایش کالا"
              onClose={handleClose}
            />
          </ModalContainer>
        </div>
      </div>
    </WithLoading>
  );
};

export default PanelProducts;
