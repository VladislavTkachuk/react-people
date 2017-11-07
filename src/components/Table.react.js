import React from "react";
import TableHeader from "./TableHeader.react";
import PersonRow from "./PersonRow.react";


const Table = (props) => (
  <div className="col-sm-8 col-md-7 table-responsive">
  <table className="table table-bordered table-hover">
    <TableHeader sortByProperty={props.sortByProperty} />
    <tbody>
      {
        props.people.map((person) => (
          <PersonRow key={person.id} person={person} deletePersonById={props.deletePersonById} />
        ))
      }
    </tbody>
  </table>
  </div>
)

export default Table;
