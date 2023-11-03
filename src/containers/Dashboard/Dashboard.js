import React, { useContext, useEffect} from 'react'
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
    // let groupStatus="";
    // let orderStatus="";
    // useEffect(() => {
    //     const orderData = localStorage.getItem('orderData');
    //     const groupData = localStorage.getItem('groupData');
    //     if (groupData) {
    //         const parsedGroupData = JSON.parse(groupData);
    //         for (const key in parsedGroupData) {
    //           if (Object.hasOwnProperty.call(parsedGroupData, key)) {
    //             const value = parsedGroupData[key];
    //             if (value === true) {
    //               groupStatus = key;
    //               break;
    //             }
    //           }
    //         }
    //     }
        
    //     if (orderData) {
    //         const parsedOrderData = JSON.parse(orderData);
    //         for (const key in parsedOrderData) {
    //           if (Object.hasOwnProperty.call(parsedOrderData, key)) {
    //             const value = parsedOrderData[key];
    //             if (value === true) {
    //               orderStatus = key;
    //               break;
    //             }
    //           }
    //         }
    //     }
    //   });
    return (
        <div className='dashboard-main'>
            <FetchData/>
            <div className="dashboard-wrapper">
                <div className="dashboard-sp dashboard-col">
                    {statusgroup === true && priorityorder === true && (
                        <div className='statusandpriority'>
                            <StatusPrior/>
                        </div>
                    )}
                </div>
                <div className="dashboard-st dashboard-col">
                    {statusgroup === true && titleorder === true && (
                        <div className='statusandtitle'>
                            <StatusTitle/>
                        </div>
                    )}
                </div>
                <div className="dashboard-up dashboard-col">
                    {usergroup === true && priorityorder === true && (
                        <div className='userandpriority'>
                            <UserPrior/>
                        </div>
                    )}
                </div>
                <div className="dashboard-ut dashboard-col">
                    {usergroup === true && titleorder === true && (
                        <div className='userandtitle'>
                            <UserTitle/>
                        </div>
                    )}
                </div>
                <div className="dashboard-pp dashboard-col">
                    {prioritygroup === true && priorityorder === true && (
                        <div className='priorityandpriority'>
                            <PriorPrior/>
                        </div>
                    )}
                </div>
                <div className="dashboard-pt dashboard-col">
                    {prioritygroup === true && titleorder === true && (
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
