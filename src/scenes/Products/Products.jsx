import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Item from "../../components/Item";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../state";

const ShoppingList = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("tshirt");
  const [color, setColor] = useState("All");
  const items = useSelector((state) => state.cart.items);
  console.log(items)
  const breakPoint = useMediaQuery("(min-width:600px)");

  async function getItems() {
    const items = await fetch(
      "https://project-for-mor-vi7dg.ondigitalocean.app/api/items?populate=image",
      { method: "GET" }
    );
    const itemsJson = await items.json();
    dispatch(setItems(itemsJson.data));
  }

  useEffect(() => {
    getItems();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const filteredTShirts = items.filter((item) => {
    if (category === "tshirt") {
      return !item.attributes.barrelLids; // exclude barrel lids
    }
    return item.attributes.category === category && !item.attributes.barrelLids;
  });

  const tShirts = filteredTShirts.filter((item) => 
  item.attributes.category !== "barrelLids" && 
  item.attributes.category !== "featured"
);

  const barrelLids = items.filter((item) => 
  item.attributes.category === "barrelLids"
  );
 

  const finalItems = color === "All"
    ? tShirts
    : tShirts.filter((item) => item.attributes.colour === color);

  const handleChangeCategory = (event, newValue) => {
    setCategory(newValue);
    setColor("All");
  };

  const handleChangeColor = (event, newValue) => {
    setColor(newValue);
  };

  return (
    <Box width="80%" margin="200px auto">
      <Box>
        <Typography variant="h1" textAlign="center">
          <b> T-Shirts</b>
        </Typography>
        <Tabs
          textColor="primary"
          indicatorColor="primary"
          value={category}
          onChange={handleChangeCategory}
          centered
          TabIndicatorProps={{ sx: { display: breakPoint ? "block" : "none" } }}
          sx={{
            m: "25px",
            "& .MuiTabs-flexContainer": {
              flexWrap: "wrap",
            },
          }}
        >
          <Tab label="ALL" value="tshirt" />
          <Tab label="Sealife" value="sealife" />
          <Tab label="Project For Mor" value="PFM" />
          <Tab label="BIRDS" value="birds" />
        </Tabs>
        <Tabs
          textColor="primary"
          indicatorColor="primary"
          value={color}
          onChange={handleChangeColor}
          centered
          TabIndicatorProps={{ sx: { display: breakPoint ? "block" : "none" } }}
          sx={{
            m: "25px",
            "& .MuiTabs-flexContainer": {
              flexWrap: "wrap",
            },
          }}
        >
          <Tab label="All" value="All" />
          <Tab label="White" value="White" />
          <Tab label="Black" value="Black" />
        </Tabs>
        <Box
          margin="0 auto"
          display="grid"
          gridTemplateColumns="repeat(auto-fill, 300px)"
          justifyContent="space-around"
          rowGap="20px"
          columnGap="1.33%"
        >
          {finalItems.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        </Box>
      </Box>
      <Typography variant="h1" textAlign="center" margin="100px auto">
        <b> Etched Barrel Lids</b>
      </Typography>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        {barrelLids.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
      </Box>
    </Box>
  );
};

export default ShoppingList;
