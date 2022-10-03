import React, {useEffect, useState} from 'react';
import { getUsers } from '../../api';

const UsersPhoneBook = () => {
    const [userData, setUserData] = useState([])
    useEffect(()=>{
getUsers().then((data)=>{
setUserData(data)
})
    }, [])
    return (
        <div>
        {userData.map(item=>JSON.stringify(item.name.last))}
        </div>
    );
}

export default UsersPhoneBook;
