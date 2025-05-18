import { Link } from "react-router";

function Menu() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/products">Products</Link>
      </li>
    </ul>
  );
}

export default Menu;
