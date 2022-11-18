import { Link} from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <>
      <div className="Header">
        <div className="Logo">
          <h3>Munnawars Shop</h3>
        </div>
        <div className="Content">
          <Link to="home/">Home</Link>
        </div>
        <div className="Content">
          <Link to="about">About</Link>
        </div>
        <div className="Content">
          <Link to="products">Products</Link>
        </div>
        <div className="Content">
          <Link to="contact">Contact</Link>
        </div>
        <div className="Content">
            <button><Link to="login">Login</Link></button>
        </div>
        <div className="Content">
          <Link to="cart">
            <span>Cart</span>
            <span>3</span>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Header;
