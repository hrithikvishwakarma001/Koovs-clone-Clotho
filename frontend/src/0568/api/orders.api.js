import axios from 'axios';
import { BASEURL } from '../utils';
export const getOrders = async () => {
  const response = await axios.get(`${BASEURL}/api/orders/admin`);
  return response.data;
}