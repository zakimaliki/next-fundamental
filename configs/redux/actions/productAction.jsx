import axios from "axios";
const getProduct = () => async (dispatch) => {
  try {
    const products = await axios.get(
      process.env.API_BACKEND + "products"
    );
    const result = products.data.data;
    console.log(result);
    dispatch({ type: "GET_ALL_PRODUCT", payload: result });
  } catch (err) {
    console.error(err.message);
  }
};


export default getProduct ;
