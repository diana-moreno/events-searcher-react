import React, { Component } from 'react';
import axios from 'axios';

//create context
const EventsContext = React.createContext();
export const EventsConsumer = EventsContext.Consumer;


class EventsProvider extends Component {

  token = 'H3XNKDXWLEAP3RPVC4X6'
  sortBy = 'date'
  state = {
    events : []
  }

  getEvents = async (search) => { // se ejecutará cuando el usuario presione el botón
    let url = `https://www.eventbriteapi.com/v3/events/search/?q=${search.name}&categories=${search.category}&sort_by=${this.sortBy}&token=${this.token}`;
    // consultar la API con la URL.
    const events = await axios(url); // hace la consulta, el método get viene por defecto, se puede poner o no.
/*    console.log(events);
    console.log(events.data.events)*/

    this.setState({
      events: events.data.events
    })
  }

  render() {
    return(
      <EventsContext.Provider
        value={{
          events: this.state.events,
          getEvents: this.getEvents // pasamos la función
        }}
      >
        {this.props.children}
      </EventsContext.Provider>
    );
  }
}

export default EventsProvider;