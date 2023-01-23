import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import { goHome } from '../../routes/coordinator';



export default function FinishedOrder() {
  const navigate = useNavigate()
  setTimeout(() => {
    goHome(navigate)
  }, 2500);
  return (
    <>
      <Header />
      <div>
        <h1>Pedido Finalizado com Sucesso!</h1>
        <h2>Agradecemos a preferência. Volte sempre!</h2>
      </div>
    </>
  );
}