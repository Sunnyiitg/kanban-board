import React, { useContext } from 'react'
import '../StatusPrior/StatusPrior.css'
import { AppContext } from '../../../context/AppContext';
import Card from '../../../components/Card/Card';
import { sortTasksByTitle } from '../../../utils/utils'
import {FcCancel} from 'react-icons/fc';
import {IoMdDoneAll} from 'react-icons/io';
import {BsStopwatch} from 'react-icons/bs';
import {LuListTodo} from 'react-icons/lu';
import {MdOutlineSmsFailed} from 'react-icons/md';
import {AiOutlinePlus} from 'react-icons/ai';
import {HiOutlineDotsHorizontal} from 'react-icons/hi';

const StatusTitle = () => {
  const { data } = useContext(AppContext);

  if (!data || !data.tickets || data.tickets.length === 0) {
    return (
      <div className='statusprior'>
        <p>No Tickets Available</p>
      </div>
    );
  }
  const renderTaskCards = (tasks, status) => {
    return (
      <div className='statusprior-top'>
        <div className='statusprior-heading'>
          <div className="statusprior-first">
            <div className='statusprior-icon'>
              {
                <div className='statusprior-icon'>
                  {status === 'Backlog' && <MdOutlineSmsFailed/>}
                  {status === 'Todo' && <LuListTodo/>}
                  {status === 'In progress' && <BsStopwatch/>}
                  {status === 'Canceled' && <FcCancel/>}
                  {status === 'Done' && <IoMdDoneAll/>}
                </div>
              }
            </div>
            <div className="statusprior-title"><p>{status}</p></div>
            <div className="statusprior-len"><p>{tasks.length}</p></div>
          </div>
          <div className="statusprior-second">
            <div className="statusprior-plus statusprior-icon"><AiOutlinePlus/></div>
            <div className="statusprior-dot statusprior-icon"><HiOutlineDotsHorizontal/></div>
          </div>
        </div>
        {tasks.length === 0 ? (
          <div className='statusprior-nocard'>No Cards</div>
        ) : (
          <li>
            {tasks.map((task) => (
              <Card key={task.id} card_id={task.id} card_title={task.title} card_tag={task.tag[0]}/>
            ))}
          </li>
        )}
      </div>
    );
  };

  const todoTasks = data.tickets.filter((task) => task.status === 'Todo');
  const backlogTasks = data.tickets.filter((task) => task.status === 'Backlog');
  const progressTasks = data.tickets.filter((task) => task.status === 'In progress');
  const cancelTasks = data.tickets.filter((task) => task.status === 'Canceled');
  const doneTasks = data.tickets.filter((task) => task.status === 'Done');

  const sortedTodoTasks = sortTasksByTitle(todoTasks);
  const sortedBacklogTasks = sortTasksByTitle(backlogTasks);
  const sortedProgressTasks = sortTasksByTitle(progressTasks);
  const sortedCancelTasks = sortTasksByTitle(cancelTasks);
  const sortedDoneTasks = sortTasksByTitle(doneTasks);


  return (
    <div className='statusprior'>
      <div className='todo-cards'>
        <ul>
          {renderTaskCards(sortedBacklogTasks, 'Backlog')}
          {renderTaskCards(sortedTodoTasks, 'Todo')}
          {renderTaskCards(sortedProgressTasks, 'In Progress')}
          {renderTaskCards(sortedDoneTasks, 'Done')}
          {renderTaskCards(sortedCancelTasks, 'Canceled')}
        </ul>
      </div>
    </div>
  );
}

export default StatusTitle
