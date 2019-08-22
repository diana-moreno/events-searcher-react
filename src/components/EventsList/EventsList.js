import React from 'react';
import { EventsConsumer } from '../../context/EventsContext';
import Event from '../Event/Event';

const EventsList = () => {
  return (
    <div className='uk-child-width-1-3@m' uk-grid='true'> {/*uk-child-width-1-2@s*/}
      <EventsConsumer>
        {(value) => {
          console.log(value);
          return value.events.map(event => (
            <Event
              key={event.id} //siempre tiene que tener un key único
              event={event}
            />
          ))
        }}
      </EventsConsumer>
    </div>
  );
}

export default EventsList;