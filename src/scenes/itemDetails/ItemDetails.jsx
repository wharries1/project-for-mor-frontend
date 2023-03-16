import "./ItemDetails.css";
import { Box, Button, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { addToCart } from "../../state";
import { useDispatch, useSelector } from "react-redux";
import Item from "../../components/Item";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";


const ItemDetails = () => {
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const [value, setValue] = useState("description");
  const [item, setItem] = useState(null);
  const [items, setItems] = useState([]);
  const cart = useSelector((state) => state.cart.cart);
  const count = cart.reduce((total, item) => {
    return total + item.count;
  }, 0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function getItem() {
    const item = await fetch(
      `https://project-for-mor-vi7dg.ondigitalocean.app/api/items/${itemId}?populate=image`,
      {
        method: "GET",
      }
    );
    const itemJson = await item.json();
    setItem(itemJson.data);
  }

  async function getItems() {
    const items = await fetch(
      `https://project-for-mor-vi7dg.ondigitalocean.app/api/items?populate=image`,
      {
        method: "GET",
      }
    );
    const itemsJson = await items.json();
    setItems(itemsJson.data);
  }

  useEffect(() => {
    getItem();
    getItems();
  }, [itemId]); // eslint-disable-line react-hooks/exhaustive-deps

  const [selectedSize, setSelectedSize] = useState(item?.selectedSize?.length ? item.selectedSize[0] : "Small");


  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  console.log(selectedSize);
  const url  = item?.attributes?.image?.data?.attributes?.url;
  return (
    <Box width="80%" m="180px auto">
      <Box display="flex" flexWrap="wrap" columnGap="40px">
        {/* IMAGES */}
        <Box flex="1 1 40%" mb="40px">
          <img
            alt={item?.name}
            width="100%"
            height="100%"
            src={`https://project-for-mor-vi7dg.ondigitalocean.app${url}`}
            style={{ objectFit: "contain" }}
          />
        </Box>

        {/* ACTIONS */}
        <Box flex="1 1 50%" mb="40px">
          <Box display="flex" justifyContent="space-between"></Box>

          <Box m="65px 0 25px 0">
            <Typography variant="h3">{item?.attributes?.name}</Typography>
            <Typography sx={{ mt: "20px" }}>
              £{item?.attributes?.price}
            </Typography>
            <Typography sx={{ mt: "20px" }}>
              {item?.attributes?.longDescription}
            </Typography>
          </Box>
          {item?.attributes?.size && (
            <Box display="flex" alignItems="center" minHeight="50px">
              <label htmlFor="size">Size:</label>
              <select
                id="size"
                value={selectedSize}
                onChange={handleSizeChange}
                style={{
                  margin: "10px",
                  padding: "10px",
                  fontSize: "16px",
                  border: "2px solid #ccc",
                  borderRadius: "5px",
                  backgroundColor: "#fff",
                  color: "#333",
                }}
              >
                {item?.attributes?.size.map((size) => (
                  <option
                    key={size}
                    value={size}
                    style={{
                      fontSize: "16px",
                      backgroundColor: "#fff",
                      color: "#333",
                    }}
                  >
                    {size}
                  </option>
                ))}
              </select>
            </Box>
          )}
          <Box display="flex" alignItems="center" minHeight="50px">
            <Button
              sx={{
                backgroundColor: "#222222",
                color: "white",
                borderRadius: 0,
                minWidth: "150px",
                padding: "10px 40px",
              }}
              onClick={() =>
                dispatch(addToCart({ item: { ...item, count, selectedSize } }))
              }
            >
              ADD TO CART
            </Button>
          </Box>
        </Box>
      </Box>

      {/* INFORMATION */}
      <Box m="20px 0">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="DESCRIPTION" value="description" />
          <Tab label="Shipping" value="shipping" />
        </Tabs>
      </Box>
      <Box display="flex" flexWrap="wrap" gap="15px">
        {value === "description" && (
          <div>{item?.attributes?.shortDescription}</div>
        )}
        {value === "shipping" && (
          <div>
            {item?.attributes?.category === "barrelLids"
              ? "Barrel Lid Shipping Details"
              : "Shipping Details"}
          </div>
        )}
      </Box>

      {/* RELATED ITEMS */}
      <Box mt="50px" width="100%">
        <Typography variant="h3" fontWeight="bold">
          You Might Also be interested in
        </Typography>
        <Box
          margin="0 auto"
          mt="20px"
          mb="20px"
          display="grid"
          gridTemplateColumns="repeat(auto-fill, 300px)"
          justifyContent="space-around"
          rowGap="20px"
          columnGap="1.33%"
        >
          {items.slice(0, 4).map((item, i) => (
            <Item key={`${item.name}-${i}`} item={item} />
          ))}
        </Box>
        <Box
          margin="0 auto"
          mt="20px"
          mb="20px"
          display="grid"
          gridTemplateColumns="repeat(auto-fill, 300px)"
          justifyContent="space-around"
          rowGap="20px"
          columnGap="1.33%"
        >
          {items
            .filter((item) => item.attributes.category === "barrelLids")
            .map((item, i) => (
              <Item key={`${item.name}-${i}`} item={item} />
            ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ItemDetails;
