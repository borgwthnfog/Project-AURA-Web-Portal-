import React from 'react'
export default function Roadmap(){
  return (
    <div>
      <h2 className='sec-title'>Roadmap</h2>
      <div className='card' style={{marginTop:12}}>
        <ol>
          <li>Month 1-2: Propulsion & Materials Prototyping</li>
          <li>Month 3-4: Exo-skeleton & Systems Integration</li>
          <li>Month 5: Tethered Testing</li>
          <li>Month 6: Free-Flight Testing & Validation</li>
        </ol>
      </div>
    </div>
  )
}
