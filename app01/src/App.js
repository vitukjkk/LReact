import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './assets/components/Header';
import Body from './assets/components/Body';
import Numero from './assets/components/Numero';
import Led from './assets/components/Led';
import Caixa from './assets/components/Caixa';
import Classe from './assets/components/Classe';
import ClasseCarro from './assets/components/ClasseCarro';  
import Globais from './assets/components/Globais';
import Pagina01 from './assets/components/Pagina01';
import Pagina02 from './assets/components/Pagina02';

export default function App() {
  const [num, setNum] = useState(0);
  const [ligado, setLigado] = useState(true);
  const [log, setLog] = useState(false);
  const comprimento = () => {
    const hora = new Date().getHours();
    if(hora >= 0 && hora < 13) {
      return <p>'Bom dia!'</p>;
    } else if (hora >= 13 && hora < 18) {
      return <p>'Boa tarde!'</p>;
    } else {
      return <p>'Boa noite!'</p>;
    }
  }

  const carros = [
    'HRV',
    'HB20s',
    'Uno',
    'Palio',
    'Dolphin',
    'SEAL'
  ]

  const listCar = carros.map(
    (c) => <li>{c}</li>
  )

  const [nome, setNome] = useState('');

  const handleChangeNome = (e) => {
    setNome(e.target.value);
  }

  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: ''
  });

  const handleFormChange = (e) => {
    if(e.target.getAttribute('name') === 'fnome') {
      setForm(nome = e.target.value, email = form.email, senha = form.senha);
    } else if(e.target.getAttribute('name') === 'femail') {
      setForm(nome = form.nome, email = e.target.value, senha = form.senha);
    } else if(e.target.getAttribute('name') === 'fsenha') {
      setForm(nome = form.nome, email = form.email, senha = e.target.value);
  }

  const [cont, setCont] = useState(0);

  useEffect(() => {
    document.title = 'Contagem: ' + cont;
  });

  localStorage.setItem('nome', 'CFB Cursos');
  localStorage.getItem('nome');
  localStorage.removeItem('nome');

  const [pag, setPag] = useState(0);

  const returnPage = () => {
      if(pag === 1) {
        return <Pagina01/>
      } else if(pag === 2) {
        return <Pagina02/>
      } else {
        return 
        <>
          <button onClick="">Página 01</button>
          <button onClick="">Página 02</button>
        </>
      }
  };

  useEffect(() => {
    () => {
      const url = window.location.href;
      const res = url.split('?');
    }
  });

  const linksPages = (pag) => {
    if(page === 1) {
      window.open('http://localhost:3000/pagina01', '_self');
    } else if(page === 2) {
      window.open('http://localhost:3000/pagina02', '_self');
    }
  }

  return (
    <>
      <Header/>
      <Body/>
      <p>Valor do state num: {num}</p>
      <button onClick={() => setNum(num + 100)}>Incrementar</button>
      <Numero num="20"/>
      <Led ligado={ligado} setLigado={setLigado}/>
      {comprimento()}
      <p>{log ? 'Logado!' : 'Favor logar!'}</p>
      <button onClick={() => setLog(!log)}>{log ? 'Logout' : 'Login'}</button>
      {listCar}
      <label>Digite seu nome</label>
      <input 
        onChange={(e) => handleChangeNome(e)} 
        value={nome}
        type="text" 
        name="fnome"/>
      <p>Nome digitado: {nome}</p>
      <label>Selecione um carro</label>
      <select value={carros}>
        <option value="HRV">HRV</option>
        <option value="HB20s">HB20s</option>
        <option value="Uno">Uno</option>
        <option value="Palio">Palio</option>
      </select>
      <label>Carro selecionado: {}</label>
      <label>Nome</label>
      <input 
        value={form.nome}
        onChange={(e) => handleFormChange(e)}
        name="fnome"/><br/>
      <label>Email</label>
      <input 
        value={form.email}
        onChange={(e) => handleFormChange(e)}
        name="femail"/><br/>
      <label>Senha</label>
      <input 
        value={form.senha}
        onChange={(e) => handleFormChange(e)}
        name="fsenha"/><br/>
    <div>
      <h1>CFB Cursos</h1>
      <p>Curso de React</p>
    </div>
    <Caixa site="saberevolve.com.br">
      <h1>CFB Cursos</h1>
      <p>Curso de React</p>
    </Caixa>
    <p>Contagem: {cont}</p>
    <button onClick={()=> setCont(cont + 1)}>Contar</button>
    <Classe canal="CFB Cursos"/>
    <ClasseCarro modelo="HB20s" fator={1}/>
    <p>{'Canal: '+ Globais.canal}</p>
    <p>{'Curso: '+ Globais.curso}</p>
    <p>{'Ano: '+ Globais.ano}</p>
    {/*oi*/}
    <button onClick="">Página 01</button>
    {returnPage()}
    </>
  )
}}