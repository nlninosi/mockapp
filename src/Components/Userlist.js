import {useEffect,useState} from 'react'
import { getallusers } from '../api/users.api';


  export function UserList(){
    useEffect( ()=> {
        const [users , setUsers] = useState();
        async function loadUsers(){
            const res = await getallusers();
            console.log(res);
            setUsers(res.data)
        }
        loadUsers()
    }, []);
    const listItems = users.map(users =>
        <li key={user.id}>
          {user.name}
        </li>
      );
      
      return (
        <ul>{listItems}</ul>
      );
  }