import React, { useState } from "react";
import "./jumbotron.css";

function Jumbotron() {
    const [name, setName] = useState("Miftah");

    function handleClick() {
        setName("Sarah");
    }
    return (
        <div>
            <img
                src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg"
                alt="jumbotron"
            />
            <p>nama saya adalah {name}</p>
            <button onClick={handleClick}>Ubah</button>
        </div>
    );
}

export default Jumbotron; // nama fungsi
