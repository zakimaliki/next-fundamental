import axios from "axios";
const getProductDetail = (id) => async (dispatch) => {
  try {
    const products = await axios.get(
      process.env.API_BACKEND + "products/" + id
    );
    const result = products.data;
    console.log(result);
    // dispatch({ type: "GET_DETAIL_PRODUCT", payload: result });
  } catch (err) {
    console.error(err.message);
  }
};

export default  getProductDetail;
