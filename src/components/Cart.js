

function Cart({cart}) {

  return (
    <div>
      <h2>cart</h2>
      <h3>
  Total: ₹
  {cart.reduce((total, item) => total + item.price, 0)}
</h3>
      

      {cart.length === 0 ? (
        <p>cart is empty</p>

      ):(
        cart.map((item, index)=>(
        <p key={index}>
                {item.name} - ₹{item.price}
            </p>
          
        ))

        
      )}
      </div>
    );
      
}

export default Cart;