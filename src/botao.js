import React, {useState} from "react";
import './botaoAlternador.css';

function botaoAlternador(){
    const [estado, setEstado] = useState("Desligado");
    const alternarEstado = () =>{
        setEstado(estado === "Ligado" ? "Desligado": "Ligado");
    };
    return (
        <div>
            <Button>
                onClick = {alternarEstado}
                className = {estado === "Ligado" ? "ligado" : "desligado"} {estado}
            </Button>
        </div>
    )
}

export default botaoAlternador