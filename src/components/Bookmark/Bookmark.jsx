import React from 'react';

const Bookmark = ({bookmark}) => {
    return (
        <div className='text-xl bg-gray-300 rounded-xl mb-5 p-2'>
            <p>{bookmark}</p>
        </div>
    );
};

export default Bookmark;