import logo from './logo.svg';
import './App.css';
import Card from './Components/Card';
import {GlobalContextProvider} from './Contexts/GlobalContext.jsx';
import {GlobalContext} from './Contexts/GlobalContext.jsx'
import {Allocate} from './Components/Allocate.jsx';
import {Show} from './Components/Show';
const ls = [];
for (var i = 1; i <= 50; ++i) {
ls.push(i);
}

function App() {

  return (
    <GlobalContextProvider>
    

    <div className = "container">
      {
        ls.map((i)=>{
          return(
            <Card number = {i} />
            );
        })
      }
     
     </div>
    
  <Show/>
  </GlobalContextProvider>
  );
}

export default App;
