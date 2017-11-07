import React, { Component } from 'react';
import FormContainer from "./FormContainer.react";
import Table from "../components/Table.react";

import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: (localStorage.people) ? JSON.parse(localStorage.people) : []
    }
    this.addPerson = this.addPerson.bind(this);
    this.sortByProperty = this.sortByProperty.bind(this);
    this.deletePersonById = this.deletePersonById.bind(this);
  }


  addPerson(firstName, lastName, phone, isMale, age) {
    this.setState({ people: [...this.state.people, { id: Date.now(), firstName, lastName, phone, isMale, age }] });
  }

  deletePersonById(e, id) {
    let people = this.state.people.filter((person) => person.id !== id);
    this.setState({ people });
  }

  componentDidUpdate() {
    localStorage.people = JSON.stringify(this.state.people);
  }

  sortByProperty(e, propName) {
    if (propName === "age") {
      let people = [...this.state.people].sort((a,b) => a[propName] - b[propName]);
      this.setState({ people });
    } else {
      let people = [...this.state.people].sort((a,b) => (a[propName] > b[propName]) ? 1 : -1);
      this.setState({ people });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Table sortByProperty={this.sortByProperty}
                  deletePersonById={this.deletePersonById}
                  people={this.state.people} />
          <FormContainer addPerson={this.addPerson} />
        </div>
      </div>
    );
  }
}

export default App;
