import React from 'react';
import Header from './components/Header/Header';
import CategoriesProvider from './context/CategoriesContext';
import Form from './components/Form/Form';

function App() {
  return (
    <CategoriesProvider> {/*<Fragment> context lo sustituye*/}
      <Header />
      <div className='uk-container'>
        <Form />
      </div>
    </CategoriesProvider> //</Fragment>
  );
}

export default App;
