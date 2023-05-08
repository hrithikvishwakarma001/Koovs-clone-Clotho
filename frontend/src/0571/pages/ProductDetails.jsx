import { Spinner, Center } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import SingleProductPageCardMaker from "../pages/ProductCard";

export default function ProductDetails() {
  const [loading, setloading] = useState(false);
  const [data, setdata] = useState({});
  const { id } = useParams();
  const pro = () => {
    setloading(true);
    axios
      .get(`https://clothoapi.onrender.com/api/products/all/${id}`)
      .then((res) => setdata(res.data.product))
      .catch((err) => console.log(err))
      .finally(() => {
        setloading(false);
      });
  };
 // console.log("dataPrrr",data)
  useEffect(() => {
    pro();
  }, []);
  if (loading) {
    return (
      <Center>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Center>
    );
  }
  return (
    <div>
      <SingleProductPageCardMaker  data={data} />
    </div>
  );
}