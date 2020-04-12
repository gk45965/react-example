import { Component } from "react";
import React from 'react' ;
import UserService from "../service/UserService";
import { Formik, Form, Field, ErrorMessage } from "formik";


class UserUpdateComponent extends Component
{

    constructor(props)
    {
        super(props)
        this.retriverUser = this.retriverUser.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
        this.state = {
            id : this.props.match.params.id ,
            firstName : '' ,
            lastName : '' ,
            phoneNo : '' ,
            email : '' ,
            password : 'hello2' 
        }
    }
    
  

componentDidMount()
{

    if(this.state.id == -1)
        return

    this.retriverUser(this.state.id);
}

retriverUser(id)
{
    return UserService.retrieveUser(id).then(
        response => {
            this.setState( {
                firstName :  response.data.firstName ,
                lastName : response.data.lastName ,
                phoneNo : response.data.phoneNo ,
                email : response.data.email 
                
            } )
        }

    )

}

onSubmit(values)
{
    let payload = { firstName : values.firstName , lastName :  values.lastName , phoneNo : values.phoneNo , email : values.email , password :  values.password} ;

console.log(payload);
console.log("Form submitted Successfuly");


if(values.id == -1 )
UserService.createCourse(payload).then( () => {this.props.history.push(`/users` )});
else
UserService.updateById(values.id,payload).then( () => {this.props.history.push(`/users` )});

//  this.props.history.push(`/users` );

}



validate(values)
{
let errors = {} 
if(!values.firstName)
{
errors.firstName = "Enter the firstName" 
}
if(!values.lastName)
{
    errors.firstName = "Enter the lastName" 
}
if(!values.phoneNo)
{
errors.phoneNo = "Enter the phoneNo" 
}
if(!values.email)
{
errors.email = "Enter the email"
}

return errors;
}



render()
{
    let { firstName , lastName , phoneNo , email , id  , password  } = this.state ;

    return(
        <div>
            <div>
                <h3> User </h3>
                <div className = "container" > 

                <Formik
                    initialValues={{ id , firstName , lastName , phoneNo , email , password}}
                    onSubmit={this.onSubmit}  
                    validateOnChange={false}
                    validateOnBlur={false}
                    validate={this.validate}
                    enableReinitialize={true}
                >
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage name="firstName"  component="div" className="alert alert-warning" />
                                <ErrorMessage name="lastName"  component="div" className="alert alert-warning" />
                                <ErrorMessage name="phoneNo"  component="div" className="alert alert-warning" />
                                <ErrorMessage name="email"  component="div" className="alert alert-warning" />
                                   <fieldset className="form-group">
                                            <label>Id</label>
                                            <Field className = "form-control" type="text" name ="id" disabled />
                                            
                                    </fieldset>

                                    <fieldset className="form-group" >
                                            <label>First Name</label>
                                            <Field className = "form-control" type="text" name ="firstName"  /> 
                                    </fieldset>
                                    <fieldset className="form-group" >
                                            <label>Last Name</label>
                                            <Field className = "form-control" type="text" name ="lastName"/> 
                                    </fieldset>
                                    <fieldset className="form-group" >
                                            <label>Phone No</label>
                                            <Field className = "form-control" type="text" name ="phoneNo" />  
                                    </fieldset>
                                    <fieldset className="form-group" >
                                            <label>Email</label>
                                            <Field className = "form-control" type="text" name ="email"  /> 
                                    </fieldset>                                 
                
 <button className="btn btn-success" type="submit">Save</button>

                            </Form>
                        )   
                    }   
                </Formik>






                {/* <Formik
                    initialValues={{ id }}
                >
                    {
                        (props) => (
                            <Form>
                                <fieldset className="form-group">
                                    <label>Id</label>
                                    <Field className="form-control" type="text" name="id" disabled />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Email</label>
                                    <Field className="form-control" type="text" name="email" />
                                </fieldset>
                                <button className="btn btn-success" type="submit">Save</button>
                            </Form>
                        )
                    }
                </Formik>               */}
                </div>
            </div>

        </div>
    )


}


}







//     render()
//     {

//         let { firstName , lastName , phoneNo , email } = this.state ;

//        return(
//            <div className="container">
                

//                 <table>
//                 <thead>
//                     <tr>
//                     <th>First Name</th>
// <th>Last Name</th>
// <th>Phone No</th>
// <th>Email</th>
//                         </tr>                    


//                 </thead>

//             <tbody>

//             <tr>



//        {/* <td>{this.state.firstName}</td>
// <td>{this.state.lastName}</td>
// <td>{this.state.phoneNo}</td>
// <td>{this.state.email}</td> */}
              
//               <td>{firstName}</td>
// <td>{lastName}</td>
// <td>{phoneNo}</td>
// <td>{email}</td>



//                         </tr>                    



//             </tbody>
//                 </table>



//            </div>
//        )     

//     }


// }

export default UserUpdateComponent ;