import React , {useContext , useState} from 'react'
import {GlobalContext} from '../Contexts/GlobalContext';


export const Show = () => {
    const [[tm , settm],
    [Lot,setLot]] = useContext(GlobalContext);
    if(Lot.available == false){

        return (
            <div>
                <h1> {Lot.Name} {Lot.time}</h1>
            </div>
        )
        
    }
    return null;
    
    
}
