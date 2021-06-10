import React, { useEffect, useState } from "react";
import Col from '../../components/Col';
import Card from '../../components/Card'
import API from "../../utils/API";
import ProductContext from "../../utils/ProductContext";

const Clothing = () => {

    const [productState, setProductState] = useState({
        title: "",
        price: 0,
        image: "",
        description: "",
        stock: 0,
        tags: [],
        category: ""
      })
      
      useEffect(() => {
        API.getCatProducts("60be230cdc1a3960d338ec17")
        .then((res) => {
          console.log(res.data);
          console.log(res.data[0]);
          var featuredProducts = [];
          for (var i = 0; i < res.data.length; i++) {
            featuredProducts.push(res.data[i]);
          }
          setProductState(featuredProducts)
        });
      }, []);


      return (
        <ProductContext.Provider value={productState}>
                <Col size='md-6'>
                </Col>
                  {productState.length ? productState.map((product,i) => (
                    <Card
                    key={i}
                    {... product}
                    />
                )) : "There are no products available :( "}

        </ProductContext.Provider>
    )
}

export default Clothing;