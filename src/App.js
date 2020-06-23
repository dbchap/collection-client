import React from 'react';
import 'bulma/css/bulma.css';
import appStyles from './App.module.css';
import Title from './components/title/title.component';
import FormInput from './components/form-input/form-input.component';
import ItemList from './components/item-list/item-list.component';
import { connect } from 'react-redux';
import { addCollectionitem, fetchCollectionitems } from './store/actions/collectionitems';
import FormSelect from './components/form-select/form-select.component';
import CustomButton from './components/custom-button/custom-button.component';


const columns = [0, 1];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemName: '',
      selectedColumn: -1,
    }
  }

  componentDidMount() {
    this.props.fetchCollectionitems();
    setInterval(() => this.props.fetchCollectionitems(), 5000);
  }

  handleChange = event => {
    const { value, name } = event.target;
    console.log("change ", name, value);
    this.setState({
      [name]: value
    });
  }

  addCollectionitem = event => {
    if (this.state.selectedColumn === -1) {
      alert('Please select a valid column!');
      return;
    } else if (this.state.itemName.trim() === '') {
      alert('Please enter an item name!');
      return;
    }
    this.props.addCollectionitem(this.state.itemName, this.state.selectedColumn);
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

              <FormSelect
                name="selectedColumn"
                options={columns.map(columnIdx => { return { name: columnIdx, value: columnIdx } })}
                value={this.state.selectedColumn}
                onChange={this.handleChange}
              />

              <CustomButton
                onClick={this.addCollectionitem}>
                Add Item
              </CustomButton>
            </div>
            {columns.map(columnIdx =>

              <div key={columnIdx} className="column">
                <ItemList
                  key={columnIdx}
                  columnIdx={columnIdx}
                  items={this.props.collectionitems.filter(item => item.columnIdx === columnIdx)} />
              </div>)
            }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    collectionitems: state.collectionitems.items,
    isLoading: state.collectionitems.loading,
    isSaving: state.collectionitems.saving,
    error: state.collectionitems.error
  }
}

const mapDispatchToProps = {
  addCollectionitem,
  fetchCollectionitems
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
