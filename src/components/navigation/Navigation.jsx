import React from "react";
import "./navigation.css"

//class component

class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            about: "About",
            home: "Beranda",
            contact: "Contact",
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ home: "Home" });
    }

    render() {
        return (
            <div>
                <ul>
                    <li onClick={this.handleClick}>
                        ini adalah {this.state.home}
                    </li>
                    <li>ini adalah {this.state.about}</li>
                    <li>ini adalah {this.state.contact}</li>
                </ul>
            </div>
        );
    }
}

export default Navigation; // nama kelas
