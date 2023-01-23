import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../constants/url";

import { useForm } from "../../hooks/useForm";
import { useRequestData } from "../../hooks/useRequestData";
import { goFinishedOrder } from "../../routes/coordinator";

export const Form = ({ productList, setProductList }) => {
  const navigate = useNavigate();
  const [visebleBottonClient, setVisibleButtonClient] = useState(true);
  const [visebleBottonProduct, setVisibleButtonProduct] = useState(true);
  const [form, onChange, restForm] = useForm({
    client: "",
    product: "",
    qty: 1,
    deliveryDate: "",
  });
  const [dataClient, isloadingClient, erroClient, upClient, setUpClient] =
    useRequestData(`${baseUrl}/clients`);
  const [dataProduct, isloadingProduct, erroProduct] = useRequestData(
    `${baseUrl}/products`
  );

  //Clients
  const selectClient =
    !isloadingClient &&
    !erroClient &&
    dataClient &&
    dataClient.find((dClient) => {
      return dClient.name === form.client;
    });

  const addClient = () => {
    const body = {
      name: form.client,
    };
    axios
      .post(`${baseUrl}/client`, body, {})
      .then((response) => {
        setUpClient(!upClient);
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const selectClientButton = () => {
    setVisibleButtonClient(!visebleBottonClient);
  };
  //Products
  const selectProduct =
    !isloadingProduct &&
    dataProduct &&
    dataProduct.find((dProduct) => {
      return dProduct.name === form.product;
    });

  const addProduct = () => {
    console.log(productList);
    const newProduct = selectProduct;
    newProduct.qty = form.qty;
    setProductList([...productList, newProduct]);
  };

  //Order
  const makeOrder = (e) => {
    e.preventDefault();
    if (!productList || !form.deliveryDate || !selectClient) {
      alert("Por favor, certifique-se de que preencheu os dados corretamente.");
    } else {
      const deliveryDateDb = `${form.deliveryDate.split("/")[2]}-${
        form.deliveryDate.split("/")[1]
      }-${form.deliveryDate.split("/")[0]}`;
      const productListDB = productList.map((p) => {
        return { id: p.id, qty: Number(p.qty) };
      });
      const body = {
        fk_client: Number(selectClient.id),
        delivery_date: deliveryDateDb,
        products: productListDB,
      };
      axios
        .post(`${baseUrl}/order`, body, {})
        .then((response) => {
          console.log(response);
          goFinishedOrder(navigate)
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };
  return (
    <form onSubmit={makeOrder}>
      {selectClient && !visebleBottonClient && (
        <div>
          <h1>Cliente:{selectClient.name}</h1>
        </div>
      )}
      {(selectClient && !visebleBottonClient) || (
        <div id="selec-client">
          <label htmlFor="client">Nome do Cliente </label>
          <input
            id="client"
            list="dataClient"
            name="client"
            onChange={onChange}
            value={form.client}
          ></input>
          <datalist id="dataClient">
            {isloadingClient && !dataClient && <option>Carregando..</option>}
            {!isloadingClient &&
              dataClient &&
              dataClient.map((client) => {
                return <option key={client.id}>{client.name}</option>;
              })}
          </datalist>
          {!selectClient && form.client.length > 2 && (
            <button
              type="button"
              onClick={() => {
                addClient();
              }}
            >
              Cadastar Cliente
            </button>
          )}

          {selectClient && visebleBottonClient && (
            <button
              type="button"
              onClick={() => {
                selectClientButton();
              }}
            >
              Confirmar
            </button>
          )}
        </div>
      )}

      

      {selectClient && !visebleBottonClient && (
        <div id="select-product">
          <label htmlFor="product">Produto: </label>
          <input
            id="product"
            list="dataProduct"
            name="product"
            value={form.product}
            onChange={onChange}
          ></input>
          <datalist id="dataProduct">
            {isloadingProduct && !dataProduct && <option>Carregando..</option>}
            {!isloadingProduct &&
              dataProduct &&
              dataProduct.map((product) => {
                return <option key={product.id}>{product.name}</option>;
              })}
          </datalist>
          <label htmlFor="qty">Quantidade:</label>
          <input
            id="qty"
            type={"number"}
            name="qty"
            value={form.qty}
            onChange={onChange}
          ></input>
          <p>
            R$:{" "}
            {selectProduct &&
              parseFloat(selectProduct.price * form.qty).toFixed(2)}
          </p>

          {selectProduct &&
            visebleBottonProduct &&
            selectProduct.qty_stock >= form.qty && (
              <button
                type="button"
                onClick={() => {
                  addProduct();
                }}
              >
                Adicionar
              </button>
            )}
          {selectProduct && selectProduct.qty_stock < form.qty && (
            <h3>Produto sem Estoque!</h3>
          )}
        </div>
      )}
      {productList.length > 0 && (
        <div id="order">
          <label htmlFor="deliveryDate">Data de entrega (DD/MM/AAAA) </label>
          <input
            id="deliveryDate"
            name="deliveryDate"
            onChange={onChange}
            value={form.deliveryDate}
          ></input>
          <button type="submit">Confirmar pedido</button>
        </div>
      )}
    </form>
  );
};
