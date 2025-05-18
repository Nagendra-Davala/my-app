import { useContext } from "react";
import type { ProductType } from "../Types";
import { ThemeContext } from "../context";
import { Link } from "react-router";
import { Button, Icon } from "../UI/atoms";
import { useSelector } from "react-redux";
import type { RootState } from "../store/index";

type Props = {
  data: ProductType;
  btnClick: (id: ProductType) => void;
};

function Product({ data, btnClick }: Props) {
  const theme = useContext(ThemeContext);
  const code = useSelector((state: RootState) => state.currency);

  const color = theme === "light" ? "blue" : "white";

  return (
    <div style={{ color }}>
      <Link to={`/details/${data.productId}`}>
        <img src={data.productImage} alt={data.productName}></img>
      </Link>
      <h2>{data.productName}</h2>
      <p>
        {code}
        {data.productPrice}
      </p>
      <button className="btn btn-primary" onClick={() => btnClick(data)}>
        Add to Cart
      </button>
      <Button></Button>
      <Icon></Icon>
    </div>
  );
}

export default Product;
