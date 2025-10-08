import React from 'react'
export default function MailerLiteForm(){
  return (
    <form className='card' onSubmit={(e)=>{e.preventDefault();alert('Form submitted (placeholder)')}}>
      <label style={{display:'block',marginBottom:8}}>Join our mailing list</label>
      <input placeholder='Email address' style={{padding:10,borderRadius:8,width:'100%',marginBottom:8}} />
      <button className='btn btn-mail' type='submit'>Subscribe</button>
    </form>
  )
}
