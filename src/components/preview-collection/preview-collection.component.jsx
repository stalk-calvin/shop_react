import React from 'react';

import Item from '../item/item.component';

import './preview-collection.styles.scss';

const PreviewCollection = ({ title, items, path}) => (

    <div className='collection-preview'>
        <a href={ path }><h1 className='title'>{ title.toUpperCase() }</h1></a>
        <div className='preview'>
        {
            items
            .filter((item, idx) => idx < 4)
            .map((item) => (
                <Item key={item.id} item={item} />
            ))
        }
        </div> 
    </div>
)

export default PreviewCollection;