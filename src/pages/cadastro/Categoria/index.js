import React, { useState } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";

function CadastroCategoria() {

    const [categorias, setCategoria] = useState([])

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '#000',
    }

    const [values, setValues] = useState(valoresIniciais);

    function setValue(nome, valor) {
        setValues({
            ...values,
            [nome]: valor
        })
    }

    function handleChange(event) {

        setValue(
            event.target.getAttribute('name'),
            event.target.value
        )
    }
    /*Era pra funcionar
    function handleChange(event) {

        const { getAttribute, value } = event.target

        setValue(
            getAttribute('name'),
            value
        )
    }
    */

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>
            <form onSubmit={e => {
                e.preventDefault()
                setCategoria([...categorias, values])
                setValues(valoresIniciais)
            }}>
                <label>Nome da Categoria
                <input
                        type="text"
                        value={values.nome}
                        name="nome"
                        onChange={handleChange}
                    />
                </label>

                <label>Descrição
                <textarea
                        value={values.descricao}
                        name="descricao"
                        onChange={handleChange}
                    />
                </label>

                <label>Cor
                <input
                        type="color"
                        value={values.cor}
                        name="cor"
                        onChange={handleChange}
                    />
                </label>
                <button>Cadastrar</button>
            </form>
            <ul>
                {categorias.map((categoria, index) => {

                    return (
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
                    )
                })}
            </ul>
            <Link to="/">
                Ir para a home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria