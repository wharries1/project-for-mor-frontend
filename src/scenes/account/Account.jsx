import "./Account.css";
import { UserContext } from "../../contexts/user.context";
import { useContext, useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Order from "../../components/Order";

const Account = () => {
  
  const { currentUser } = useContext(UserContext);
  const [orders, setOrders] = useState([]);
  async function getItems() {
    const orders = await fetch(`https://project-for-mor-vi7dg.ondigitalocean.app/api/orders`, {
      method: "GET",
    });

    const itemsJson = await orders.json();
    setOrders(itemsJson.data);
    console.log(itemsJson);
  }
  console.log(orders);
  const orderItems = [];

  orders.forEach((order) => {
    const products = order.attributes.products;
    products.forEach((product) => {
      if (product.attributes) {
        const { name, price, description } = product.attributes;
        const id = product.id;
        const imageUrl =
          product?.attributes?.imageUrl?.data?.attributes?.imageUrl;
        console.log(product);
        orderItems.push({ name, imageUrl, price, id, description });
      } else {
        const { name, imageUrl, price, id, description } = product;
        orderItems.push({ name, imageUrl, price, id, description });
      }
    });
  });

  console.log(orderItems);

  useEffect(() => {
    getItems();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="account-container">
      <div className="account-row">Hello {currentUser?.displayName}</div>
      <Box width="80%" m="180px auto" mt="0">
        <Box mt="50px" width="100%">
          <Typography variant="h3" fontWeight="bold">
            Your Orders
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
            {orderItems.map((item, i) => (
              <Order key={`${item.name}-${i}`} item={item} />
            ))}
          </Box>
        </Box>
      </Box>
      
    </div>
  );
};

export default Account;
