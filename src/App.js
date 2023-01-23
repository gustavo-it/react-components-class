import React from "react";
// Sempre que criarmos um componente react precisamos importar o react
// Mesmo que você não utilize o componente dentro do arquivo.

// Vamos fazer um componente sem estado, que é um componente
// que sem estado. Ele é uma função normal que retorna um jsx.
// jsx é igual a html, é o jsx que o react utiliza.

// Para utulizar o arquivo App.css precisamos importa-lo em nosso código
// Importar em nossos componentes
import "./App.css"

function App() {
  return <h1>Hello world!</h1>
}

export default App;