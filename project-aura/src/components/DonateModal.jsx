import React from 'react'

export default function DonateModal(){
  return (
    <div className="card">
      <h3>Support Tiers</h3>
      <p>Choose a tier and support Project AURA.</p>
      <div style={{display:'flex',gap:12,marginTop:12}}>
        <a className="btn btn-donate" href="https://www.paypal.com/donate?business=PLACEHOLDER">Donate €25</a>
        <a className="btn btn-donate" href="https://www.paypal.com/donate?business=PLACEHOLDER">Donate €150</a>
        <a className="btn btn-donate" href="https://www.paypal.com/donate?business=PLACEHOLDER">Donate €500</a>
      </div>
      <div style={{marginTop:12}}>
        <p style={{fontSize:12,opacity:0.9}}>Stripe / Crypto placeholders are available. Integrate your backend or Netlify functions to enable card/crypto checkout.</p>
      </div>
    </div>
  )
}
