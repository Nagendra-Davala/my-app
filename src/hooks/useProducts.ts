import { useEffect, useRef, useState } from "react";
import type { ProductType } from "../Types";
import { getProducts } from "../Services/ProductService";

function useProducts() {
  const [plist, setPlist] = useState<ProductType[]>([]);
  const dataCache = useRef(null);
  const getData = async () => {
    const response = await getProducts();
    setPlist(response.data);
    dataCache.current = response.data as any;
  };

  useEffect(() => {
    if (!dataCache.current) {
      getData();
    }
  }, []);

  return plist;
}

export default useProducts;
