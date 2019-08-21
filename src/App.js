import React from 'react';
import Header from './components/Header/Header';
import CategoriesProvider from './context/CategoriesContext';

function App() {
  return (
    <CategoriesProvider> {/*<Fragment> context lo sustituye*/}
      <Header />
    </CategoriesProvider> //</Fragment>
  );
}

export default App;
