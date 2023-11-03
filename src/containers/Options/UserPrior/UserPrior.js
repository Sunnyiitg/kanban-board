import React, { useContext } from 'react';
import './UserPrior.css'
import { AppContext } from '../../../context/AppContext';
import Card from '../../../components/Card/Card';
import { sortTasksByPriority } from '../../../utils/utils'
import {AiOutlinePlus} from 'react-icons/ai';
import {HiOutlineDotsHorizontal} from 'react-icons/hi';


const UserPrior = () => {
  const { data } = useContext(AppContext);

  if (!data || !data.tickets || data.tickets.length === 0) {
    return (
      <div className='userprior'>
        <p>No Tickets Available</p>
      </div>
    );
  }
  const renderTaskCards = (tasks, user,userStatus) => {
    return (
      <div className='userprior-top'>
        <div className='userprior-heading'>
          <div className="userprior-first">
            <div className="user-status">
              {
                userStatus === true ? <p className='user-status-yes'></p>
                 : <p className='user-status-no'></p>
              }
            </div>
            <div className="userprior-title"><p>{user}</p></div>
            <div className="userprior-len"><p>{tasks.length}</p></div>
          </div>
          <div className="userprior-second">
            <div className="userprior-plus userprior-icon"><AiOutlinePlus/></div>
            <div className="userprior-dot userprior-icon"><HiOutlineDotsHorizontal/></div>
          </div>
        </div>
        {tasks.length === 0 ? (
          <div className='userprior-nocard'>No Cards</div>
        ) : (
          <li>
            {tasks.map((task) => (
              <Card key={task.id} card_id={task.id} card_title={task.title} card_tag={task.tag[0]} showPic="no"/>
            ))}
          </li>
        )}
      </div>
    );
  };

  const Users=data.users;

  return (
    <div className='userprior'>
      <div className='user-cards' style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${Users.length}, 1fr)`,
      gridColumnGap: '22px',
      }}>
        {Users.map((item, index) => {
          const Cards = data.tickets.filter((Card) => Card.userId === item.id);
          const sortedCards=sortTasksByPriority(Cards)
          return (
            <div className='userCol' key={index}>
              {
                <ul>
                  {renderTaskCards(sortedCards, item.name,item.available)}
                </ul>
              }
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default UserPrior
