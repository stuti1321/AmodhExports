import React from "react";
import Category from "./Category";
import products from "./Product";
function featuredproduct(props) {
    const [products, setproducts] = usestate([]);
  
    useeffect(() => {
      fetchproducts();
    }, []);
  
    function fetchproducts() {
      axios
        .get("https://shoppingapiacme.herokuapp.com/shopping")
        .then((res) => {
          console.log(res);
          setproducts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    return (
      <div>
        <h1> your products list is shown below:</h1>
        <div classname="item-container">
          {products.map((product) => (
            <div classname="card" key={product.id}>
              <h3>{product.item}</h3>
              <p>
                {product.city}, {product.state}
              </p>
              <link to={`/product/${product.id}`}>more details</link>
            </div>
          ))}
        </div>
        <switch>
          <route
            path="/product/:id"
            render={({ match }) => (
              <productdetails
                product={products.find(
                  (product) => string(product.id) === match.params.id
                )}
              />
            )}
          />
        </switch>
      </div>
    );
  }