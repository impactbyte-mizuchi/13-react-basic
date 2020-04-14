import React, { Fragment } from "react";
import Navigation from "./components/navigation/Navigation";
import Jumbotron from "./components/jumbotron/Jumbotron";
import Skill from "./components/Skill";
import Card from "./components/Card";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <Fragment>
            <div>
                <Navigation />
                <Jumbotron />
                <button>Ubah</button>
                <p>Hello World</p>
                <p>Nama saya miftah</p>
            </div>
            <div>
                <Skill />
                <Card />
            </div>
        </Fragment>
    );
}

export default App;

// class component
// 1. ada render
// 2. bisa menggunakan state
// 3. bisa membuat sebuah fungsi, arrow function, function namaFungsi()
// 4. harus bind sebuah fungsi event handler, jika tidak menggunakan arrow function

// function component
// 1. tidak ada render
// 2. bisa menggunakan hooks
// 3. bisa membuat sebuah fungsi, function namaFungsi()
