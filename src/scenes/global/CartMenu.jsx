import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styled from "@emotion/styled";
import { shades } from "../../theme";
import {
  decreaseCount,
  increaseCount,
  removeFromCart,
  setIsCartOpen,
} from "../../state";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  
  const count = cart.reduce((total, item) => {
    return total + item.count;
  }, 0);

  const totalPrice = cart.reduce((total, item) => {
    return total + item.count * item.attributes.price;
  }, 0);

  const isNonMobile = useMediaQuery("(min-width:600px)");
  
  return (
    <Box
      onClick={() => dispatch(setIsCartOpen({}))}
      display={isCartOpen ? "block" : "none"}
      backgroundColor="rgba(0, 0, 0, 0.4)"
      position="fixed"
      width="100%"
      height="100%"
      left="0"
      top="0"
      overflow="auto"
      zIndex={11}
    >
      <Box
        position="fixed"
        right="0"
        bottom="0"
        width="80%"
        maxWidth="500px"
        height="100%"
        backgroundColor="white"
      >
        <Box
          padding="30px"
          overflow="auto"
          height="100%"
          onClick={() => dispatch(setIsCartOpen({}))}
        >
          {/* HEADER */}
          <FlexBox mb="15px">
            <Typography variant="h3">SHOPPING BAG ({count})</Typography>
            <IconButton onClick={() => dispatch(setIsCartOpen({}))}>
              <CloseIcon />
            </IconButton>
          </FlexBox>

          {/* CART LIST */}
          <Box>
            {cart.map((item) => (
              <Box
                key={`${item.attributes.name}-${item.selectedSize}-${item.id}`}
              >
                <FlexBox p="15px 0">
                  <Box flex="1 1 40%">
                    <img
                      alt={item?.name}
                      width={isNonMobile ? "164px" : "100px"}
                      height={isNonMobile ? "164px" : "100px"}
                      src={`https://project-for-mor-vi7dg.ondigitalocean.app${item?.attributes?.image?.data?.attributes?.url}`}
                      onClick={() => {
                        navigate(`/item/${item.id}`);
                        dispatch(setIsCartOpen({}));
                      }}
                      style={{ cursor: "pointer" }}
                    />
                  </Box>
                  <Box flex="1 1 60%">
                    <FlexBox mb="5px">
                      <Typography fontWeight="bold">
                        {item.attributes.name}
                      </Typography>
                      <IconButton
                        onClick={() =>
                          dispatch(
                            removeFromCart({
                              id: item.id,
                              selectedSize: item.selectedSize,
                            })
                          )
                        }
                      >
                        <CloseIcon />
                      </IconButton>
                    </FlexBox>
                    <Typography>{item.attributes.shortDescription}</Typography>
                    <FlexBox m="15px 0">
                      <Box
                        display="flex"
                        alignItems="center"
                        border={`1.5px solid ${shades.neutral[500]}`}
                      >
                        <IconButton
                          onClick={() =>
                            dispatch(decreaseCount({ id: item.id }))
                          }
                        >
                          <RemoveIcon />
                        </IconButton>
                        <Typography>{item.count}</Typography>
                        <IconButton
                          onClick={() =>
                            dispatch(increaseCount({ id: item.id }))
                          }
                        >
                          <AddIcon />
                        </IconButton>
                      </Box>
                      {item.selectedSize && (
                        <Box>
                          <b>Size: {item.selectedSize}</b>
                        </Box>
                      )}
                      <Typography fontWeight="bold">
                        £{item.attributes.price}
                      </Typography>
                    </FlexBox>
                  </Box>
                </FlexBox>
                <Divider />
              </Box>
            ))}
          </Box>

          {/* ACTIONS */}
          <Box m="20px 0">
            <FlexBox m="20px 0" borderBottom="0.5px solid #cfcfcf">
              <Typography fontWeight="bold">SUBTOTAL</Typography>
              <Typography fontWeight="bold">£{totalPrice}</Typography>
            </FlexBox>

            <Box display={count !== 0 ? "block!important" : "none!important"}>
              <Button
                sx={{
                  backgroundColor: shades.primary[400],
                  color: "white",
                  borderRadius: 0,
                  minWidth: "100%",
                  padding: "20px 40px",
                  m: "20px 0",
                }}
                onClick={() => {
                  navigate("/checkout");
                  dispatch(setIsCartOpen({}));
                }}
              >
                CHECKOUT
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CartMenu;
