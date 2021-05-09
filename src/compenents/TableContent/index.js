import React from "react";

function TableContent(props) {
    return (
        <tbody>
        <tr>
          <td className="image text-center"><img alt={props.alt} src={props.src} className="img-fluid" /></td>
          <td className="name text-center pt-4">{props.firstName} {props.lastName}</td>
          <td className="email text-center pt-4">{props.emailAddress}</td>
          <td className="phone text-center pt-4">{props.phoneNumber}</td>
          <td className="dob text-center pt-4">{props.dob}</td>
        </tr>
      </tbody>
    )
}

export default TableContent;