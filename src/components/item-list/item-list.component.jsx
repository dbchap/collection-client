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
                    (item, itemIdx) => <Item itemIdx={itemIdx} key={item._id} {...item} />
                )}
            </div>
        );
    }
}

export default ItemList;