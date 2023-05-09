import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../Redux/ProductReducer/action";
import { Productcard } from "./ProductCard";
import styled from "styled-components";
import { useLocation, useSearchParams } from "react-router-dom";
import { Paginate } from "../component/Paginate";
import { Sidebar } from "./Sidebar";


export const Productlist = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const { products } = useSelector((store) => store.ProductReducer);
  const totalCount = 90;
  const [currentPage, setCurrentPage] = useState(
    parseInt(searchParams.get("page"))
  );
  const totalPages = Math.ceil(totalCount / 10);

  const [columns, setColumns] = useState(5);

  let obj = {
    params: {
      gender: searchParams.getAll("category"),
      _sort: searchParams.get("order") && "price",
      _order: searchParams.get("order"),
      _limit: 8,
      _page: currentPage,
    },
  };

  useEffect(() => {
    dispatch(getProduct(obj));
  }, [location.search, currentPage]);

  const handlePageChange = (pageNumber) => {
    setSearchParams({
      page: pageNumber,
      category: searchParams.getAll("category"),
      order: searchParams.get("order"),
    });
    setCurrentPage(pageNumber);
  };

  const handleColumnsChange = (numColumns) => {
    setColumns(numColumns);
  };

  return (
    <>
      <Sidebar />
      <ButtonContainer>
        <Button onClick={() => handleColumnsChange(5)}>|||||</Button>
        <Button onClick={() => handleColumnsChange(4)}>||||</Button>
        <Button onClick={() => handleColumnsChange(3)}>|||</Button>
        <Button onClick={() => handleColumnsChange(2)}>||</Button>
      </ButtonContainer>
      <ProductList columns={columns}>
  {products.length > 0 &&
    products.map((el) => {
      return (
        <div style={{ width: '100%' }} key={el.articleCode}>
          <Productcard {...el} />
        </div>
      );
    })}
</ProductList>


      <Paginate
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, minmax(250px, 1fr));
  grid-gap: 25px;
  padding: 40px;
  background-color: #fff;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, minmax(250px, 1fr));
    padding: 30px;
    grid-gap: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
    padding: 20px;
    grid-gap: 15px;
    margin: 0 10px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, minmax(150px, 1fr));
    padding: 15px;
    grid-gap: 10px;
    width: 100%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-right: 10px;
  }
`;

const Button = styled.button`
  margin: 0 10px;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  &:hover {
    background-color: #ccc;
  }

  @media (max-width: 768px) {
    margin: 0 5px;
    padding: 8px;
  }
`;
