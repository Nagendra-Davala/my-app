import { Route, Routes } from "react-router";
import Demo from "./components/Demo";
import ErrorPage from "./containers/ErrorPage";
import PrivateRoute from "./components/PrivateRoute";
import ProductDetails from "./containers/ProductDetails";
// import { lazy, Suspense } from "react";
import ProductList from "./containers/ProductList";
import Cart from "./containers/Cart";
import Login from "./containers/Login";

// const LazyProductList = lazy(() => import("./containers/ProductList"));
function AppRouter() {
  return (
    <>
      {/* <Suspense fallback={<div>Loading........</div>}> */}
      <Routes>
        <Route path="/" element={<Demo></Demo>}></Route>
        <Route
          path="/products"
          element={
            <PrivateRoute>
              <ProductList></ProductList>
              {/* <LazyProductList></LazyProductList> */}
            </PrivateRoute>
          }
        />
        <Route
          path="/details/:pid"
          element={<ProductDetails></ProductDetails>}
        ></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>

        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
      {/* </Suspense> */}
    </>
  );
}

export default AppRouter;
