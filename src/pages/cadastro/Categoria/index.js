import React, { useState } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";
import FormField from "../../../components/FormField";

function CadastroCategoria() {

    const [categorias, setCategoria] = useState([])

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '#2a7ae4',
    }

    const [values, setValues] = useState(valoresIniciais);

    function setValue(nome, valor) {
        setValues({
            ...values,
            [nome]: valor
        })
    }

    function handleChange(event) {

        const { name, value } = event.target;

        setValue(
            name,
            value
        );
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