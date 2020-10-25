import React,{createContext , useState} from 'react'

export const GlobalContext = createContext();

export const GlobalContextProvider = (props)=>{

    
    // let tm = new Date().toLocaleTimeString();

   const [tm , settm] =  useState(0);
   const [Lot,setLot] = useState({
        
        id: 0,
        Name: '',
        PhoneNumber:'',
        available: true,
        time : ''
    });


    const data = [
       [tm , settm],
       [Lot,setLot] 
]
return(
    <>
     <div>
            <GlobalContext.Provider value = {data
               
                
                } >

                {props.children}

            </GlobalContext.Provider>


        </div>


    </>
);




}

