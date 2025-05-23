import React from 'react';

const BookMarks = ({ bookMarks }) => {

    return (
        <div className='md:w-1/3'>
            <h2 className='text-2xl'>BookMarks Blogs: {bookMarks.length}</h2>
        </div>
    );
};

export default BookMarks;