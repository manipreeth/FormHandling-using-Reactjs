import React,{Component} from 'react'
import Submit from './Submit'

class Form extends Component{

  constructor(){
    super()
    this.state ={
      fname:'',
      lname:'',
      email:'',
      pswd:'',
      dob:'',
      gender:'',
      mobile:'',
      nop:'',
      id:'',
      beds:'',
      food:'',
      submission: false
    }}

  handleFnamechange =(event)=>{
    this.setState({
      fname: event.target.value
    })
  }
  hanleLnamechange = (event)=>{
    this.setState({
      lname:event.target.value
    })
  }
  handleEmailchange =(event)=>{
    this.setState({
      email:event.target.value
    })
  }
  handlePswdchange=(event)=>{
    this.setState({
      pswd:event.target.value
    })
  }
  handleDobchange=(event)=>{
    this.setState({
      dob:event.target.value
    })
  }
  handleGenderchange=(event)=>{
    this.setState({
      gender:event.target.value
    })
  }
  handleMobilechange=(event)=>{
    this.setState({
      mobile:event.target.value
    })
  }
  handleSelectchange =(event)=>{
    this.setState({
      nop:event.target.value
    })
  }
  handleIdchange=(event)=>{
    this.setState({
      id:event.target.value
    })
  }
  handleListchange=(event)=>{
    this.setState({
      beds:event.target.value
    })
  }
  handleCheckboxchange=(event)=>{
    this.setState({
      food:event.target.value
    })
  }
  handleSubmit=()=>{
    this.setState({
      submission:true
    })
  }

  render(){
    return(
      <div id="primary-display">
      {this.state.submission=== false ?
      <div id="form">
      <form>
      <fieldset>
        <legend>Personal Info</legend>
        
        <label>First Name:</label>
        <input type="text" id="fname" value={this.state.fname}
        onChange={this.handleFnamechange}  required/>
        
        <label>Last Name:</label>         
        <input type="text" id="lname" value={this.state.lname}
        onChange={this.hanleLnamechange} required/><br/>
        
        <label>Email:</label>
        <input type="text" id="email" value={this.state.email}
        onChange={this.handleEmailchange}required /><br/>
        
        <label>Password:</label>
        <input type="text" id="pswd" value={this.state.pswd}
        onChange={this.handlePswdchange}required/><br/><br/>
        
        <label>Date Of Birth:</label>
        <input type="date" id="dob" value={this.state.dob}
        onChange={this.handleDobchange}required /><br/><br/>
        
        <inline>Gender:</inline>
        <input type="radio" id="male" value="Male" name="gender" onChange={this.handleGenderchange}/>
        <label for="male">Male</label>
        <input type="radio" id="female" value="Female" name= "gender" onChange={this.handleGenderchange}/>
        <label for="female">Female</label>
        <br/><br/>
        
        <label>Enter your mobile number:</label>
        <input type="tel" id="mobile" placeholder="1234-56-7890" 
        value={this.state.mobile} onChange={this.handleMobilechange}required/>
      </fieldset><br/>

      <fieldset>

        <label>No.of persons:</label>
        <select id="Nop" name="persons" value={this.state.nop}
        onChange={this.handleSelectchange}>
            <option value="one">ONE</option>
            <option value="two">TWO</option>
            <option value="three">THREE</option>
            <option value="four">FOUR</option>
        </select>
        <br/><br/>

        <label>Upload ID's:</label>
        <input type="file" id="proof" value={this.state.id} 
        onChange={this.handleIdchange} multiple />
        <br/><br/>

        <label>Type of beds:</label>
        <input list="beds" name="beds" value={this.state.beds}
        onChange={this.handleListchange}/>
    
        <datalist id="beds">
          <option value="Single"/>
          <option value="Double"/>
          <option value="Triple"/>
        </datalist>
        <br/><br/>


        <label>Select food required:</label><br/>
        <input type="radio" id="chinese" name="food" value="chinese" onChange={this.handleCheckboxchange}/>
        <label>Chinese</label><br/>
        <input type="radio" id="north"name="food" value="NorthIndian" onChange={this.handleCheckboxchange}/>
        <label>North Indian</label><br/>
        <input type="radio" id="south" name="food" value="SouthIndian" onChange={this.handleCheckboxchange}/>
        <label>South Indian</label>
        <br/><br/>

        </fieldset><br/>
      </form>
      <button onClick={this.handleSubmit}>Submit</button>
      </div> :''}

    <div>
      {this.state.submission === false
        ? "" :<Submit
        fname={this.state.fname} lname={this.state.lname} email={this.state.email}
        pswd={this.state.pswd} dob={this.state.dob} gender={this.state.gender} mobile={this.state.mobile} 
        nop={this.state.nop} id={this.state.id} beds={this.state.beds} food={this.state.food}/>
      }
    </div>
     
     </div>
    )
  }
}


export default Form;