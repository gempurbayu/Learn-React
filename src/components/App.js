import React from "react";
import Header from "./Header";
import List from "./List";

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
    }

    render(){
        return (
            <div>
                <Header/>
                <List/>
                <h1>Hello Brooo!</h1>
                <h3>Judul : {this.state.name}</h3>
                <p>Author : {this.state.author}</p>
                <p>Category : {this.state.category.name}</p>
                {this.state.season.map(item => 
                    <div>
                        <h3>{item}</h3>
                    </div>    
                )}
            </div>
        )
    }
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