import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Link to={`/category/${product.category}`} className="disabledCursor" onClick={ (event) => event.preventDefault() }>
        <div
          className="image-container"
          style={{ backgroundImage: `url(${product.image})` }}
        >
          <div className="image-hover" style={{ backgroundImage: `url(${product.hoverImage})` }}></div>
        </div>
      </Link>
      
      <h3>{product.name}</h3>
      
    </div>
  );
}
export default ProductCard;