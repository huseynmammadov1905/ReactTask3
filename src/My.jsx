import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function My({userArray,setUserArray}) {

  let [name,setName] = useState('');
  let [username,setUsername] = useState('');
  let [email,setEmail] = useState('');

  const addHandler=()=>{
    let newArray = [...userArray];
    newArray.push({name:name,username:username,email:email,id:newArray.length + 1})
    setUserArray(newArray);
  }

  const handleSubmit =(event)=>{
    event.preventDefault();
}
const removeUser=(id)=>{
    let newArray = [...userArray];
    newArray = newArray.filter((item)=> item.id !== id);
    setUserArray(newArray)

}
    return (
    <div className="My">
     <form onSubmit={handleSubmit} >
     <p>name</p>
        <input name='name' onChange={(event)=>setName(event.target.value)}/>
        <p>username</p>
        <input name='username' onChange={(event)=>setUsername(event.target.value)}/>
        <p>email</p>
        <input name='email' onChange={(event)=>setEmail(event.target.value)}/>
        <br/>
        <button onClick={addHandler}>Add</button>
      
       
   
     </form>

     <ul>
        {userArray.map((item)=>{
            return(
                <div key={item.id}>
                    <p>{item.name}</p>
                    <p>{item.email}</p>
                    <p>{item.username}</p>
                    <button onClick={()=>removeUser(item.id)}>Remove</button>
                    <br></br>
                </div>
            )
        })}
     </ul>
    </div>
  );
}

export default My;
