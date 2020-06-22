import React from 'react';
import Item from './item.component';
import Title from '../title/title.component';

class ItemList extends React.Component {

    render() {
        const { columnIdx } = this.props;
        return (
            <div>
                <Title label={`Column ${columnIdx+1}`} />
                {this.props.items.map(
                    item => <Item {...item} />
                )}
            </div>
        );
    }
}

export default ItemList;