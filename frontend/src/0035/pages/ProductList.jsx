import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../Redux/ProductReducer/action";
import { Productcard } from "./ProductCard";
import styled from "styled-components";
import { useLocation, useSearchParams } from "react-router-dom";
import { Paginate } from "../component/Paginate";

export const Productlist = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const location = useLocation();

  const { products } = useSelector((store) => store.ProductReducer);

  const totalCount = 75;
  const [currentPage, setCurrentPage] = useState(
    parseInt(searchParams.get("page")) || 1
  );
  const totalPages = Math.ceil(totalCount / 10);

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
    setSearchParams({ page: pageNumber });
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <ProductList>
        {products.length > 0 &&
          products.map((el) => {
            return <Productcard key={el.articleCode} {...el} />;
          })}
      </ProductList>

      <Pagination>
        <Paginate
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </Pagination>
    </>
  );
};

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 30px;
  padding: 40px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    padding: 20px;
    grid-gap: 20px;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  & ul {
    display: inline-flex;
    padding: 0;
    margin: 0;
  }

  & ul li {
    list-style: none;
    margin: 0 5px;
  }

  & ul li a {
    display: inline-block;
    padding: 10px 20px;
    color: #fff;
    background-color: #007bff;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }

  & ul li.active a {
    background-color: #0056b3;
  }

  & ul li.disabled a {
    color: #6c757d;
    background-color: #fff;
    cursor: not-allowed;
  }
`;
