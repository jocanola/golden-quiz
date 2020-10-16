import React from 'react';
import './App.css';



class Results extends React.Component {
    constructor(){
    super();
    this.state = {
    	checkResult:false,
    	result:null
    }

 }




  render() {	
  	// const updateResult = () =>{
  	// 	setState({result:percent})
  	// }
	 const getResult = ()  =>{
	 	this.setState({checkResult:true})
	 }
  	var percent = (this.props.score / this.props.questions.length * 100); 
    return (
   	 <div className="login_cont">
	      <div className='stylePage'> 
		          <div className='form-group'>
		            <label htmlFor='employeeId'>You have successfully completed the quiz</label>
		          </div>
	      </div>
    </div>
    );
  }
}

export default Results;
