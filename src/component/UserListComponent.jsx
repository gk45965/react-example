import React from 'react';
import { Component } from "react";
import UserService from '../service/UserService';

class UserListComponent extends Component
{

constructor(props)
{
    super(props)
    this.state = {  users : [] , messages : null   }
    this.refreshUsersList = this.refreshUsersList.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.addUser = this.addUser.bind(this);
} 
 
 
componentDidMount()
{
this.refreshUsersList();    
}

refreshUsersList()
{
    UserService.retrieveAll().then( response =>  {
        console.log(response.data) 
          this.setState( {  users : response.data  }   );
    }   )
}


updateUser(id)
{
  console.log('update '+id);
  this.props.history.push(`/users/${id}`);    
}


deleteUser(id)
{
    UserService.deleteById(id).then(  
        response => {
            //    Console.log(response);
               this.setState( { messages : `delete of user having id = ${id} `  } );
               this.refreshUsersList(); 
        }
       )
}


 addUser()
 {
     this.props.history.push(`/users/-1`);
 }


render()
{
return (

<div className = "container" >

<h3>All Users</h3>
{this.state.messages && <div class="alert alert-success">{this.state.messages}</div>}

<div className = "container" >

<table>
<thead>
<tr>

<th>First Name</th>
<th>Last Name</th>
<th>Phone No</th>
<th>Email</th>
<th>Action</th>
<th>Action</th>
</tr>
</thead>

<tbody>

{

this.state.users.map( user => 

    <tr key = {user.id}>
<td> {user.firstName }   </td>
<td> {user.lastName}   </td>  
<td>  {user.phoneNo}  </td>
<td>  {user.email}  </td>
<td>  <button className="btn btn-warning"  onClick = { () => { this.deleteUser( user.id);  } }  > Delete</button>   </td>
<td> <button className="btn btn-warning"  onClick = { () => { this.updateUser( user.id);  } }  > Update</button>   </td>
    </tr>

)

}
<tr>
<td><button className = "btn btn-success"  onClick = {this.addUser} > Add  </button></td>
</tr>

</tbody>

</table>

</div>
</div>
)

}



}

export default UserListComponent ;