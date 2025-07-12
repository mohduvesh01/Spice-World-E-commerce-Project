const Cart = ({ cartItems }) => {
  return (
    <>
      <div className="cartContainer">
        <h2 className="cartHeading">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="emptyCart">Your cart is empty</p>
        ) : (
          <ul className="cartList">
            {cartItems.map((item) => (
              <li key={item.id} className="cartItem">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cartItemImage"
                />
                <div className="cartItemDetails">
                  <h5 className="cartItemTitle">{item.name}</h5>
                  <p className="cartItemDescription">{item.description}</p>
                  <span className="cartItemPrice">₹{item.price}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Cart;
