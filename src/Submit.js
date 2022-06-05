import React,{Component} from 'react'

class Submit extends Component{
  render(props){
    return(
      <div id="secondary-display">
        <h3>Hello {this.props.fname} {this.props.lname} </h3>
        <p><b>First Name:</b> &nbsp; {this.props.fname}</p>
        <p><b>Last Name:</b> &nbsp; {this.props.lname}</p>
        <p><b>User-Email:</b> &nbsp; {this.props.email}</p>
        <p id="sub-pswd"><b>Password:</b> &nbsp; {this.props.pswd}</p>
        <p><b>Date of birth:</b> &nbsp; {this.props.dob}</p>
        <p><b>Gender:</b> &nbsp; {this.props.gender}</p>
        <p><b>Mobile:</b> &nbsp; {this.props.mobile}</p>
        <p><b>No.of persons:</b> &nbsp; {this.props.nop}</p>
        <p><b>Id's:</b> &nbsp; {this.props.id}</p>
        <p><b>Type of Beds:</b> &nbsp; {this.props.beds}</p>
        <p><b>Food Required:</b> &nbsp; {this.props.food}</p>
      </div>
    )
  }
}
export default Submit;