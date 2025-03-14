import { useState } from 'react'
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Blogs from './components/Header/Blogs/Blogs'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (time,id) =>{
    setReadingTime(readingTime + time);
    
    // remove the selected blog from the bookmark
    
    const updateBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(updateBookmarks);
  }

  return (
    <>
        <Header></Header>
        <div className='md:flex max-w-7xl mx-auto'>
          <Blogs handleAddToBookmark = {handleAddToBookmark} handleMarkAsRead = {handleMarkAsRead}></Blogs>
          <Bookmarks bookmarks = {bookmarks} readingTime ={readingTime}></Bookmarks>
        </div>
        
      
    </>
  )
}

export default App
