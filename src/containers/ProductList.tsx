import { useEffect, useMemo } from "react";
import Product from "../components/Product";
import { useNavigate, useSearchParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import type { ProductType } from "../Types";
import { addToCart } from "../store/slices/cartSlice";
import type { RootState } from "../store";

function ProductList() {
  // const plist = useProducts();
  const plist = useSelector((state: RootState) => state.data.data);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [queryParams, setQueryParams] = useSearchParams();

  useEffect(() => {
    dispatch({ type: "data/getData" });
  }, []);

  useEffect(() => {
    console.log("Page", queryParams.get("page"));
    console.log("Sort", queryParams.get("sort"));
  }, [queryParams]);

  const filteredList = useMemo(
    // memorize the data and compute the expersion if plist is modified or changed.
    //if we don't use this..it become an expensive thing.
    () => plist.filter((item) => item.rating > 3),
    [plist]
  );

  //memorizes the function definition.
  const addItem = (item: ProductType) => {
    dispatch(addToCart(item));
    navigate("/cart");
  };

  return (
    <div className="row">
      <button
        className="btn btn-primary"
        onClick={() => setQueryParams({ page: "5", sort: "asc" })}
      >
        Page 5
      </button>
      {filteredList.map((item) => (
        <div className="col-12 col-sm-4 col-md-4 col-lg-4">
          <Product
            key={item.productId}
            data={item}
            //   btnClick={(id) => console.log("Add item", id)}
            btnClick={(item) => addItem(item)}
          ></Product>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
