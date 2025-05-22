
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BooksMarks/BookMarks'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <div className='w-11/12 mx-auto p-4'>
        <Header></Header>
        <div className='md:flex mt-5'>
          <Blogs></Blogs>
          <BookMarks></BookMarks>
        </div>
      </div>
    </>
  )
}

export default App
