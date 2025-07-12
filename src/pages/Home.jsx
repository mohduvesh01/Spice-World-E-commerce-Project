import Card from "./Card";

const Home = ({ cartItems, onAddToCart, onRemoveFromCart }) => {
  return (
    <>
      <div className="container_image">
        <div className="card text-bg-dark cardSize">
          <img
            src="/images/pexels-mareefe-678414.jpg"
            className="card-img"
            alt="Spice Banner"
          />
          <div className="card-img-overlay">
            <h5 className="card-title">Organic Indian Spices</h5>
            <p className="card-text para">
              Indian spices add aroma, flavor, and health to every dish. From
              turmeric’s healing power to cumin’s earthy taste and red chili’s
              fiery kick — each spice reflects India's rich culture and
              tradition. These natural ingredients are the secret to authentic
              Indian cuisine and centuries-old Ayurvedic wellness.
            </p>
            <p className="card-text text-end">
              <small>Aromatic. Authentic. Always Indian.</small>
            </p>
          </div>
        </div>

        <div className="mainContent">
          <h1 className="text-center Welcome">Welcome to Our Spice Store</h1>
          <p className="text-center description">
            Discover the rich flavors and aromas of our organic Indian spices...
          </p>
        </div>

        <div className="cards">
          <Card
            cartItems={cartItems}
            onAddToCart={onAddToCart}
            onRemoveFromCart={onRemoveFromCart}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
