import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getProductDetail from "../../configs/redux/actions/getDetailProduct";

const ProductDetail = () => {
  const router = useRouter();
  const dispatch = useDispatch()
  const {productDetail} = useSelector((state)=>state.product)
  console.log(productDetail.name);
  useEffect(() => {
    document.title = `Product ${router.query.id} Page`;
    dispatch(getProductDetail(router.query.id))
  });
  
  return (
    <div className="container">
      <h1>Product Detail</h1>
      <p>ID: {JSON.stringify(router.query)}</p>
      <p>ID: {router.query.params}</p>
      <p>Params: {router.query.id}</p>
      <ul>
        <li>{productDetail.name}</li>
        <li>
          <img src={productDetail.photo} alt="" />
        </li>
        <li>{productDetail.price}</li>
        <li>{productDetail.stock}</li>
        <li>{productDetail.description}</li>
      </ul>
      {/* <p>Filter: {router.query.filter}</p> */}
      {/* <p>{JSON.stringify(router.query)}</p> */}
    </div>
  );
};

export default ProductDetail;
