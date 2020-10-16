import React, { Component } from 'react';
import db from './firebase';


class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user:[],
    }
  }

 //snapshot.docs.map(doc=>({
 //                  result:doc.result,
 //                  user:doc.userId,
 //            }))

   componentDidMount(){
       db.collection("users").onSnapshot(snapshot=>{
        this.setState({user:snapshot.data()})
      })
   }

      render() {
      	console.log(this.state.user)
      return(
      	<div>
      		<table>
	      		<tr>
		      		<th>phone no</th> 
		      		<th>UserId</th> 
	      		</tr>
      		<tr>
      		<td>result</td> 
      		<td>user</td>
      		</tr>
      		</table>
      	</div>

      )
      
    }
}
export default Login;
