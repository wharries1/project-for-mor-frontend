import { useState } from "react";
import { Box, Typography, useTheme, Button } from "@mui/material";
import { shades } from "../theme";
import { useNavigate } from "react-router-dom";

const Item = ({ item, width }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const {
    palette: { neutral },
  } = useTheme();

  const { category, price, name } = item?.attributes;
  const url  = item?.attributes?.image?.data?.attributes?.url;
  return (
    <Box width={width}>
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <img
          alt={item.name}
          width="300px"
          height="300px"
          src={`https://project-for-mor-vi7dg.ondigitalocean.app${url}`}
          onClick={() => navigate(`/item/${item.id}`)}
          style={{ cursor: "pointer" }}
        />
        <Box
          display={isHovered ? "block" : "none"}
          position="absolute"
          bottom="10%"
          left="0"
          width="100%"
          padding="0 5%"
        >
          <Box display="flex" justifyContent="center">
            <Button
              onClick={() => navigate(`/item/${item.id}`)}
              sx={{ backgroundColor: shades.primary[300], color: "white" }}
            >
              See More
            </Button>
          </Box>
        </Box>
      </Box>

      <Box mt="3px">
        <Typography variant="subtitle2" color={neutral.dark}>
          {category
            .replace(/^./, (str) => str.toUpperCase())}
        </Typography>
        <Typography>{name}</Typography>
        <Typography fontWeight="bold">£{price}</Typography>
      </Box>
    </Box>
  );
};

export default Item;
