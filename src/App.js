import React from 'react';
import 'bulma/css/bulma.css';
import appStyles from './App.module.css';
import Title from './components/title/title.component';
import FormInput from './components/form-input/form-input.component';
import ItemList from './components/item-list/item-list.component';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemName: ''
    }
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className={appStyles.outer}>
        <div className={appStyles.inner}>
          <div className={appStyles.header}>
            <div className={appStyles.appTitle}>
              Marvelous!
            </div>
            <div className={appStyles.appSubTitle}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
            </div>

            <Title
              style={{ marginBottom: '10px' }}
              label="ADD AN ITEM" />
          </div>
          <div className="columns">
            <div className="column">
              <FormInput
                name="itemName"
                type="text"
                label="ENTER ITEM"
                value={this.state.itemName}
                handleChange={this.handleChange}
              />
            </div>
            <div className="column">
              <ItemList
                columnIdx={0}
                items={[]} />
            </div>
            <div className="column">
              Fourth column
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
