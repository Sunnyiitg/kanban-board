import React, { useContext, useEffect, useState} from 'react'
import './Dashboard.css'
import { AppContext } from '../../context/AppContext';
import FetchData from '../../components/FetchData/FetchData';
import StatusPrior from '../Options/StatusPrior/StatusPrior';
import PriorPrior from '../Options/PriorPrior/PriorPrior';
import StatusTitle from '../Options/StatusTitle/StatusTitle';
import UserPrior from '../Options/UserPrior/UserPrior';
import UserTitle from '../Options/UserTitle/UserTitle';
import PriorTitle from '../Options/PriorTitle/PriorTitle';
const Dashboard = () => {
    const {statusgroup,usergroup,prioritygroup,priorityorder,titleorder} = useContext(AppContext);
    const [groupStatus, setGroupStatus] = useState("");
    const [orderStatus, setOrderStatus] = useState("");
  
    useEffect(() => {
      const groupData = localStorage.getItem('groupData');
      if (groupData) {
        const parsedGroupData = JSON.parse(groupData);
        for (const key in parsedGroupData) {
          if (Object.hasOwnProperty.call(parsedGroupData, key)) {
            const value = parsedGroupData[key];
            if (value === true) {
              setGroupStatus(key);
              break;
            }
          }
        }
      }
      const orderData = localStorage.getItem('orderData');
      if (orderData) {
        const parsedOrderData = JSON.parse(orderData);
        for (const key in parsedOrderData) {
          if (Object.hasOwnProperty.call(parsedOrderData, key)) {
            const value = parsedOrderData[key];
            if (value === true) {
              setOrderStatus(key);
              break;
            }
          }
        }
      }
    });
    console.log('Group Status:', groupStatus);
    console.log('Order Status:', orderStatus);
    return (
        <div className='dashboard-main'>
            <FetchData/>
            <div className="dashboard-wrapper">
                <div className="dashboard-sp dashboard-col">
                {((statusgroup === true && priorityorder === true) || (groupStatus === "status" && orderStatus === "prior")) && (
                    <div className='statusandpriority'>
                    <StatusPrior />
                    </div>
                )}
                </div>
                <div className="dashboard-st dashboard-col">
                    {((statusgroup === true && titleorder === true) || (groupStatus==="status" && orderStatus ==="title")) && (
                        <div className='statusandtitle'>
                            <StatusTitle/>
                        </div>
                    )}
                </div>
                <div className="dashboard-up dashboard-col">
                    {((usergroup === true && priorityorder === true) || (groupStatus === "user" && orderStatus==="prior")) && (
                        <div className='userandpriority'>
                            <UserPrior/>
                        </div>
                    )}
                </div>
                <div className="dashboard-ut dashboard-col">
                    {((usergroup === true && titleorder === true) || (groupStatus==="user" && orderStatus === "title")) && (
                        <div className='userandtitle'>
                            <UserTitle/>
                        </div>
                    )}
                </div>
                <div className="dashboard-pp dashboard-col">
                    {((prioritygroup === true && priorityorder === true) || (groupStatus==="prior" && orderStatus==="prior")) && (
                        <div className='priorityandpriority'>
                            <PriorPrior/>
                        </div>
                    )}
                </div>
                <div className="dashboard-pt dashboard-col">
                    {((prioritygroup === true && titleorder === true) || (groupStatus === "prior" && orderStatus === "title")) && (
                        <div className='priorityandtitle'>
                            <PriorTitle/>
                        </div>
                    )}
                </div>
            </div>
        </div> 
    )
}
export default Dashboard;
