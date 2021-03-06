import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Typography,
  TextField,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import MUIRichTextEditor from "mui-rte";
import CancelIcon from "@material-ui/icons/Cancel";
import { useDispatch } from "react-redux";
import {
  setProduct,
  getAllProducts,
  removeSelectedProduct,
  editAProductById,
} from "../../store/actions/productActions";
import { setLoading } from "../../store/actions/LoadingActions";

import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  form: {
    transform: "translate(0px, -28px)",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    position: "relative",
    width: "478px",
    textAlign: "center",
    height: "97%",
  },
  closeBtn: {
    position: "absolute",
    top: "2px",
    right: "2px",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  textEditor: {
    width: "100%",
    overflowX: "hidden",
    overflowY: "scroll",
    height: "222px",
  },

  img: {
    width: `${100}px`,
    height: `${100}px`,
    objectFit: "cover",
    objectPosition: "top",
  },
  [theme.breakpoints.down("xl")]: {
    saveBtn: {
      transform: "translate(0px,120px)",
    },
  },
  [theme.breakpoints.down("lg")]: {
    saveBtn: {
      transform: "translate(0px,200px)",
    },
    form: {
      transform: "translate(0px, -4px)",
    },
    img: {
      width: `${120}px`,
      height: `${120}px`,
    },
    formTitle: {
      fontSize: "1.5rem",
      transform: "translate(0px, -10px)",
    },
  },
  [theme.breakpoints.down("md")]: {
    saveBtn: {
      transform: "translate(0px,-42px)",
    },
    form: {
      transform: "translate(0px, -9px)",
    },
    img: {
      width: `${100}px`,
      height: `${100}px`,
    },
    formTitle: {
      fontSize: "1rem",
      transform: "translate(0px, -10px)",
    },
  },

  [theme.breakpoints.down("sm")]: {
    form: {
      transform: "translate(0px, -68px)",
    },

    img: {
      width: `${54}px`,
      height: `${54}px`,
    },
    formTitle: {
      fontSize: "0.9rem",
      transform: "translate(0px, -23px)",
    },
    saveBtn: {
      transform: "translate(0px,-55px)",
    },
    h6: {
      fontSize: "1rem",
    },
    overrides: {
      MuiGrid: {
        item: {
          padding: "0px",
        },
        MuiInputBase: {
          input: {
            fontSize: "0.7rem",
          },
        },
      },
    },
  },
}));

function AddOrEditProductModal({ title, btnText, onClose, selectedProduct }) {
  const classes = useStyles();
  const [name, setName] = useState(
    selectedProduct ? selectedProduct.name : null
  );
  const [brand, setBrand] = useState(
    selectedProduct ? selectedProduct.brand : null
  );
  const [image, setImage] = useState(
    selectedProduct ? selectedProduct.image : null
  );
  const [category, setCategory] = useState(
    selectedProduct ? selectedProduct.category : null
  );
  const [description, setDescription] = useState(
    selectedProduct ? selectedProduct.description : null
  );
  const dispatch = useDispatch();
  //////////////////////////////////////
  const def = `{"blocks":[{"key":"b76h6","text":"${
    description ? description : ""
  }","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":500,"style":""}],"entityRanges":[],"data":{}}],"entityMap":{}}`;
  const customControl = [
    {
      name: "my-style",
      type: "inline",
      inlineStyle: {
        backgroundColor: "black",
        color: "red",
      },
    },
  ];

  ///////////////////////////////////////////////////
  /**convert image to base4 */
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => reject(error);
    });
  };
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setImage(base64);
  };

  /////////////////////////////////////////////////////////////

  function handleOnSubmit(e) {
    e.preventDefault();
    if ((name, brand, image, category, description)) {
      if (selectedProduct) {
        console.log(selectedProduct);
        dispatch(removeSelectedProduct());
        dispatch(
          editAProductById(selectedProduct.id, {
            name,
            brand,
            image,
            category,
            description,
          })
        );
        setName("");
        setBrand("");
        setImage("");
        setDescription("");
        setCategory("");
        onClose();

        dispatch(setLoading(true));
        setTimeout(() => {
          dispatch(getAllProducts());
          dispatch(setLoading(false));
        }, 1000);
      } else {
        const newProduct = {
          name,
          brand,
          image,
          category,
          description,
        };
        dispatch(setProduct(newProduct));
        onClose();
        dispatch(setLoading(true));
        setTimeout(() => {
          dispatch(getAllProducts());

          dispatch(setLoading(false));
        }, 1000);

        setName("");
        setBrand("");
        setImage("");
        setDescription("");
        setCategory("");
      }
    } else {
      toast.error("???????????? ?????? ?? ???????????? ???????????? ??????");
    }
  }

  //////////////////////////////////////////////////////
  return (
    <div className={classes.paper}>
      <h2 id="transition-modal-title" className={classes.formTitle}>
        {title}{" "}
      </h2>
      <CancelIcon
        color="error"
        className={classes.closeBtn}
        onClick={onClose}
      />
      <form className={classes.form} onSubmit={handleOnSubmit}>
        <Grid container direction="column" spacing={3}>
          <Grid item lg={12}>
            <TextField
              margin="normal"
              fullWidth
              type="name"
              id="name"
              label=" ?????? ???????? "
              name="name"
              autoFocus
              className={classes.input}
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </Grid>
          <Grid item lg={12}>
            <TextField
              margin="normal"
              fullWidth
              type="text"
              id="brand"
              label="  ???????? "
              name="brand"
              autoFocus
              className={classes.input}
              onChange={(e) => setBrand(e.target.value)}
              value={brand}
            />
          </Grid>

          <Grid container spacing={2} lg={12}>
            <Grid item lg={6}>
              <InputLabel
                id="demo-simple-select-label"
                style={{ textAlign: "right" }}
              >
                ?????????? ????????
              </InputLabel>
              <TextField
                margin="normal"
                type="file"
                id="image"
                name="image"
                autoFocus
                className={classes.input}
                accept=".jpeg, .png, .jpg"
                onChange={(e) => handleFileUpload(e)}
              />
            </Grid>
            {image && (
              <Grid item lg={4}>
                <img src={image} alt="product" className={classes.img} />
              </Grid>
            )}
          </Grid>

          <Grid item lg={12}>
            <InputLabel
              id="demo-simple-select-label"
              style={{ textAlign: "right" }}
            >
              ???????? ????????
            </InputLabel>
            <Select
              id="demo-simple-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              fullWidth
            >
              <MenuItem value={"??????????"}>??????????</MenuItem>
              <MenuItem value={"????????????"}>????????????</MenuItem>
              <MenuItem value={"????????????"}>????????????</MenuItem>
              <MenuItem value={"??????????"}>??????????</MenuItem>
            </Select>
          </Grid>
          <Grid item lg={12} className={classes.textEditor}>
            <MUIRichTextEditor
              label="???????? ???????? ???? ???? ????????"
              defaultValue={def}
              customControls={customControl}
              inlineToolbar={true}
              onChange={(state) => {
                setDescription(state.getCurrentContent().getPlainText());
              }}
            />
          </Grid>
          <Grid item lg={12}>
            <Button
              type="submit"
              variant="contained"
              className={classes.saveBtn}
              color="primary"
            >
              <Typography variant="h6" className={classes.title}>
                {btnText}
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default AddOrEditProductModal;
