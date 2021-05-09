import { Component } from "react";
import Navbar from "../NavBar";
import SearchBox from "../SearchBox";
import EmployeeTable from "../EmployeeTable";
import Footer from "../Footer";
import API from "../../utils/API";

class Container extends Component {
  state = {
    employees: [],
    currentSort: "des",
    search: "",
    first_nameSort: "0",
    last_nameSort: "0",
    emailSort: "0",
    phoneSort: "0",
    dobSort: "0",
  };

  componentDidMount() {
    API.getRandomEmployee()
      .then((res) => {
        this.setState({ employees: res.data.results });
      })
      .catch((err) => console.log(err));
  }

  handleTableHeaderClick = async event => {
    event.preventDefault();

    let sortid = event.target.getAttribute("data-sortid");
    let propName = event.target.innerHTML.toLowerCase();
    propName = propName.split(" ", 1);
    propName = propName[0]
    let propName2 = '';
    let sortAsc = [];
    let sortDes = [];
    if (propName === "first" || propName === "last") {
      propName2 = propName;
      propName = "name";
    }
    switch (propName) {
      case "first":
      case "last":
        propName2 = propName;
        propName = "name";
        break;
      case "dob":
        propName2 = "date";
        break;
      default:
        break;
    }
    if (!propName2) {
      sortDes = [].concat(this.state.employees)
        .sort((a, b) => b[propName] > a[propName] ? 1 : -1);
      sortAsc = [].concat(this.state.employees)
        .sort((a, b) => a[propName] > b[propName] ? 1 : -1);
    } else {
      sortDes = [].concat(this.state.employees)
        .sort((a, b) => b[propName][propName2] > a[propName][propName2] ? 1 : -1);
      sortAsc = [].concat(this.state.employees)
        .sort((a, b) => a[propName][propName2] > b[propName][propName2] ? 1 : -1);
    }

    if (sortid === "0" || sortid === "-1") {
      sortid = "1"
    } else {
      sortid = "-1"
    }
    const sSortName = event.target.innerHTML.toLowerCase() + "Sort";
    switch (this.state.currentSort) {
      case "des":
        this.setState({ employees: sortAsc, currentSort: "asc", [sSortName]: sortid });
        break;
      case "asc":
        this.setState({ employees: sortDes, currentSort: "des", [sSortName]: sortid });
        break;
      default:
        console.log("Case - def");
        break;

    }
  }

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  render() {
    return (
      <div>
        <Navbar />
        <SearchBox />
        <EmployeeTable
          results={this.state.employees}
          handleTableHeaderClick={this.handleTableHeaderClick}
          first_nameSort={this.state.first_nameSort}
          last_nameSort={this.state.last_nameSort}
          emailSort={this.state.emailSort}
          phoneSort={this.state.phoneSort}
          dobSort={this.state.dobSort}
        />
        <Footer />
      </div>
    )
  }
}

export default Container;