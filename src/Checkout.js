import React, { useState } from "react";

function Checkout({ cart }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleOrder = () => {
    if (name && address) {
      alert("✅ Order Placed Successfully!");
    } else {
      alert("❌ Please fill all details");
    }
  };

  return (
    <div>
      <h2>Checkout</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />

      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <br /><br />

      <h3>Order Summary</h3>
      {cart.map((item, index) => (
        <p key={index}>
          {item.name} - ₹{item.price}
        </p>
      ))}

      <br />
      <button onClick={handleOrder}>Place Order</button>
    </div>
  );
}

export default Checkout;