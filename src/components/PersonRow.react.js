import React from "react";

const PersonRow = ({ deletePersonById, person }) => (
    <tr>
      <td>{person.firstName}</td>
      <td>{person.lastName}</td>
      <td>{person.phone}</td>
      <td>{ (person.isMale) ? "male" : "female" }</td>
      <td>{person.age}</td>
      <td><button type="button" className="btn btn-link"
                  onClick={(e) => deletePersonById(e, person.id)}>
                  X</button></td>
    </tr>
);

export default PersonRow;
