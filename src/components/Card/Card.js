import React from 'react'
import './Card.css'
import {BsPersonCircle} from 'react-icons/bs';
const Card = ({card_id,card_title,card_tag,showPic}) => {
  return (
    <div className='card-main'>
      <div className="card-wrapper">
        
        <div className="card-id">
            <p>{card_id}</p>
            {
              showPic!=="no" && <BsPersonCircle/>
            }
        </div>

        <div className="card-title">
            <div/>
            <p>{card_title}</p>
        </div>

        <div className='card-footer'>
            <div/>
            <p>{card_tag}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
