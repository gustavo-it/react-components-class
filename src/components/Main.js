import React, { Component } from "react";

// Form
import { FaPlus } from 'react-icons/fa';

import './Main.css';

class Main extends Component {
    state = {
        novaTarefa: '',
    };

    handleChange = (event) => {
        this.setState({
            novaTarefa: event.target.value,
        });
    };

    render() {
        const { novaTarefa } = this.state;
        return (
            <div className="main">
                <h1>Lista de tarefas</h1>
                <form className="form" action="#">
                    <input onChange={this.handleChange} 
                    type="text" 
                    value={novaTarefa}
                    />
                    <button type="submit">
                        <FaPlus />
                    </button>
                </form>
            </div>
        );
    }
}

export default Main;