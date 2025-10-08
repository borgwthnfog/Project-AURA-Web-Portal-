import React from 'react'
import CrystalLogo from '../components/CrystalLogo'

export default function Home(){
  return (
    <div>
      <section className='hero card' style={{display:'flex',alignItems:'center',gap:24}}>
        <div className='hero-left'>
          <h1 className='h1'><span className='crystal'>AURA</span> — Link to Long-Forgotten, Real Human Value</h1>
          <p style={{marginTop:18,color:'#cfe6ff'}}>Project AURA merges XR, AI, and advanced materials to expand human potential.</p>
        </div>
        <div>
          <CrystalLogo />
        </div>
      </section>

      <section className='section'>
        <div className='sec-title'>Overview</div>
        <div className='card' style={{marginTop:12}}>This multi-page portal includes Vision, Technology, Roadmap, Join, Updates, Press, and Contact.</div>
      </section>
    </div>
  )
}
