import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const [categorias, setCategoria] = useState([]);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#2a7ae4',
  };

  const [values, setValues] = useState(valoresIniciais);

  function setValue(nome, valor) {
    setValues({
      ...values,
      [nome]: valor,
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setValue(
      name,
      value,
    );
  }

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://videoflix-renatobmpsilva.herokuapp.com/categorias';
    fetch(URL)
      .then(async (res) => {
        const resposta = await res.json();
        setCategoria([...resposta]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        setCategoria([...categorias, values]);
        setValues(valoresIniciais);
      }}
      >
        <FormField
          label="Nome da categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
          as="textarea"
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />
        <Button>
          Cadastrar
        </Button>
      </form>
      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}
      <ul>
        {categorias.map((categoria, index) => (
          <li key={index} style={{ backgroundColor: `${categoria.cor}` }}>
            <div key={`${categoria.nome}${index}`}>
              {categoria.nome}
            </div>
            <div key={`${categoria.descricao}${index}`}>
              {categoria.descricao}
            </div>
            <div key={`${categoria.cor}${index}`}>
              {categoria.cor}
            </div>
          </li>
        ))}
      </ul>
      <Link to="/">
        Ir para a home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
