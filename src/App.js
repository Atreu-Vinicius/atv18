import React, { useState, useRef, createContext, useContext } from 'react';
import './App.css'; // Se você quiser adicionar estilos personalizados

// Exercício 1: Foco em um Input
const FocusInput = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h3>Exercício 1: Foco em um Input</h3>
      <input ref={inputRef} type="text" placeholder="Digite algo..." />
      <button onClick={focusInput}>Focar no input</button>
    </div>
  );
};

// Exercício 2: Controlando um Cronômetro
const Cronometro = () => {
  const [segundos, setSegundos] = useState(0);
  const intervaloRef = useRef(null);

  const iniciar = () => {
    if (!intervaloRef.current) {
      intervaloRef.current = setInterval(() => {
        setSegundos((prevSegundos) => prevSegundos + 1);
      }, 1000);
    }
  };

  const pausar = () => {
    clearInterval(intervaloRef.current);
    intervaloRef.current = null;
  };

  const resetar = () => {
    clearInterval(intervaloRef.current);
    intervaloRef.current = null;
    setSegundos(0);
  };

  return (
    <div>
      <h3>Exercício 2: Controlando um Cronômetro</h3>
      <p>Tempo: {segundos} segundos</p>
      <button onClick={iniciar}>Iniciar</button>
      <button onClick={pausar}>Pausar</button>
      <button onClick={resetar}>Resetar</button>
    </div>
  );
};

// Exercício 3: Contexto de Tema
const TemaContext = createContext();

const TemaProvider = ({ children }) => {
  const [tema, setTema] = useState('claro');

  const alternarTema = () => {
    setTema((prevTema) => (prevTema === 'claro' ? 'escuro' : 'claro'));
  };

  return (
    <TemaContext.Provider value={{ tema, alternarTema }}>
      {children}
    </TemaContext.Provider>
  );
};

const TemaExibido = () => {
  const { tema } = useContext(TemaContext);
  return <p>Tema atual: {tema}</p>;
};

const AlternarTema = () => {
  const { alternarTema } = useContext(TemaContext);
  return <button onClick={alternarTema}>Alternar Tema</button>;
};

// Componente principal
const App = () => {
  return (
    <div>
      <TemaProvider>
        <h2>React Exercícios</h2>
        <FocusInput />
        <Cronometro />
        <div>
          <h3>Exercício 3: Contexto de Tema</h3>
          <TemaExibido />
          <AlternarTema />
        </div>
      </TemaProvider>
    </div>
  );
};

export default App;
