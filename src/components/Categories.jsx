import React, { useContext, useState } from 'react'

// useContext
import { MyContext } from "../context/Context"

// Styled Components
import styled from "styled-components"
import { SectionCont, Title } from "./News"

// Components
import Category from "./Category"
import Products from "./Products"

// Data
import { categories } from "../data/Categories"

const CategoriesCont = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
`

const Categories = () => {
  const { filterResult } = useContext(MyContext)
  const [selectedCategoryId, setSelectedCategoryId] = useState(categories[0].id);
  const handleCategoryClick = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  return (
    <>
      <SectionCont>
        <Title>Categorias</Title>
        <CategoriesCont>
          {categories.map((categoria) => (
            <Category key={categoria.id} img={categoria.img} title={categoria.title} category={categoria.category} func={() => filterResult(categoria.category)}
            id={categoria.id}
            selectedCategoryId={selectedCategoryId}
            handleClick={handleCategoryClick} />
          ))}
        </CategoriesCont>
        <Products />
      </SectionCont>
    </>
  )
}

export default Categories