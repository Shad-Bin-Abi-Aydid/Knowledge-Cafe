import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className='md:w-1/3 ml-10 mt-10'>
            <p className='p-5 border border-2px-blue mb-8 rounded-xl text-xl text-blue-400 bg-gray-200'>Spent time on read: {readingTime}</p>
            <div className='bg-gray-400 p-5 rounded-xl'>
                <h2 className='text-2xl font-semibold mb-5'>Bookmarked Blogs: {bookmarks.length}</h2>

                {
                    bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark = {bookmark}></Bookmark>)
                }
            </div>
            
        </div>
    );
};

export default Bookmarks;