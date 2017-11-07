import React from "react";

const TableHeader = (props) => (
  <thead className="thead-dark">
    <tr style={{cursor: "pointer"}}>
      <th onClick={(e) => props.sortByProperty(e, "firstName")}>Firts Name</th>
      <th onClick={(e) => props.sortByProperty(e, "lastName")}>Last Name</th>
      <th onClick={(e) => props.sortByProperty(e, "phone")}>Phone</th>
      <th onClick={(e) => props.sortByProperty(e, "isMale")}>Gender</th>
      <th onClick={(e) => props.sortByProperty(e, "age")}>Age</th>
    </tr>
  </thead>
);

export default TableHeader;
