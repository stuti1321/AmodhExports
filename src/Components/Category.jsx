import React, { useState } from 'react';
import '../styles/Product.scss';
import products from '../Components/Product';
import ProductCard from '../Components/ProductCard';
import CategoryFilter from './CategoryFilter';
import collect from "../Assets/prayer.png"
import divider from "../Assets/dividerf.png"
import Whatsapp from './Whatsapp';

function Category() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="productapp">
        <div className="paralles">
          <h2>Visit our Collection</h2>
            
     </div>
<Whatsapp/>
     <div className="iconcol"><img src={collect} alt="" /></div>
     <CategoryFilter
        categories={['All', 'Abstract Collection', 'Durry Collection',"Handknotted Collection","Handloom Viscose Collection",'Hi-Low Collection','Jacquard Collection','Jute Collection','Kelims Collection','Leather Collection','Moroccan Collection','Print Collection','Sari Silk Collection','Tibetan Collection','Vintage Collection','Stools/Poufs','Cushions']} // Add your categories here
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      
      
      <div className="product-list">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
    </div>
  );
}

export default Category;