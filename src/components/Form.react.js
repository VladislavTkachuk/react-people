import React from "react";

const Form = ({ firstNameValue, lastNameValue, phoneValue, isMaleValue, ageValue, onFirstNameChange,
                onLastNameChange, onPhoneChange, onGenderChange, onAgeChange, onAddPerson }) => (
  <div>
    <div className="form-group">
      <label>First Name:
        <input type="text" className="form-control" value={firstNameValue}
          required maxLength="30"
          onChange={onFirstNameChange} placeholder="Enter First Name..." />
      </label>
    </div>
    <div className="form-group">
      <label>Last Name:
        <input type="text" className="form-control" value={lastNameValue}
          required maxLength="30"
          onChange={onLastNameChange} placeholder="Enter Last Name..." />
      </label>
    </div>
    <div className="form-group">
      <label>Phone:
        <input type="tel" className="form-control" value={phoneValue}
          maxLength="10" required
          onChange={onPhoneChange} placeholder="0XXXXXXXXX" />
      </label>
    </div>
    <div className="form-group">
      <label>Select Gender:
        <select onChange={onGenderChange} className="form-control" value={(isMaleValue) ? "male" : "female"}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
    </div>
    <div className="form-group">
      <label>Age:
        <input type="number" className="form-control" value={ageValue || ""} required
          onChange={onAgeChange} placeholder="Enter Your Age..." />
      </label>
    </div>
    <button type="button" onClick={onAddPerson} className="btn btn-primary">Add Person</button>
  </div>
);

export default Form;
