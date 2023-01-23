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
    <div>
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
      <p>{parseFloat(product.price * product.qty).toFixed(2)}</p>
      <button
        type="button"
        onClick={() => {
          removeProduct(product.id);
        }}
      >
        Remover
      </button>
    </div>
  );
};