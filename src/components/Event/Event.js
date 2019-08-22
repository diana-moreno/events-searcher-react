import React from 'react';

const Event = ({event}) => {
    let {text} = event.description;
    if(text) {
      text.length > 250 ? text = text.substring(0, 250).concat('...') : text = null; //limitar a 250 carácteres.
    }
  return (
    <div className='uk-card uk-card-default'>
      <div className='uk-card-media-top'>
        {event.logo ? <img src={event.logo.url} alt={event.name} /> : null}
      </div>

      <div className='uk-card-body'>
        <h3 className='uk-card-title'>{event.name.text}</h3>
        {text}
      </div>

      <div className='uk-card-footer uk-card-media-bottom'>
        <a target='_blank' rel='noopener noreferrer' href={event.url} className='uk-button uk-button-secondary'>
          More information
        </a>
      </div>
    </div>
  );
}

export default Event;