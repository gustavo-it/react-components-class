import React, { Component } from "react";

// Form
import { FaPlus } from 'react-icons/fa';

// Tarefas
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';

class Main extends Component {
    state = {
        novaTarefa: '',
        tarefas: []
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { tarefas } = this.state;
        let { novaTarefa } = this.state;
        novaTarefa = novaTarefa.trim(); // Elimina os espaços do começo e final

        if(tarefas.indexOf(novaTarefa) !== -1) return;
        if(novaTarefa.trim() === '') return;
        
        const novasTarefas = [...tarefas];
        // Não podemos alterar o nosso state, para isso vamos salva-las
        // em uma variável
        this.setState({
            tarefas: [...novasTarefas, novaTarefa],
        });
    }

    handleChange = (event) => {
        this.setState({
            novaTarefa: event.target.value,
        });
    };

    render() {
        const { novaTarefa, tarefas } = this.state;
        return (
            <div className="main">
                <h1>Lista de tarefas</h1>

                <form onSubmit={this.handleSubmit} className="form" action="#">
                    <input onChange={this.handleChange} 
                    type="text" 
                    value={novaTarefa}
                    />
                    <button type="submit">
                        <FaPlus />
                    </button>
                </form>

                <ul className="tarefas">
                    {tarefas.map(tarefa => (
                        <li key={tarefa}>
                            {tarefa}
                            <span>
                                <FaEdit className="edit" />
                                <FaWindowClose className="delete" />
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Main;