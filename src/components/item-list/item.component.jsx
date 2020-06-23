import React from 'react';

import * as styles from './item.module.css';
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { deleteCollectionitem } from '../../store/actions/collectionitems';
import { connect } from 'react-redux';


class Item extends React.Component {

    handleRemove = (e) => {
        this.props.deleteCollectionitem(this.props._id);
    }

    render() {
        const { label, itemIdx } = this.props;
        return (
            <div className={styles.item} style={{ backgroundColor: itemIdx % 2 === 0 ? '#f2f3f4' : '#bcc0c7' }}>
                {label}

                <div className={styles.itemRemove}>
                    <FontAwesomeIcon onClick={this.handleRemove} icon={faWindowClose} />
                </div>

            </div>
        )
    }
}

const mapDispatchToProps = {
    deleteCollectionitem
}

export default connect(null, mapDispatchToProps)(Item);