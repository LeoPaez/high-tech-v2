import React from 'react';

// Styled Components
import styled from 'styled-components';

const CategoryCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px 10px;
  border: 2px solid ${({ selected }) => selected ? "#495057" : "#adb5bd"};
  border-radius: 4px;
  gap: 16px;
  background-color: #f8f9fa;
  width: 130px;
  cursor: pointer;
  :hover {
    border: 2px solid ${({ selected }) => selected ? "#495057" : "#6c757d"};
  }
`;

const CatIcon = styled.img`
  width: 60px;
`;

const CatName = styled.p`
  font-weight: 700;
`;

const Category = ({ id, img, title, func, selectedCategoryId, handleClick }) => {
  const handleCategoryClick = () => {
    handleClick(id);
    func();
  };

  const isSelected = id === selectedCategoryId;

  return (
    <>
      <CategoryCont selected={isSelected} onClick={handleCategoryClick}>
        <CatIcon src={img} />
        <CatName>{title}</CatName>
      </CategoryCont>
    </>
  )
}

export default Category;