import React, { Component } from 'react';
import axios from 'axios';

//create context
const CategoriesContext = React.createContext();
export const CategoriesConsumer = CategoriesContext.Consumer;

class CategoriesProvider extends Component {

  token = 'H3XNKDXWLEAP3RPVC4X6'

  state = {
    categories: []
  }

  componentDidMount() {
    this.getCategories();
  }

  getCategories = async () => { //await siempre tiene que ir con una función asincrona. Es lo mismo que la forma antigua de get y then.
    let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}`/*&locale=es_ES*/ //ojo, no son comillas, son: ``
    let categories = await axios.get(url); // hace la consulta, el método get viene por defecto, se puede poner o no.
    //console.log(categories);
    this.setState({
      categories: categories.data.categories
    })
  }

  render() {
    return(
      <CategoriesContext.Provider
        value={{
          categories : this.state.categories,
        }}
      >
        {this.props.children} {/*En APP.js, el hijo tiene que estar en su lugar*/}
      </CategoriesContext.Provider>
    );
  }
}

export default CategoriesProvider;