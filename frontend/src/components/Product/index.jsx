import { ButtonRemove, Card } from "./styled";

export const Product = ({
  product,
  productList,
  setProductList,
  removeProduct,
}) => {
  const updateQuantity = (e) => {
    console.log(product.qty_stock);
    const currenQty = e.target.value;
    const productsUpdate = productList.map((p) => {
      if (p.id === product.id) {
        p.qty = currenQty;
      }
      return p;
    });
    setProductList(productsUpdate);
  };
  return (
    <Card>
      <p>{product.name}</p>
      <input
        id="qty"
        type={"number"}
        name="qty"
        min="0"
        max={product.qty_stock.toString()}
        value={product.qty}
        onChange={updateQuantity}
      ></input>
      <p>Valor: R${parseFloat(product.price * product.qty).toFixed(2)}</p>
      <ButtonRemove
        type="button"
        onClick={() => {
          removeProduct(product.id);
        }}
      >
        Remover
      </ButtonRemove>
    </Card>
  );
};
