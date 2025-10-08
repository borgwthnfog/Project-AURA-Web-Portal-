import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
  return (
    <header className="container header">
      <div className="logo">
        <div className="symbol"></div>
        <div>
          <div style={{fontWeight:900}}>AURA</div>
          <div style={{fontSize:12,opacity:0.8}}>Link to Long-Forgotten, Real Human Value</div>
        </div>
      </div>
      <nav className="nav">
        <Link to='/'>Home</Link>
        <Link to='/vision'>Vision</Link>
        <Link to='/technology'>Technology</Link>
        <Link to='/roadmap'>Roadmap</Link>
        <Link to='/join'>Join</Link>
        <Link to='/updates'>Updates</Link>
        <Link to='/press'>Press</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
    </header>
  )
}
