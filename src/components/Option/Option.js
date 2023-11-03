import React from 'react'
import './Option.css'
import {AiOutlineDown,AiOutlineUp} from 'react-icons/ai';

const Option = ({optText,icons,Key,setKey,otherKey}) => {
    // const[opt,setOpt]=useState(false);
    function optHandler() { setKey(!Key); otherKey(false); }
  return (
    <div className='option-main'>
      <p>{optText}</p>
      {
        icons==="true" &&
      <div onClick={optHandler}>
        {Key===false?
            (<AiOutlineDown className='display-down display-icon'/>)
            :(<AiOutlineUp className='display-down display-icon'/>)
        }
      </div>
      }
    </div>
  )
}

export default Option
