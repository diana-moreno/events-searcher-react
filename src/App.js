import React from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import CategoriesProvider from './context/CategoriesContext';
import EventsProvider from './context/EventsContext';

function App() {
  return (
    <EventsProvider> {/*eventos puede rodear a categorías o al revés, no importa, ambos tendrán acceso a todo. Lo importante es que siempre hay que retornar un hijo.*/}
      <CategoriesProvider> {/*<Fragment> context lo sustituye*/}
        <Header />
        <div className='uk-container'>
          <Form />
        </div>
      </CategoriesProvider> {/*</Fragment>*/}
    </EventsProvider>
  );
}

export default App;
