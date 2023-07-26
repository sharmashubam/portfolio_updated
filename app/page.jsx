import React from 'react'
import Hero1 from './components/Hero1'

const HomePage = () => {
  return (
    <>
      <div>
        <div className="card">
          <img src="https://images.unsplash.com/photo-1519638399535-1b036603ac77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWVzdGhldGljJTIwYW5pbWV8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt='' />
          <div className="card-content">
            <Hero1 />
          </div>
        </div>
        
        <div className="card">card
          <img src='https://images4.alphacoders.com/973/9736.jpg' />
          <div className="card-content">
            another div
          </div>
        </div>
        <div className="card">
          <img src="https://wallpapersmug.com/download/3840x2160/d55e88/satoru-gojo-4k.jpeg" alt="" />
          <div className="card-content">
            this is also a div
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage