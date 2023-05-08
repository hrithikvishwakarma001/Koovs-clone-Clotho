import { Button } from "@chakra-ui/button";
import styled from "@emotion/styled";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const PageButton = styled(Button)`
  border-radius: 0;
  margin: 0.2rem;
  font-weight: 400;
  padding: 0.5rem 1rem;
  background-color: #fff;
  color: #2d3748;

  &:hover {
    background-color: #e2e8f0;
    color: #2d3748;
  }

  &.active {
    background-color: #2d3748;
    color: #fff;

    &:hover {
      background-color: #2d3748;
      opacity: 0.8;
    }
  }
`;

export const Paginate = ({ totalPages, currentPage, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <PaginationContainer>
      {pageNumbers.map((pageNumber) => (
        <PageButton
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={pageNumber === currentPage ? "active" : ""}
        >
          {pageNumber}
        </PageButton>
      ))}
    </PaginationContainer>
  );
};
