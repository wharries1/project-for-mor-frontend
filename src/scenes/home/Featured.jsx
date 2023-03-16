import React, { useEffect,} from "react";
import Box from "@mui/material/Box";
import Item from "../../components/Item";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../../state";
import Button from '../../components/button/button.component';
import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";

const Featured = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
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

  const featured = items.filter(
    (item) => item.attributes.featured 
  );

  return (
    <Box width="100%">
      <Box width="80%" maxWidth="1260px" margin="80px auto">
      <Typography variant="h2" textAlign="center" padding="20px">
        <b> Our Featured Products</b>
      </Typography>
      <Box
        margin="0 auto"
        display="grid"
        gridTemplateColumns="repeat(auto-fill, 300px)"
        justifyContent="space-around"
        rowGap="20px"
        columnGap="1.33%"
      >
        {featured.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
      </Box>
      <Box display="flex" justifyContent="center" mt="30px">
            <Button
              onClick={() => navigate(`/products`)}
              sx={{ backgroundColor: shades.primary[300], color: "white",}}
            >
              See More
            </Button>
          </Box>
    </Box>
    </Box>
    
  );
};

export default Featured;
