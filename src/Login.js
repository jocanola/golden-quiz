import React, { Component } from 'react';
import './App.css';
import QuestionSet from './QuestionSet';
import logo from './logo.jpg';
import db from './firebase';
import { Button, Modal, Header, Footer, Title, Body} from
'react-bootstrap';

 
class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      authenticationn:false,
      authkey:'',
      employeeId: '',
      employeeIdValid: false,
      loggedIn: false,
      show:false,
      error:'',
      user:[],
      listOfUser:false
    }
  }

  handleClose = () => {
    this.setState({show:false})
  };
  handleShow = () =>{ 
    this.setState({show:true})
  };

  handleSubmit = e => {
    this.setState({ loggedIn: true });
  }

  handleUserInput = e => {
    let value = e.target.value;
    this.setState({ employeeId: value });
    this.validateField(value);
  }

  passdata = e => {
    return e.target.value
  }

  validateField = value => {
    let employeeIdValidNew = (value.length === 11) && (/^\d+$/.test(value));
    this.setState({ employeeIdValid: employeeIdValidNew });
  }


  handleUserInputKey = e => {
    this.setState({authkey:e.target.value})
  }

  handleAdminLogin = () =>{
    if(this.state.authkey === "Golden_2020_Password"){
      this.setState({authentication:true})
    }else {
       this.setState({error:"Admin Permission is Required"})
    }
  }


   componentDidMount(){
       db.collection("applicants").onSnapshot(snapshot=>{
        this.setState(snapshot.docs.map(doc=>({
                  fullName:doc.fullName,
                  classLevel:doc.classLevel,
                  email:doc.email,
                  phoneNo:doc.phone,
                  address:doc.address
            })))
      })
   }

      render() {
      
      
           if (this.state.loggedIn)
               return (
              <QuestionSet user={this.state.employeeId}/>
            )

           if(!this.state.authentication){
              return (
                <div className="login_cont">
                  <div className='stylePage'>
                  <img src={logo} alt="logo" 
                  style={{width:"300px", height:"300px",
                   marginBottom:"50px", borderRadius:"999px"
                  }}/>

                    <form className='demoForm'>
                      <p style={{color:"red"}}>{this.state.error}</p>
                      <div className='form-group'>
                        <label htmlFor='employeeId'>Admin Password</label>
                        <input type="text" className="form-control"
                          value={this.state.authkey}
                          onChange={this.handleUserInputKey} />
                      </div>
                      <Button variant="primary" className="btn btn-primary" disabled={!this.state.authkey} onClick={this.handleAdminLogin} >
                        Sign in
                   </Button>
                    </form>
                  </div>
                </div>
              )
           } else {
            return (
                  <div className="login_cont">
                    <div className='stylePage'>
                    <img src={logo} alt="logo" 
                    style={{width:"300px", height:"300px",
                     marginBottom:"50px", borderRadius:"999px"
                    }}/> 

                      <div>
                        <Modal show={this.state.show} onHide={this.handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title><b>Read the instructions carefully!</b></Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                           Your Student ID is <h4>{this.state.employeeId}</h4>
                           <h3>QUESTION<br /></h3>
                           We have three sections in this quiz, which are English,
                           Mathematics and Current Affairs in which each section contains 
                           40, 40 and 20 questions respectively <br />
                           TIMING<br />
                           Also, You have 90minutes to Anwser All the questions<br />
                           <h3 style={{color:"red"}}>MUST DO!</h3>
                           This quiz is not only to test your briliancy but also the smartness, so you must submit before the time lapse failure to do will not have any score<br />
                           Best of Luck!
                          </Modal.Body>
                          <Modal.Footer>
                            <Button variant="primary" onClick={this.handleSubmit}>
                              Start
                            </Button>
                          </Modal.Footer>
                        </Modal>
                      </div>

                      <form className='demoForm'>
                        <div className='form-group'>
                          <label htmlFor='employeeId'>Student Id</label>
                          <input type="text" className="form-control"
                            value={this.state.employeeId}
                            onChange={this.handleUserInput} />
                        </div>
                        <Button variant="primary" className="btn btn-primary" disabled={!this.state.employeeIdValid} onClick={this.handleShow} >
                          Sign in
                     </Button>
                      </form>
                    </div>
                 </div>
             )
       
           } 
    }
}
export default Login;
