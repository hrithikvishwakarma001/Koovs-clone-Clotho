import axios from "axios"
const URL = "http://localhost:3000/api/products"

const cache = {}

 const getProducts = async () => {
  try {
    if (cache[URL]) return cache[URL];
    const response = await axios.get(URL)
    cache[URL] = response.data
    return response.data.products
  } catch (error) {
    console.log(error)
  }
}

export default getProducts

