import React, { useContext, useState } from 'react'
import styled from "styled-components"
import { SectionCont, Title } from "./News"
import Category from "./Category"
import Products from "./Products"
import { categories } from "../data/Categories"
import { MyContext } from "../context/Context"

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