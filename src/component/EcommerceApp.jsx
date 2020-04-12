import { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import UserListComponent from "./UserListComponent";
import React from 'react';
import UserUpdateComponent from "./UserUpdateComponent";

class EcommerceApp extends Component
{
render()
{ 
    return(
        <Router>
             <>
                     <h1>Ecommerce Application</h1>   
                 
                    <Switch>
                        <Route path="/" exact component = {UserListComponent} />
                        <Route path="/users" exact component = {UserListComponent} />
                        <Route path="/users/:id"  component = {UserUpdateComponent} />
                    
                    </Switch>
{/*             
           <Switch>
                     <Route path="/" exact component={UserListComponent} />
                     <Route path="/users" exact component={UserListComponent} />
                     <Route path="/users/:id" component={UserUpdateComponent} />
                 </Switch>
 */}
           
            </>
            </Router>
    
        
    
        )
}

// {
// render() {
//     return (
//         <Router>
//             <>
//                 <h1>Instructor Application</h1>
//                 <Switch>
//                     <Route path="/" exact component={UserListComponent} />
//                     <Route path="/users" exact component={UserListComponent} />
//                     <Route path="/users/:id" component={UserUpdateComponent} />
//                 </Switch>
//             </>
//         </Router>
//     )
// }


}

export default EcommerceApp;