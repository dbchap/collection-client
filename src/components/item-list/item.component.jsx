import React from 'react';

const Item = ({label, columnIdx, itemIdx, ...otherProps}) => {
    return (
        <div style={{backgroundColor:itemIdx %2 === 0 ? 'grey' : 'white'}}>
            {label}
        </div>
    )
}

export default Item;