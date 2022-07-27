import {useState, useEffect} from 'react';
import GetUsers from '../services/GetUsers';
import UserCard from './UserCard';

const Users = ({keyword}) =>{
    const [users, setUsers] = useState([]);
    const [code, setCode] = useState(0);

    useEffect(()=>{
        GetUsers().then((res)=>setUsers(res)).catch((err)=>console.error(err));
     },[code])

     return (
        <div id="user-area">
            { 
                users.data?.filter((user,index)=>(
                    user.name.toLowerCase().includes(keyword.toLowerCase())
                )).map((user, index)=>(
                    <UserCard key={index} user={user}/>
                ))
            }
        </div>
     )
}

export default Users;