import React, { useState } from 'react';

function Count() {
    const [contador, setContador] = useState(0);

  
    const Acrescentar = () => setContador(contador + 1);

    
    const Decrementar = () => {
        if (contador > 0) {
            setContador(contador - 1);
        }
    };

    return (
        <div>
            <p>A corrente do contador é: {contador}</p>
            <button onClick={Acrescentar}>+1</button>
            <button onClick={Decrementar}>-1</button>
        </div>
    );
}

export default Count;