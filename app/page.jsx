import React from 'react'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Contact from './components/Contact'

const HomePage = () => {
  return (
    <>
      <div>
        <div className="card">
        <img src="https://w.forfun.com/fetch/ee/ee356e62c87dcd8544a0ec5bbd86b15a.jpeg" />

          <div className="card-content">
            <Hero />
          </div>
        </div>

        <div className="card">
          <img src='https://4kwallpapers.com/images/walls/thumbs_2t/12183.jpg' />
          <div className="card-content">
            <Skills />
          </div>
        </div>
        <div className="card">
        <img src="https://images.unsplash.com/photo-1519638399535-1b036603ac77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWVzdGhldGljJTIwYW5pbWV8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt='' />

          <div className="card-content">
            
            <Contact />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage