import React from 'react';
import BookMark from '../BookMark/BookMark';

const BookMarks = ({ bookMarks }) => {

    return (
        <div className='md:w-1/3 ml-4 pt-2 mt-2'>
            <h2 className='text-2xl'>BookMarks Blogs: {bookMarks.length}</h2>
            {
                bookMarks.map(bookMark => <BookMark key={bookMark.id} bookMark={bookMark}></BookMark>)
            }
        </div>
    );
};

export default BookMarks;