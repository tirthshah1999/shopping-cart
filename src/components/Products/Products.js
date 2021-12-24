import React from "react";
import styles from "./Products.module.css";
import { connect } from "react-redux";
import Product from "./Product/Product";

const Products = ({products}) => {     // get a prop from below
  return (
    <div className={styles.products}>
      {products.map((product) => (
        <Product key={product.id} product={product} />  
      ))}
    </div>
  );
};

// Get products from store. Here state will get from connect method and also we are returning an object inside this so next component that is mention inside connect i.e. Products will get this object as a prop
const mapStateToProps = (state) => {
  return{
    products: state.products
  }
}

export default connect(mapStateToProps)(Products);