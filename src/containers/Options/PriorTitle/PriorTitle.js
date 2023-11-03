import React, { useContext } from 'react';
import './PriorTitle.css'
import { AppContext } from '../../../context/AppContext';
import Card from '../../../components/Card/Card';
import { sortTasksByTitle } from '../../../utils/utils'
import {AiOutlinePlus} from 'react-icons/ai';
import {HiOutlineDotsHorizontal} from 'react-icons/hi';
import {FcHighPriority,FcLowPriority,FcMediumPriority,FcExpired,FcAlarmClock} from 'react-icons/fc';


const PriorTitle = () => {
  const { data } = useContext(AppContext);

  if (!data || !data.tickets || data.tickets.length === 0) {
    return (
      <div className='userprior'>
        <p>No Tickets Available</p>
      </div>
    );
  }

  const renderTaskCards = (tasks, ind) => {
    return (
      <div className='userprior-top'>
        <div className='userprior-heading'>
          <div className="userprior-first">
            <div className='userprior-icon'>
                {(() => {
                  switch (ind) {
                    case 0:
                      return <FcExpired/>;
                    case 1:
                      return <FcLowPriority/>;
                    case 2:
                      return <FcMediumPriority/>;
                    case 3:
                      return <FcHighPriority/>;
                    case 4:
                      return <FcAlarmClock/>;
                    default:
                      return "Unknown Priority";
                  }
                })()}
            </div>
            <div className="userprior-title"><p>{(() => {
              switch (ind) {
                case 0:
                  return "No Priority";
                case 1:
                  return "Low";
                case 2:
                  return "Medium";
                case 3:
                  return "High";
                case 4:
                  return "Urgent";
                default:
                  return "Unknown Priority";
              }
            })()}</p></div>
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
              <Card key={task.id} card_id={task.id} card_title={task.title} card_tag={task.tag[0]} />
            ))}
          </li>
        )}
      </div>
    );
    };

    return (
      <div className='userprior'>
        <div className='user-cards' style={{
        display: 'grid',
        gridTemplateColumns: `repeat(5, 1fr)`,
        gridColumnGap: '22px',
        }}>
           {Array.from({ length: 5 }).map((_, i) => {
          var Cards = data.tickets.filter((Card) => Card.priority === i);
          const sortedCards = sortTasksByTitle(Cards)
          {/* console.log(Cards); */}
          return (
            <div key={i} className='priority-column'>
              <ul>
              {renderTaskCards(sortedCards,i)}
              </ul>
            </div>
          );
        })}
        </div>
      </div>
    )
}

export default PriorTitle
