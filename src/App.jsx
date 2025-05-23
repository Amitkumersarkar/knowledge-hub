
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BooksMarks/BookMarks'
import Header from './components/Header/Header'

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmarks = (blog) => {
    // console.log(blog);
    const newBookMarks = [...bookMarks, blog];
    setBookMarks(newBookMarks);
  }

  const handleMarkAsRead = (time) => {
    // console.log('mark as read', time);
    // setReadingTime(readingTime + time);
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
  }
  return (
    <>
      <div className='w-11/12 mx-auto p-4'>
        <Header></Header>
        <div className='md:flex mt-5'>
          <Blogs handleMarkAsRead={handleMarkAsRead} handleAddToBookmarks={handleAddToBookmarks}></Blogs>
          <BookMarks readingTime={readingTime} bookMarks={bookMarks}></BookMarks>
        </div>
      </div>
    </>
  )
}

export default App
