import React, { useState } from "react";
import { UserData } from '../users/users';
import "./home.css";

const randomInt = () => {
    return Math.floor(Math.random() * 999999) + 1
}

export function HomePage() {
    const [searchedUserData, setSearchedUserData] = useState<UserData>(undefined);
    const [searchName, setSearchName] = useState<string>("");
    const [newUser, setNewUser] = useState<UserData>({ id: randomInt(), name: '', age: 0});

    const _setSearchName = (event) => {
        setSearchName(event.target.value);
    };

    const _setNewUserName = (event) => {
        newUser.name = event.target.value;
        setNewUser(newUser);
    }

     const _setNewUserAge = (event) => {
        newUser.age = parseInt(event.target.value);
        setNewUser(newUser);
     }

    const searchUser = async () => {
        await fetch(`http://localhost:3000/user_data/?name=${searchName}`)
            .then(res => res.json())
            .then((data: UserData[]) => {
                setSearchedUserData(data[0]);
                setSearchName("");
            })
            .catch(err => {
                console.log("Error fetching user from the database");
            })
    };

    const createNewUser = async () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)
        };
        console.log(requestOptions.body);
        await fetch('http://localhost:3000/add_user', requestOptions)
            .then(res => res.json())
            .then((user: UserData) => {
                setNewUser({ id: randomInt(), name: '', age: 0});
                console.log(user);
            })
            .catch(err => {
                console.log("Error fetching user from the database");
            });
    };

    return ( 
        <div className='home-container'>
            <div className='add-user-container'>
                <div className='add-user-header'>Add new user</div>
                <input type='text' className='input-field' placeholder='name' onChange={_setNewUserName}></input>
                <input type='number' className='input-field' placeholder='age' onChange={_setNewUserAge}></input>
                <div className='add-user-button' onClick={createNewUser}>Create User</div>
            </div>

            <div className='query-user-container'>
                <div className='query-user-header'>Get user by name</div>
                <input type='text' className='input-field' placeholder='user name' onChange={_setSearchName}></input>
                <div className='query-user' onClick={searchUser}>Get user</div>
            </div>
            <div className='user-data'>
                {searchedUserData !== undefined? `${(searchedUserData as UserData).age} year old ${(searchedUserData as UserData).name}` : 'No user searched' }
            </div>
        </div>
    );
}