import { useState } from "react";

function ProductList({ addToCart }) {
    const[maxPrice,setMaxPrice] = useState(2000);

  const products = [
    { id: 1, name: "Shoes", price: 999 },
    { id: 2, name: "T-Shirt", price: 499 },
    { id: 3, name: "Bag", price: 799 },
    { id: 4, name: "Jeans", price: 1099 },
    { id: 5, name: "Notebooks", price: 200 },
  ];

  return (
    <div>
      <h2>Products</h2>
      <label>filter by price:</label>
      <input
            type="range"
            min="0"
            max="2000"
            value={maxPrice}
            onChange={(e)=> setMaxPrice(e.target.value)}
            />
            <p> Max Price: ₹{maxPrice}</p>

      {products
      .filter(p => p.price <= maxPrice)
      .map(product => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
    </div>
  );
}
export default ProductList;
