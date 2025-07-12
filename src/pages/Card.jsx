import data from "../data/spices.js";

const Card = ({ cartItems, onAddToCart, onRemoveFromCart }) => {
  const isInCart = (itemId) => {
    return cartItems.some((item) => item.id === itemId);
  };

  return (
    <>
      <div className="Container">
        {data.map((c) => (
          <div key={c.id} className="card" style={{ width: "18rem" }}>
            <img src={c.image} className="card-img-top" alt={c.name} />
            <div className="card-body">
              <h5 className="card-title">{c.name}</h5>
              <p className="card-text disc">{c.description}</p>
              <p className="cardPrice">₹{c.price}</p>
            </div>

            <div className="addBtn mb-3">
              {isInCart(c.id) ? (
                <button
                  className="btn btn-danger"
                  onClick={() => onRemoveFromCart(c.id)}
                >
                  Remove from Cart ❌
                </button>
              ) : (
                <button
                  className="btn btn-primary"
                  onClick={() => onAddToCart(c)}
                >
                  Add to Cart 🛒
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
