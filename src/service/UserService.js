import axios from 'axios';

const USER_API_URL = "api/v2/users" ;

// ec2 => 18.224.18.169

const BASE_URL = "http://localhost:9191" ;

class UserService {


 retrieveUser(id)
 {
    return axios.get(`${BASE_URL}/${USER_API_URL}/${id}`);
 }   

retrieveAll()
{
    return axios.get(`${BASE_URL}/${USER_API_URL}`)   
}
 

deleteById(id)
{
    return axios.delete(`${BASE_URL}/${USER_API_URL}/${id}`)   
}

updateById(id , payload)
{
    return axios.put(`${BASE_URL}/${USER_API_URL}/${id}`,payload)
}


createCourse(payload)
{
    return axios.post(`${BASE_URL}/${USER_API_URL}`,payload)

}
 
// updateUser(id,values)
// {
//     return axios.pu

// }








}

export default new UserService() ;