import React from "react";
import Header from "./Header";
import List from "./List";
import Button from "./Button";
import "../styles/App.css";

//component dengan class
class App extends React.Component {

    //deklarasi state
    state = {
        name:"whoos child is this?",
        author: "Gempoer",
        category : {
            name : "Science"
        },
        season : ["season 1", "season 2", "season 3"],
        text : "waw",
    }

    click = () => {
        this.setState({
            name : this.state.text
        })
        this.setState({
            text : ""
        })
    }

    change = e => {
        this.setState({
            text: e.target.value
        })
    }

    render(){
        return (
            <div className="box">
                <Header/>
                <List name="Daftar" book={this.state.name}>This is my list</List>
                <h1 style={{ color:"blue"}}>Hello Brooo!</h1>
                <input type="text" value={this.state.text} onChange={this.change}/>
                <button onClick={this.click}>Click</button>
                <h3 style={mystyle}>Judul : {this.state.name}</h3>
                <p>Author : {this.state.author}</p>
                <p>Category : {this.state.category.name}</p>
                {this.state.season.map(item => 
                    <div>
                        <h3>{item}</h3>
                    </div>    
                )}

                <Button color="merah"/>
            </div>
        )
    }
}

const mystyle = {
    color : "red",
    fontWeight : "bold",
}


//component dengan function
/*const App = () => {
    return(
        <div>
            <h1>Hello Broook</h1>
        </div>
    )
}*/

export default App;