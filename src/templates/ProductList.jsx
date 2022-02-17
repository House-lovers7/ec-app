import React, {useEffect} from 'react';
import { ProductCard } from "../components/Products";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../reducks/products/operations";
import { getProducts } from "../reducks/products/selectors";
import { useSelector } from "react-redux";

const ProductList = () => {
  const dispatch = useDispatch();
  const selector = useSelector( (state) => state);
  const products = getProducts(selector)

  useEffect( () => {
    dispatch(fetchProducts())
  }, [])

  return (
    <section className="c-section-wrapin">
      <div className="p-grid__row">
        {products.length > 0 && (
          products.map(product => (
            <ProductCard
            key = {product.id} id = {product.id} name = {product.name}
            images = {product.images} price= {product.price}
            />
          ))
        )}
      </div>
    </section>

  )

}

export default ProductList
