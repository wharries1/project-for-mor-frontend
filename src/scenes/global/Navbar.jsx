import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserContext } from "../../contexts/user.context";
import {
  Badge,
  Box,
  IconButton,
  useMediaQuery,
  Modal,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  PersonOutline,
  ShoppingBagOutlined,
  //MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { setItems } from "../../state";
import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";
import { setIsCartOpen } from "../../state/";
import { Link } from "react-router-dom";
import Item from "../../components/Item";
import "./styles/navbar.styles.css";



const Navbar = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useContext(UserContext);
  const cart = useSelector((state) => state.cart.cart);
  const linkStyle = {
    margin: "auto 0",
    textAlign: "center",
    textDecoration: "none",
    color: "black",
  };
  const count = cart.reduce((total, item) => {
    return total + item.count;
  }, 0);
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
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

  const filteredItems = searchQuery.trim() !== '' ? items.filter(
    (item) => {
      const itemName = item.attributes.name ? item.attributes.name.toLowerCase() : '';
      const itemDescription = item.attributes.shortDescription ? item.attributes.shortDescription.toLowerCase() : '';
      const itemCategory = item.attributes.category ? item.attributes.category.toLowerCase().replace('-', ' ') : '';
      const searchQueryLowerCase = searchQuery.toLowerCase().replace(' ', '-');
      
      return !item.attributes.category.includes('featured') && (itemName.includes(searchQueryLowerCase) 
      || itemDescription.includes(searchQueryLowerCase) || itemCategory.includes(searchQueryLowerCase.replace('-', ' ')));
    }
  ):
  [];

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log("Search query:", searchQuery);

    handleClose();
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
    console.log(event.target.value)
  };

  return (
    <div className="navbar-main">
      <div className="navbar">
        <Box
          onClick={() => navigate("/")}
          sx={{ "&:hover": { cursor: "pointer" } }}
          color={shades.secondary[500]}
        >
          <img
            src={require("./images/project-logo-small.png")}
            alt="Alternative Text"
          ></img>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          zIndex="2"
          height="40px"
          columnGap={isNonMobile ? "20px" : "5px"}
        >
          <Link to="about" style={linkStyle}>
            <h4>About</h4>
          </Link>
          <Link to="products" style={linkStyle}>
            <h4>Shop</h4>
          </Link>
          <Link to="contact" style={linkStyle}>
            <h4>Contact</h4>
          </Link>

          <IconButton sx={{ color: "black" }} onClick={handleOpen}>
            <SearchOutlined />
          </IconButton>
          {currentUser ? (
          <IconButton sx={{ color: "black" }} onClick={() => navigate("/Account")}>
            <PersonOutline />
          </IconButton>) : (<IconButton sx={{ color: "black" }} onClick={() => navigate("/auth")}>
            <PersonOutline />
          </IconButton>)}

          <Badge
            badgeContent={count}
            color="secondary"
            invisible={cart.length === 0}
            sx={{
              "& .MuiBadge.badge": {
                right: 5,
                top: 5,
                padding: "0 4px",
                height: "14px",
                minWidth: "13px",
              },
            }}
          >
            <IconButton
              onClick={() => dispatch(setIsCartOpen({}))}
              sx={{ color: "black" }}
            >
              <ShoppingBagOutlined />
            </IconButton>
          </Badge>

          {/* <IconButton sx={{ color: "black" }}>
              <MenuOutlined />
            </IconButton> */}
        </Box>
      </div>
      <Modal open={open} onClose={handleClose}>
        <div className="modal-search">
          <form onSubmit={handleSearch}>
            <input className="searchBar"
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleInputChange}
              float="left"
            />
            <IconButton 
            onClick={handleClose}
            sx={{ 
              position: "relative",
              marginLeft: "6%"
            }}
            >
              <CloseIcon />
            </IconButton>
          </form>
          <div className="search-results">
            <Box width="100%">
              <Box width="80%" maxWidth="1260px" margin="80px auto">
                <Typography variant="h3" textAlign="center" padding="20px">
                </Typography>
                <Box
                  margin="0 auto"
                  display="grid"
                  gridTemplateColumns="repeat(auto-fill, 300px)"
                  justifyContent="space-around"
                  rowGap="20px"
                  columnGap="1.33%"
                  onClick={handleClose}
                >
                  {filteredItems.map((item) => (
                    <Item item={item} key={`${item.name}-${item.id}`} />
                  ))}
                </Box>
              </Box>
            </Box>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Navbar;
