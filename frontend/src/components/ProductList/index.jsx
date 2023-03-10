import { Product } from "../Product";
import { AllProducts, TotalTitle } from "./styled";

export const ProductList = ({ productList, setProductList }) => {
  const removeProduct = (id) => {
    const newProductList = productList.filter((p) => {
      return p.id !== id;
    });
    setProductList(newProductList);
  };
  let sum = 0;
  if (productList.length > 0) {
    productList.forEach((p) => {
      sum = sum + p.price * p.qty;
    });
  }
  const renderProduct =
    productList &&
      productList.map((product) => {
        return (
          <Product
            key={product.id}
            product={product}
            productList={productList}
            setProductList={setProductList}
            removeProduct={removeProduct}
          />
        );
      });
  

  return (
    <AllProducts>
      {productList.length > 0 && <h2>Pedido:</h2>}
      <div>{renderProduct}</div>
      {productList.length > 0 && <TotalTitle>Total: R${sum.toFixed(2)}</TotalTitle>}
    </AllProducts>
  );
};
