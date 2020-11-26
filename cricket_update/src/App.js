import logo from './logo.svg';
import {useEffect} from 'react'
import {useState} from 'react'
import './App.css';
import Button from '@material-ui/core/Button'
import Navbar from './components/Navbar';
import getMatches from './api/Api'
import MyCards from './components/MyCards'

function App() {
  const [matches,setMatches] = useState([])
  useEffect(()=>{
    getMatches().then((data)=>setMatches(data.matches)).catch((err)=> console.log("Error in getting data",err))
  },[])
  return (

    <div className="App">
      
      <Navbar/> 
      <h1>Welcome to live Score App</h1>
 
      {
        matches.map((match)=> (<MyCards match={match}/>)
        
        
        
        
        )
      }
     
      

    </div>


  );
}

export default App;
