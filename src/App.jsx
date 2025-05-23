
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BooksMarks/BookMarks'
import Header from './components/Header/Header'

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const handleAddToBookmarks = (blog) => {
    // console.log(blog);
    const newBookMarks = [...bookMarks, blog];
    setBookMarks(newBookMarks);
  }
  return (
    <>
      <div className='w-11/12 mx-auto p-4'>
        <Header></Header>
        <div className='md:flex mt-5'>
          <Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs>
          <BookMarks bookMarks={bookMarks}></BookMarks>
        </div>
      </div>
    </>
  )
}

export default App
