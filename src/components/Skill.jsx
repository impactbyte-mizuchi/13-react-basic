import React from "react";
import todos from "../data/todos";

class Skill extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    {todos.map((element, index) => (
                        <li key={index}>{element.todo}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Skill;
