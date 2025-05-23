import React from 'react';
import BookMark from '../BookMark/BookMark';

const BookMarks = ({ bookMarks, readingTime }) => {

    return (
        <div className='md:w-1/3 ml-4 pt-2 mt-2'>
            <div>
                <h3 className='text-3xl'>Reading Time : {readingTime} </h3>
            </div>
            <h2 className='text-2xl'>BookMarks Blogs: {bookMarks.length}</h2>
            {
                bookMarks.map(bookMark => <BookMark key={bookMark.id} bookMark={bookMark}></BookMark>)
            }
        </div>
    );
};

export default BookMarks;