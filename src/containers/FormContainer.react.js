import React, { Component } from 'react';
import Form from "../components/Form.react";

export default class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phone: "",
      isMale: true,
      age: 0,
      isValidFN: false,
      isValidLN: false,
      isValidPhone: false,
      isValidAge: false
    }

    this.onFirstNameChange = this.onFirstNameChange.bind(this);
    this.onLastNameChange = this.onLastNameChange.bind(this);
    this.onPhoneChange = this.onPhoneChange.bind(this);
    this.onGenderChange = this.onGenderChange.bind(this);
    this.onAgeChange = this.onAgeChange.bind(this);
    this.onAddPerson = this.onAddPerson.bind(this);
  }

  onFirstNameChange(e) {
    let firstName = e.target.value;
    let reg = new RegExp("\\w{" + firstName.length + "}");

    if (reg.test(firstName) && firstName !== "") {
      e.target.style.backgroundColor = "white";
      this.setState({ firstName, isValidFN: true });
    } else {
      e.target.style.backgroundColor = "#F08080";
      this.setState({ firstName, isValidFN: false });
    }
  }

  onLastNameChange(e) {
    let lastName = e.target.value;
    let reg = new RegExp("\\w{" + lastName.length + "}");

    if (reg.test(lastName) && lastName !== "") {
      e.target.style.backgroundColor = "white";
      this.setState({ lastName, isValidLN: true });
    } else {
      e.target.style.backgroundColor = "#F08080";
      this.setState({ lastName, isValidLN: false });
    }
  }

  onPhoneChange(e) {
    let reg = new RegExp("0[0-9]{9}");

    if (reg.test(e.target.value)) {
      e.target.style.backgroundColor = "white";
      this.setState({ phone: e.target.value, isValidPhone: true });
    } else {
      e.target.style.backgroundColor = "#F08080";
      this.setState({ phone: e.target.value, isValidPhone: false });
    }

  }

  onGenderChange(e) {
    this.setState({ isMale: e.target.value === "male" });
  }

  onAgeChange(e) {
    let age = +e.target.value;

    if (age > 0 && age < 120) {
      e.target.style.backgroundColor = "white";
      this.setState({ age, isValidAge: true });
    } else {
      e.target.style.backgroundColor = "#F08080";
      this.setState({ age, isValidAge: false });
    }
  }

  onAddPerson() {
    let { firstName, lastName, phone, isMale, age,
          isValidFN, isValidLN, isValidPhone, isValidAge } = this.state;

    if (isValidFN && isValidLN && isValidPhone && isValidAge) {
      this.setState({ firstName: "", lastName: "", phone: "", isMale: true, age: 0,
                      isValidFN: false, isValidLN: false, isValidPhone: false, isValidAge: false});
      this.props.addPerson(firstName, lastName, phone, isMale, age);
    }
  }

  render() {
    return (
      <div className="col-sm-4 col-md-5">
      <form>
        <Form
          firstNameValue={this.state.firstName}
          lastNameValue={this.state.lastName}
          phoneValue={this.state.phone}
          isMaleValue={this.state.isMale}
          ageValue={this.state.age}
          onFirstNameChange={this.onFirstNameChange}
          onLastNameChange={this.onLastNameChange}
          onPhoneChange={this.onPhoneChange}
          onGenderChange={this.onGenderChange}
          onAgeChange={this.onAgeChange}
          onAddPerson={this.onAddPerson}
        />
      </form>
      </div>
    );
  }
}
