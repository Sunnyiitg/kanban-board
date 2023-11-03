import React, { useContext, useState } from 'react'
import './Display.css'
import {GiSettingsKnobs} from 'react-icons/gi';
import {AiOutlineDown,AiOutlineUp} from 'react-icons/ai';
import { AppContext } from '../../context/AppContext';
import Option from '../Option/Option';

const Display = () => {
  const {display,setDisplay,setStatusGroup,setUserGroup,setPriorityGroup,setPriorityOrder,setTitleOrder} = useContext(AppContext);
  function displayHandler() { setDisplay(!display); }
  function clearGroups()
  {
    setStatusGroup(false);
    setUserGroup(false);
    setPriorityGroup(false);
  }
  function clearOrder()
  {
    setPriorityOrder(false);
    setTitleOrder(false);
  }
  function groupHandler(OPT) 
  {
    clearGroups();
    if(OPT==="status") setStatusGroup(true); 
    else if(OPT==="user") setUserGroup(true); 
    else if(OPT==="priority") setPriorityGroup(true); 
  }
  function orderHandler(OPT) 
  {
    clearOrder();
    if(OPT==="priority") setPriorityOrder(true);
    else if(OPT==="title") setTitleOrder(true);
  }
  const [groupkey,setGroupkey]=useState(false);
  const [orderkey,setOrderkey]=useState(false);
  return (
    <div className='display-main'>
        <div className="display-button" onClick={displayHandler}>
            <GiSettingsKnobs className='display-setting display-icon'/>
            <p className='display-text'>Display</p>
            {
                display!==true?
                (<AiOutlineDown className='display-down display-icon'/>)
                :(<AiOutlineUp className='display-down display-icon'/>)
            }
        </div>
            {
                display === true && (
                <div className='display-sub'>
                <div className='display-sub-options'>
                <ul>
                    <li>
                    <p>Grouping</p>
                    <div className='display-3rd'>
                    <Option optText="Status" icons="true" Key={groupkey} setKey={setGroupkey} otherKey={setOrderkey}/>
                    {
                        groupkey === true && (
                            <div className='display-sub-final display-final1'>
                                <ul>
                                    <li onClick={() => groupHandler("status")}><Option optText="status" icons="false"/></li>
                                    <li onClick={() => groupHandler("user")}><Option optText="user" icons="false"/></li>
                                    <li onClick={() => groupHandler("priority")}><Option optText="priority" icons="false"/></li>
                                </ul>
                            </div>
                        )
                    }
                    </div>
                    </li>
                    
                    <li>
                    <p>Ordering</p>
                    <div className='display-3rd'>
                    <Option optText="Priority" icons="true" Key={orderkey} setKey={setOrderkey} otherKey={setGroupkey}/>
                    {
                        orderkey === true && (
                            <div className='display-sub-final display-final2'>
                                <ul>
                                    <li onClick={() => orderHandler("priority")}><Option optText="priority" icons="false"/></li>
                                    <li onClick={() => orderHandler("title")}><Option optText="title" icons="false"/></li>
                                </ul>
                            </div>
                        )
                    }
                    </div> 
                    </li>
                </ul>
                </div>
                </div>
             )
            }
    </div>
  )
}

export default Display
