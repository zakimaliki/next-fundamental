import { useRouter } from "next/router";
import { useEffect } from "react";

const ProductDetail = () => {
  const router = useRouter();
  useEffect(() => {
    document.title = `Product ${router.query.id} Page`;
  });
  return (
    <div className="container">
      <h1>Product Detail</h1>
      <p>ID: {JSON.stringify(router.query)}</p>
      <p>ID: {router.query.params}</p>
      <p>Params: {router.query.id}</p>
    </div>
  );
};

export default ProductDetail;
