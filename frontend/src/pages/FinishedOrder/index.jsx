import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import { goHome } from '../../routes/coordinator';
import { Main } from './styled';



export default function FinishedOrder() {
  const navigate = useNavigate()
  setTimeout(() => {
    goHome(navigate)
  }, 3500);
  return (
    <>
      <Header />
      <Main>
        <h1>Pedido Finalizado com Sucesso!</h1>
        <h3>Agradecemos a preferência. Volte sempre!</h3>
        <span>Você será redirecionado à página inicial em breve.</span>
      </Main>
    </>
  );
}