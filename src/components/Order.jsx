import { Box, Typography,} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Item = ({ item, width }) => {
    const navigate = useNavigate();
  

  const {  name, imageUrl, price, description, id } = item
  console.log(item)
 

  return (
    <Box width={width}>
      <Box display="flex" flexWrap="wrap" columnGap="40px">
        {/* IMAGES */}
        <Box flex="1 1 80%" mb="40px">
          <img
            alt={name}
            width="100%"
            height="100%"
            src={`https://project-for-mor-vi7dg.ondigitalocean.app/${imageUrl}`}
            onClick={() => navigate(`/item/${id}`)}
            style={{ objectFit: "contain" }}
          />
        </Box>

        {/* ACTIONS */}
        <Box flex="1 1 50%" mb="40px">
          <Box display="flex" justifyContent="space-between"></Box>

          <Box>
            <Typography variant="h3">{item?.name}</Typography>
            <Typography sx={{ mt: "20px" }}>
              {/* £{item?.attributes?.price} */}
            </Typography>
            <Typography sx={{ mt: "20px" }}>
              {description}
            </Typography>
            <Typography sx={{ mt: "20px" }}>
              £{price}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Item;
