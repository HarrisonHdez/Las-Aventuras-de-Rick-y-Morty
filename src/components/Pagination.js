import React from "react";
import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  flex-wrap: wrap;
`;

const PageButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  margin: 5px;
  cursor: pointer;

  &.active {
    background-color: #fff;
    color: #007bff;
  }
`;

/**
 * Componente de paginación que muestra botones de navegación entre páginas.
 *
 * @component
 *
 * @param {number} currentPage - La página actual.
 * @param {number} totalPages - El número total de páginas.
 * @param {Function} onPageChange - Función para manejar el cambio de página.
 */
export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <PaginationContainer>
      {pageNumbers.map((pageNumber) => (
        <PageButton
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={pageNumber === currentPage ? 'active' : ''}
        >
          {pageNumber}
        </PageButton>
      ))}
    </PaginationContainer>
  );
};
