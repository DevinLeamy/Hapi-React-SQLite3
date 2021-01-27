import React, { useState, useEffect } from "react";
import "./users.css";

export interface UserData {
    id: number,
    name: string,
    age: number
}

const getUserData = async (setUserData) => {
    await fetch('http://localhost:3000/user_data')
    .then(res => res.json())
    .then((users: {data: UserData[]}) => {
        setUserData(users.data);
    })
    .catch(err => {
        console.log("Error fetching users from the database");
    })
}

export function UserPage() {
    const [userData, setUserData] = useState([])

    useEffect(() => {
        getUserData(setUserData);
    }, []);
    
    return (
        <div className='users-container'>
            <div className='users-header'>Users</div>
            <ul className="users-list">
                {
                    userData.map(({_, name, age}) => {
                        return <li className='user-data'>{age} year old {name}</li>;
                    })
                }
            </ul>
        </div>
    );
}

