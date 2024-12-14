import React, { useState } from 'react';

function ListaDeTarefas() {
    // Estado para armazenar o valor do campo de texto
    const [tarefa, setTarefa] = useState('');

    // Estado para armazenar a lista de tarefas
    const [tarefas, setTarefas] = useState([]);

    // Função para adicionar uma tarefa à lista
    const adicionarTarefa = () => {
        if (tarefa) {
            setTarefas([...tarefas, tarefa]); // Adiciona a nova tarefa
            setTarefa(''); // Limpa o campo de texto
        }
    };

    // Função para remover uma tarefa da lista
    const removerTarefa = (tarefaRemovida) => {
        setTarefas(tarefas.filter(tarefa => tarefa !== tarefaRemovida));
    };

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <input
                type="text"
                value={tarefa}
                onChange={(e) => setTarefa(e.target.value)} // Atualiza o valor do campo
                placeholder="Digite uma tarefa"
            />
            <button onClick={adicionarTarefa}>Adicionar</button>
            <ul>
                {tarefas.map((tarefa, index) => (
                    <li key={index} onClick={() => removerTarefa(tarefa)} style={{ cursor: 'pointer' }}>
                        {tarefa}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaDeTarefas;
