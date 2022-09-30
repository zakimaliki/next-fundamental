import { useRouter } from "next/router";
import Link from "next/link";
import ModalBootstrap from "../../components/Modal";
import getProduct from "../../configs/redux/actions/productAction";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";


const products = () => {

  const router = useRouter();
  const dispatch = useDispatch()
  const {product} = useSelector((state)=>state.product)
  console.log(product);
  useEffect(()=>{
    dispatch(getProduct())
},[])
  return (
    <div className="container">
      <h1>Product</h1>
      <ModalBootstrap modaltype="create">Create</ModalBootstrap>
      <table className="table table-bordered">
        <thead>
          <tr className="bg-secondary text-light text-center">
            <th scope="col">NO</th>
            <th scope="col">NAMA</th>
            <th scope="col">STOCK</th>
            <th scope="col">PRICE</th>
            <th scope="col">IMAGE</th>
            <th scope="col">DESCRIPTION</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item, index) => (
            <tr key={item.id} className="text-center">
              <th scope="row">{index + 1}</th>
              <td>{item.name}</td>
              <td>{item.stock}</td>
              <td>{item.price}</td>
              <td><a target="_blank" rel="noopener noreferrer" href={item.photo}>{item.photo}</a></td>
              <td>{item.description}</td>
              <td className="text-center">
                <Link href={`products/${item.id}`}>
                  <button
                    className="btn btn-primary"
                    style={{ marginRight: "10px" }}
                  >
                    Detail
                  </button>
                </Link>
                <ModalBootstrap
                  modaltype="edit"
                  id={item.id}
                  name={item.name}
                  stock={item.stock}
                  price={item.price}
                  photo={item.photo}
                  description={item.description}
                >
                  Edit
                </ModalBootstrap>
                <ModalBootstrap modaltype="delete" id={item.id} name={item.name}>
                  Delete
                </ModalBootstrap>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default products;
