import React from 'react'
import {arrayShortcuts} from "../configs/ListData"
const Shortcuts = () => {
  return (
    <div className='shortcuts' >
      {arrayShortcuts.map((item,index)=>{
        return(
          <div className='item-shortcuts' key={index}>
            <div className='img-shortcuts'>
              <img src={item.icon} alt={item.name}/>
            </div>
            <p className='name-shortcuts' >{item.name}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Shortcuts
