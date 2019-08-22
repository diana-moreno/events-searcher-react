import React, { Component } from 'react';
import { CategoriesConsumer } from '../../context/CategoriesContext'

class Form extends Component {
  state = {
    name: '',
    category: ''
  }

  // si el usuario agrega un evento o categoría
  handleDataEvents = e => {
    this.setState({
      [e.target.name] : e.target.value

    })
  }

  render() {
    return(
      <form>
        <fieldset className='uk-fieldset'>

          <legend className='uk-legend uk-text-center'> {/*legend crea un titulo para los campos de fieldset*/}
            Search your event by name or category
          </legend>

          <div className='uk-column-1-3@m uk-margin'> {/*3 columnas*/}

            <div className='uk-margin' uk-margin='true'>
              <input
                name='name'
                className='uk-input'
                type='text'
                placeholder='Event name or city'
                onChange={this.handleDataEvents}
              />
            </div>

            <div className='uk-margin' uk-margin='true'>
              <select
                name='category'
                className='uk-select'
                type='text'
                onChange={this.handleDataEvents}
              >
                <option value=''>-- Select category --</option>
                <CategoriesConsumer>
                  {(value) => ( /*tiene que ser una función*/
                    value.categories.map(category => (
                      <option
                        key={category.id}
                        value={category.id}
                      >
                        {category.name_localized}
                      </option>
                    ))
                  )}
                </CategoriesConsumer>
              </select>
            </div>

            <div>
              <input
                className='uk-button uk-button-danger'
                type='submit'
                value='Search events'
              />
            </div>

          </div>
        </fieldset>
      </form>
    );
  }
}

export default Form;