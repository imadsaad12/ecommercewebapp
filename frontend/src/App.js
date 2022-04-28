import logo from './logo.svg';
import './App.css';
import {useEffect} from "react"
import axios from "axios"

function App() {
  useEffect(() => {
axios.get("http://localhost:4000/home")
.then(res=>{
  console.log(res.data)
})
    
  }, []);
  
  return (
    <div className="App">
      
        <p>
          Edit alskla
        </p>
        
    </div>
  );
}

export default App;
