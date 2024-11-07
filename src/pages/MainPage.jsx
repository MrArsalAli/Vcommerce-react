import { useContext, useState, useEffect } from "react"
import ProductCard from "../components/ProductCard.jsx"
import CategoryChip from "../components/CategoryChip.jsx"
import Footer from "../components/Footer.jsx";
import React from 'react';
import { Pagination } from 'antd';
import { CartContext } from "../Context/CartContext.jsx"

function MainPage() {

  const { cartItems } = useContext(CartContext)
  console.log(cartItems)

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [chosenCategory, setChosenCategory] = useState("All");
  const [limit, setLimit] = useState(24);
  const [total, setTotal] = useState(0);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    const url = chosenCategory === "All" ?
      'https://dummyjson.com/products' :
      `https://dummyjson.com/products/category/${chosenCategory}`
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products)
      }).catch((err) => console.log(err)
      )
  }, [chosenCategory])

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then((res) => res.json())
      .then((data) => {
        setCategories(data)
      }).catch((err) => console.log(err)
      )
  }, [])

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.products)
        setTotal(res.total)
      })
  }, [limit, skip])

  return (
    <>

    <div className="container mx-auto">
      <div className="flex flex-wrap">
        <CategoryChip
          onClick={() => setChosenCategory("All")}
          category={{
            slug: 'All',
            name: 'All'
          }} isChosen={chosenCategory === "All"}
        />
        {categories.map((category) => (
          <CategoryChip onClick={() => setChosenCategory(category.slug)}
            isChosen={category.slug === chosenCategory}
            category={category} key={category.slug} />
        ))}
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((data) => (
              <ProductCard info={data} key={data.id} />
            )
            )}
          </div>
        </div>
      </section>
    </div>
    <div className="flex justify-end">
      <Pagination
        className="mb-4"
        defaultCurrent={1}
        total={total}
        pageSize={limit}
        onChange={(num) => setSkip((num - 1) * limit)}
        onShowSizeChange={(pageSize) => setLimit(pageSize)}
      />
    </div>
    <Footer />
    </>
  )
}


export default MainPage;