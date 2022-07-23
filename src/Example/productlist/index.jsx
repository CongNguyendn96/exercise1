import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

Products.propTypes = {
    products: PropTypes.array.isRequired,
    product: PropTypes.object.isRequired,
};

function Products(props) {
  const products = [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1615228939096-9ead6c74008e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80",
      name: "Mercedes-Benz",
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1619362280286-f1f8fd5032ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJtd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "BMW",
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1612825173281-9a193378527e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGxhbWJvcmdoaW5pfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Lamborghini",
    },
    {
      id: 4,
      imageUrl: "https://images.unsplash.com/photo-1612997951749-ae9c3fffaef3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGF1ZGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      name: "Audi",
    },
    {
      id: 5,
      imageUrl: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmVycmFyaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      name: "Ferarri",
    },
    {
      id: 6,
      imageUrl: "https://images.unsplash.com/photo-1594502184342-2e12f877aa73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9yY2hlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Porsche",
    }
  ];
  return (
    <div className="product">
      <h1>BEST SELLER PRODUCT</h1>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <div className="product-wrap">
              <div className="product__image">
                <img src={product.imageUrl} alt={product.name} />
              </div>
              <p className="product__name">{product.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Products;