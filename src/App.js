import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const playersList = ['jamal','kama','bob','jon','rom','alamin'  ] 
  // const players = playersList.map(player=>player);
  //       console.log(players);
  return (
    <div className="App">
      <header className="App-header">
        <Users></Users>
        <Counter></Counter>
        {/* <img src={logo} className="App-logo" alt="logo" />         
         <p>Edit  <code>src/App.js</code> and save to reload. </p> */}       
        {/* {playersList.map(player=> <li>{player}</li> )}
        {playersList.map(player=><PlayerInfo><li>{player}</li></PlayerInfo> )} */}


        {
          playersList.map(player=><PlayerInfo name={player}></PlayerInfo>)
        }
    
      

        
      </header>
    </div>
  );
}
        
    function PlayerInfo (props) {
      var playerStyle = {
           border : '6px solid red',
           borderRadius:'20px',
           backgroundColor:'gray',
           padding:'60px'

       }
       console.log(props);
       const {name} = props;
          return  (
              <div>
                <h3 style={playerStyle}>name: {name}</h3>
              </div>
       )         
  } 
  
  function Counter(){
    const [count, setCount] = useState(10);
    // const handleIncrease = ()=>setCount(count+1);
    ;
    return(
      <div>
        <h3>count: {count} </h3>
        <button onClick={()=>setCount(count+1)}>increase</button>
        <button onClick={()=>setCount(count-1)}>Decrease</button>
      </div>
    )
  }

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[])

  
  return(
    <div>
      <h3>Dynamic User:{users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li> )
        }
        
      </ul>
    </div>
  )
}



export default App;
