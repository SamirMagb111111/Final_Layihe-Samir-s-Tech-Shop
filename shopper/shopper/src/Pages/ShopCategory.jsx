import React, { useContext, useState } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [sortCriteria, setSortCriteria] = useState("");
  const [visibleProducts, setVisibleProducts] = useState(12); 
  const [searchTerm, setSearchTerm] = useState(""); 

  // sort ucun
  const handleSortChange = (criteria) => {
    setSortCriteria(criteria);
  };

  // axtaris ucun
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  
  const loadMoreProducts = () => {
    setVisibleProducts(prevVisible => prevVisible + 12);
  };

  
  const filteredAndSortedProducts = [...all_product]
    .filter(item => item.category === props.category)
    .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())) 
    .sort((a, b) => {
      if (sortCriteria === "price_asc") {
        return a.new_price - b.new_price;
      } else if (sortCriteria === "price_desc") {
        return b.new_price - a.new_price;
      } else if (sortCriteria === "size") {
        return a.size.localeCompare(b.size);
      } else {
        return 0;
      }
    });

  return (
    <div className='shop-category'>
      <h1>You can also have your ad here:</h1>
      <a href="https://www.trendyol.com/butik/liste/101496/az-rbaycan" target="_blank">
      <img className='shopcategory-banner' src={props.banner} alt="" />
  
</a>
      <div className="shopcategory-indexSort">
        <p>
          <span> Showing 1-12</span>
        </p>
        <div className="shopcategory-sort">
          <input className='search-input' type="text" placeholder="Search..." value={searchTerm} onChange={handleSearchChange} />
          <select onChange={(e) => handleSortChange(e.target.value)}>
            <option value="">Select</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
          </select>
        </div>
      </div>
      <div className="shopcategory-products">
        {filteredAndSortedProducts.slice(0, visibleProducts).map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
      {visibleProducts < filteredAndSortedProducts.length && (
        <div className="shopcategory-loadmore">
          <button onClick={loadMoreProducts}>Explore More</button>
        </div>
      )}
    </div>
  );
};

export default ShopCategory;