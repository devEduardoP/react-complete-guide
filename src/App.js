import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';



class App extends Component {

  state = {
    persons: [
      {id: 1, name : "Abraham", age: 31},
      {id: 2, name : "Alejandra", age: 30},
      {id: 3, name : "Ernesto", age: 28}
    ],
    showPersons: false
  }
  

  nameChangeChandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    })
  }

   togglePersonHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons:!doesShow});
  }

  deletePersonHandler = (personIndex) => {
   const persons = [...this.state.persons];
   persons.splice(personIndex,1);
   this.setState({persons: persons});
  }

  

  

  render() {
    let classButton = "";
    let persons = null;
    

    if(this.state.showPersons){
      persons = (
      <div>
      {this.state.persons.map(
        (person , index) => {
          return <Person
          click = {() => this.deletePersonHandler(index)}
           name = {person.name} 
           age = {person.age}
           key= {person.id} 
           changed = {(event) => this.nameChangeChandler(event,person.id)}
           />
        })}  
      </div>
      );
      classButton = "button";
    }
    else{
      classButton = "buttonRed";
    }


    let classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }

    if(this.state.persons.length <= 1){
      classes.push('bold');
    }

  return (  
    
    <div className="App">
      <h1>Hi I'm Eduardo, I'm learning React</h1>
      <p className = {classes.join(' ')}>This is really working</p>
      <button className = {classButton} onClick= {this.togglePersonHandler}>Show persons</button>
      {persons} 
    </div>

    );
  }
}

export default App;
