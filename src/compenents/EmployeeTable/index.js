import React from "react";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import TableContent from "../TableContent";
import "./style.css";

function EmployeeTable(props) {
  return (
    <table className="table table-striped mt-5">
      <thead>
        <tr>
          <th scope="col" className="text-center"><button className="btn font-weight-bold shadow-none" disabled>Image</button></th>
          <th scope="col" className="text-center"><button data-sortid={props.first_nameSort} onClick={props.handleTableHeaderClick} className="btn font-weight-bold shadow-none">First Name</button>{props.first_nameSort === "1" ? <FaChevronUp /> : <FaChevronDown />}</th>
          <th scope="col" className="text-center"><button data-sortid={props.last_nameSort} onClick={props.handleTableHeaderClick} className="btn font-weight-bold shadow-none">Last Name</button>{props.last_nameSort === "1" ? <FaChevronUp /> : <FaChevronDown />}</th>
          <th scope="col" className="text-center"><button data-sortid={props.emailSort} onClick={props.handleTableHeaderClick} className="btn font-weight-bold shadow-none">Email</button>{props.emailSort === "1" ? <FaChevronUp /> : <FaChevronDown />}</th>
          <th scope="col" className="text-center"><button data-sortid={props.phoneSort} onClick={props.handleTableHeaderClick} className="btn font-weight-bold shadow-none">Phone</button>{props.phoneSort === "1" ? <FaChevronUp /> : <FaChevronDown />}</th>
          <th scope="col" className="text-center"><button data-sortid={props.dobSort} onClick={props.handleTableHeaderClick} className="btn font-weight-bold shadow-none">DOB</button>{props.dobSort === "1" ? <FaChevronUp /> : <FaChevronDown />}</th>
        </tr>
      </thead>
      {props.results.map((result, index) => (
        <TableContent
          key={index}
          alt={result.name.first + result.name.last}
          src={result.picture.thumbnail}
          firstName={result.name.first}
          lastName={result.name.last}
          phoneNumber={result.phone}
          emailAddress={result.email}
          dob={result.dob.date.substring(0, 10)} />
      ))
      }
    </table>
  )
}

export default EmployeeTable;