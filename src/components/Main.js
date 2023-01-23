import React, { Component } from "react";

// Form
import { FaPlus } from 'react-icons/fa';

// Tarefas
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';

class Main extends Component {
    state = {
        novaTarefa: '',
        tarefas: [],
        index: -1, // se for -1 quer dizer que estou criando coisas
        // se for diferente de -1 quer dizer que estou editando algo
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { tarefas, index } = this.state;
        let { novaTarefa } = this.state;
        novaTarefa = novaTarefa.trim(); // Elimina os espaços do começo e final

        if(tarefas.indexOf(novaTarefa) !== -1) return;
        if(novaTarefa.trim() === '') return;
        
        const novasTarefas = [...tarefas];

        if(index === -1) {
            this.setState({
                tarefas: [...novasTarefas, novaTarefa],
                novaTarefa: '',
            });
        } else {
            novasTarefas[index] = novaTarefa;

            this.setState({
                tarefas: novasTarefas,
                index: -1,
            });
        }

    }

    handleChange = (event) => {
        this.setState({
            novaTarefa: event.target.value,
        });
    };

    handleEdit = (event, index) => {
        const { tarefas } = this.state;

        this.setState({
            index: index,
            novaTarefa: tarefas[index],
        });
    } 

    handleDelete = (event, index) => {
        const { tarefas } = this.state;
        const novasTarefas = [...tarefas];
        novasTarefas.splice(index, 1);

        this.setState({
            tarefas: [...novasTarefas],
        });
    }

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
                    {tarefas.map((tarefa, index) => (
                        <li key={tarefa}>
                            {tarefa}
                            <span>
                                <FaEdit 
                                onClick={(event) => this.handleEdit(event, index)} 
                                className="edit" />

                                <FaWindowClose 
                                onClick={(event) => this.handleDelete(event, index)} 
                                className="delete" />
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Main;