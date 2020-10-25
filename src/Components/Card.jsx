import React , {useContext,useState} from 'react';
import {GlobalContext} from '../Contexts/GlobalContext';
import {Allocate} from './Allocate.jsx';
import Modal from 'react-modal';
import {Show } from './Show';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%)',
  },
    overlay :{
    backgroundColor : 'rgba(231, 226, 219, 0.486)',
    
  },


};
let person , phonenm;
const fnChange = (e)=>{
  
  if(e.target.name == 'identity'){
    person = e.target.value;

  }
  if(e.target.name == 'phone'){
    phonenm = e.target.value;

  }
}


const Card = (a) =>{

const [isModelOpen ,isModel] = useState(false);


const [[tm , settm],[Lot,setLot]] = useContext(GlobalContext);

 
 settm(new Date().toLocaleTimeString());

    return(
<>
  <div className = "card" >
        <div className = "box" onClick = {()=>{

          isModel(true);
          
          }}>
           <div className = "content">
             <h1>{a.number}</h1>
               <Show />
           </div>
        </div>

  </div>
        

  <div className="bg-model"> 
        <Modal isOpen = {isModelOpen} style = {customStyles}>

      
      <div style = {
        {display : "flex" , justifyContent:"space-between",textAlign:"center",
        cursor:"pointer"
      
      }
      }>

      <h1> Allocate Parking </h1>
      <h3 onClick = {()=>{

        isModel(false);
      }}> X </h3>

      </div>

      <form>
      <label >Name :</label>
      <input type="text" required  onChange = {fnChange} name = "identity" />
      <label>PhoneNo :</label>
      <input type="number"   onChange = {fnChange} name = "phone"/>
      <button type = "submit" onClick = {(e)=>{
       
        

            setLot([a.number,person,phonenm,false,tm]);
            isModel(false);
            e.preventDefault();
      
      }}>Add</button>
      </form>

  
    </Modal>
  
    

  </div>

      
</>
    );
}

export default Card;