import React, { useContext, useState } from 'react';
import './Display2.css';
import { AppContext } from '../../context/AppContext';
// import { GiSettingsKnobs } from 'react-icons/gi';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

const Display2 = () => {
  const [display2, setDisplay2] = useState(false);
  const {
    setStatusGroup,
    setUserGroup,
    setPriorityGroup,
    setPriorityOrder,
    setTitleOrder,
  } = useContext(AppContext);

  function displayHandler() {
    setDisplay2(!display2);
  }

  function clearGroups() {
    setStatusGroup(false);
    setUserGroup(false);
    setPriorityGroup(false);
  }

  function clearOrder() {
    setPriorityOrder(false);
    setTitleOrder(false);
  }

  function groupHandler(OPT) {
    clearGroups();

    if (OPT === "status") {
      const newData = {
        status: true,
        user: false,
        prior: false,
      };
      localStorage.setItem('groupData', JSON.stringify(newData));
      setStatusGroup(true);
    } else if (OPT === "user") {
      const newData = {
        status: false,
        user: true,
        prior: false,
      };
      localStorage.setItem('groupData', JSON.stringify(newData));
      setUserGroup(true);
    } else if (OPT === "priority") {
      const newData = {
        status: false,
        user: false,
        prior: true,
      };
      localStorage.setItem('groupData', JSON.stringify(newData));
      setPriorityGroup(true);
    }
  }

  function orderHandler(OPT) {
    clearOrder();
    
    if (OPT === "priority") {
      const newData = {
        prior: true,
        title: false,
      };
      localStorage.setItem('orderData', JSON.stringify(newData));
      setPriorityOrder(true);
    } else if (OPT === "title") {
      const newData = {
        prior: false,
        title: true,
      };
      localStorage.setItem('orderData', JSON.stringify(newData));
      setTitleOrder(true);
    }
  }

  return (
    <div className='display2-main'>
      <div className="display2-button" onClick={displayHandler}>
        <p>Display</p>
        {display2 !== true ? (
          <AiOutlineDown className='display-down display-icon' />
        ) : (
          <AiOutlineUp className='display-down display-icon' />
        )}
      </div>
      {display2 && (
        <div className="display2-sub">
          <div className="grouping">
            <label htmlFor="grouping">Group By</label>
            <select id='grouping' onChange={(e) => groupHandler(e.target.value)}>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="ordering">
            <label htmlFor='ordering'>Order By</label>
            <select id='ordering' onChange={(e) => orderHandler(e.target.value)}>
              <option value='priority'>Priority</option>
              <option value='title'>Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Display2;
