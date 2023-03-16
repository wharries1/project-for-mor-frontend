import React, { useState } from "react";

function OrderForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      data: {
      name,
      email,
      product,
      quantity,
      },
    };

    try {
      const response = await fetch("https://project-for-mor-vi7dg.ondigitalocean.app/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      console.log("Order created successfully!");
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Product:
        <input type="text" value={product} onChange={(e) => setProduct(e.target.value)} />
      </label>
      <label>
        Quantity:
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default OrderForm;
