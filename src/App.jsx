
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <div className='w-11/12 mx-auto p-4'>

        <Header></Header>
        <Blogs></Blogs>
      </div>
    </>
  )
}

export default App
