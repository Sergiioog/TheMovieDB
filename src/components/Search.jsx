import { useState } from "react";

/*
function Search() {
    const [text,setText] = useState("Hola React");
    //Variable text y setText para ponerlo
    return (
        <div>
            <h1>{text}</h1>
            <button onClick={ () => setText("Bienvenido a React") }>CLICK</button>
        </div>
    )
}
*/


export default function Search() {
    const [value, setValue] = useState("");

    //1. Capturar el evento
    const buscar = (e) => setValue(e.target.value); //Coges el valor del evento
    const url = "/results/" //Ruta dinamica a la carpeta resultados

    return (
        <div>
            <center>
                <h1 class="mt-5">Search Movies</h1>
                <form action= {url + value} method="POST">
                    <input type="search"
                    class="form-control p-3" value={value} onChange={buscar} placeholder="Search" >

                    </input>
                </form>
            </center>
        </div>
    )



}