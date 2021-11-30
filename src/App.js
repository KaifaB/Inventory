import React from 'react'

import Item from "./Components/Item"

import Data from './Data/ItemData'

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
      move: false,
      resize: '',
      delete: 'display-none'
    };
  }

  componentDidUpdate(){

  }

  render() {
    //function to change color of nav on click
    const activate = (e) =>{
      const navArray = document.querySelectorAll(".nav-item")
      navArray.forEach((curr) =>{
          curr.classList.remove("nav-active")
      })
      e.target.classList.add("nav-active")
    }
    //function to give item boxes initial properties upon each nav click
    const reg = () => {
      const allEditors = document.querySelectorAll(".size")
      allEditors.forEach((curr) =>{
          curr.classList.remove("show")
      })
      this.setState({ disabled: true })
      this.setState({ resize: '' })
      this.setState({ delete: 'display-none' })
    }


    const normal = (e) => {
      activate(e)
      reg()
    }
    
    const edit = (e) => {
      activate(e)
      reg()
      this.setState({ disabled: false })
    }

    const move = (e) => {
      reg()
      activate(e)
      this.setState({ move: true })
    }

    const resize = (e) => {
      reg()
      activate(e)
      this.setState({ resize: 'show' })
    }

    const del = (e) => {
      reg()
      activate(e)
      this.setState({ delete: 'delete' })
    }

    return(
      <div className="App">
        <div className="nav">
            <ul>
                <li className="nav-item nav-active" onClick={normal}>Visual</li>
                <li className="nav-item" onClick={edit}>Edit</li>
                <li className="nav-item" onClick={move}>Move</li>
                <li className="nav-item" onClick={resize}>Resize</li>
                <li className="nav-item" onClick={del}>Delete</li>
            </ul>
        </div>
        <div className="grid">
          {Data.map((curr, key) =>{
            return(
              <Item
              disabled={this.state.disabled}
              move={this.state.move}
              resize={this.state.resize}
              delete={this.state.delete}
              style = {{ gridColumn: (key+1)%5, gridRow: key }}
              row={curr.width}
              />
            )
        })}
        </div>
      </div>
    );
  }
}

export default App;
