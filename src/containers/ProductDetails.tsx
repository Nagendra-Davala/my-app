import { useEffect } from "react";
import { useParams } from "react-router";

function ProductDetails() {
  const params = useParams(); //path params

  useEffect(() => {
    console.log(params);
    //Fetch product details using the params.pid.
  }, [params]);

  return (
    <div>
      <h1>Product Details</h1>
      <p>{params.pid}</p>
    </div>
  );
}

export default ProductDetails;
