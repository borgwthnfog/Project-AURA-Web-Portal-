import React from 'react'
import DonateModal from '../components/DonateModal'
import MailerLiteForm from '../components/MailerLiteForm'

export default function Join(){
  return (
    <div>
      <h2 className='sec-title'>Join / Donate</h2>
      <div style={{display:'grid',gridTemplateColumns:'1fr 360px',gap:18,marginTop:12}}>
        <div className='card'>
          <h3>Support the mission</h3>
          <p>By donating you gain early access, recognition, and support the prototyping phase.</p>
        </div>
        <div>
          <MailerLiteForm />
          <div style={{height:12}}></div>
          <DonateModal />
        </div>
      </div>
    </div>
  )
}
