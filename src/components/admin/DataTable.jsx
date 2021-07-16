import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";
import {
  getAllProducts,
  selectAProduct,
} from "../../store/actions/productActions";
import ModalContainer from "../modals/ModalContainer";
import AddOrEditProductModal from "../modals/AddOrEditProductModal";
import { deleteProduct } from "../../api/products";

/**import icons */
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import { setLoading } from "../../store/actions/LoadingActions";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: `700px`,
  },
  img: {
    width: `${144}px`,
    height: `${137}px`,
    objectFit: "cover",
    objectPosition: "top",
  },
  editIcn: {
    marginRight: `${29}px`,
  },
});

export default function DataTable({ headers, data }) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const dispatch = useDispatch();
  const selectedProduct = useSelector((state) => state.allProducts.product);

  /**
   * modal handling
   */
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //////////////////////////////////////////////////////////////

  /**handling pagination */

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data?.length - page * rowsPerPage);

  //////////////////////////////////////////////////////////////////////////////////
  /** handling edit and delete product */

  function handleEditProduct(product) {
    dispatch(selectAProduct(product));
    handleOpen();
  }
  function handleDeleteProduct(id) {
    deleteProduct(id);
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(getAllProducts());
      dispatch(setLoading(false));
    }, 1000);
  }

  ///////////////////////////////////////////////////////////////

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              {headers.map((th, index) => (
                <StyledTableCell key={index} align="left">
                  {th}
                </StyledTableCell>
              ))}
              <StyledTableCell align="left">ویرایش/حذف</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <StyledTableRow className={classes.table__row} key={row.id}>
                  <StyledTableCell>
                    <img
                      className={classes.img}
                      src={row.image}
                      alt="this is product"
                    />
                  </StyledTableCell>
                  <StyledTableCell>{row.name}</StyledTableCell>
                  <StyledTableCell>{row.brand}</StyledTableCell>
                  <StyledTableCell>{row.category}</StyledTableCell>

                  <StyledTableCell>
                    <Button
                      onClick={() => {
                        handleEditProduct(row);
                      }}
                      className={classes.editIcn}
                      color="primary"
                    >
                      <EditIcon />
                    </Button>
                    <Button
                      onClick={() => {
                        handleDeleteProduct(row.id);
                      }}
                      className={classes.editIcn}
                      color="secondary"
                    >
                      <DeleteForeverIcon />
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
      <ModalContainer open={open} onClose={handleClose}>
        <AddOrEditProductModal
          btnText="ذخیره"
          type="edit"
          title="افزودن / ویرایش کالا"
          onClose={handleClose}
          selectedProduct={selectedProduct}
        />
      </ModalContainer>
    </>
  );
}
