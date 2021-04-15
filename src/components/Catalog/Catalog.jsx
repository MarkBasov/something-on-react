import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsStartAsync, clearProducts } from '../../redux/products/productsSlice'
import { selectGetProducts } from '../../redux/products/selector'

const Catalog = () => {
  const dispatch = useDispatch()
  const [products, setProducts] = useState([])

  const selectedProducts = useSelector(selectGetProducts)

  const fetchGetProductStart = () => {
    dispatch(fetchProductsStartAsync())
  }

  useEffect(() => {
    fetchGetProductStart()
    return () => dispatch(clearProducts)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (selectedProducts?.length) {
      setProducts([...selectedProducts])
    }
  }, [selectedProducts])

  return (
    <div>
      {(products.length && products?.map((item, key) => (
          <span key={key.toString()}>
            {item.name}
            <img
              alt=""
              src={item?.image_url}
            />
          </span>
        ))) || (
        <span>
          Это каталог
        </span>
      )}
    </div>
  )
}

export default Catalog
