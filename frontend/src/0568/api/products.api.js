import axios from "axios"
const URL = "http://localhost:3000/api/products/all"

 const getProducts = async () => {
  try {
    const response = await axios.get(URL)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const updateProduct = async (id, product) => {
  try {
    const response = await axios.patch(`${URL}/update/${id}`, product)
    return response.data
  } catch (error) {
    return error.message
  }
}

const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`${URL}/delete/${id}`)
    return response.data
  } catch (error) {
    return error.message
  }
}

const addProduct = async (product) => {
  try {
    const response = await axios.post(`${URL}/create`, product);
    return response.data
  } catch (error) {
    return error.message
  }
}

export { getProducts, updateProduct, deleteProduct, addProduct };

