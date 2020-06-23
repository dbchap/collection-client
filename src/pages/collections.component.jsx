import React from 'react';

import CustomButton from '../components/custom-button/custom-button.component';
import FormInput from '../components/form-input/form-input.component';
import FormSelect from '../components/form-select/form-select.component';
import ItemList from '../components/item-list/item-list.component';
import Title from '../components/title/title.component';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { addCollectionitem } from '../store/actions/collectionitems';

const columns = [0, 1];

class Collections extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            itemName: '',
            selectedColumn: -1,
            searchTerm: '',
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
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
            <div>
                <Title
                    style={{ marginBottom: '10px' }}
                    label="ADD AN ITEM" />
                <div className="columns">
                    <div className="column is-3">
                        <FormInput
                            name="itemName"
                            type="text"
                            label="ENTER ITEM"
                            value={this.state.itemName}
                            handleChange={this.handleChange}
                        />

                        <FormSelect
                            name="selectedColumn"
                            options={columns.map(columnIdx => { return { name: 'Column ' + (columnIdx + 1), value: columnIdx } })}
                            value={this.state.selectedColumn}
                            onChange={this.handleChange}
                        />

                        <CustomButton
                            style={{ marginTop: '8vw' }}
                            onClick={this.addCollectionitem}>
                            ADD ITEM
              </CustomButton>

                        <div style={{ marginTop: '4vw' }}>
                            <div style={{ color: '#fff', fontWeight: 'bold' }}>
                                SEARCH AN ITEM
                </div>
                            <FormInput
                                name="searchTerm"
                                type="text"
                                label="SEARCH"
                                iconRight={faSearch}
                                value={this.state.searchTerm}
                                handleChange={this.handleChange}
                            />
                        </div>
                    </div>

                    <div className="column">
                        <div className="columns" style={{ padding: 0, margin: 0, backgroundColor: '#fff' }}>
                            {columns.map(columnIdx =>
                                <div key={columnIdx} className="column">
                                    <ItemList
                                        key={columnIdx}
                                        columnIdx={columnIdx}
                                        items={this.props.collectionitems.filter(item =>
                                            item.columnIdx === columnIdx
                                            && (this.state.searchTerm ? item.label.includes(this.state.searchTerm) : true)
                                        )} />
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
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
    addCollectionitem
}

export default connect(mapStateToProps, mapDispatchToProps)(Collections);