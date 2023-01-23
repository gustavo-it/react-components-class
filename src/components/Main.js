import React, { Component } from "react";
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
                <form onChange={this.handleChange} action="#">
                    <input type="text" />
                    <button type="submit">Enviar</button>
                </form>
            </div>
        );
    }
}

export default Main;