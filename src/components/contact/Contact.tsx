import axios from 'axios'
import { useEffect, useState } from 'react'
import ContactForm from './ContactForm'
import ThankYouMessage from './ThankYouMessage'

const Contact = () => {
  const [complete, setComplete] = useState(false)
  const [profile, setProfile] = useState({
    contact: '',
    email: '',
    github: '',
  })

  const handleSubmitSuccess = () => {
    setComplete(true)
  }

  const handleReset = () => {
    setComplete(false)
  }

  return (
    <div className="contact-content">
      <div className="contact-content__form">
        {!complete ? (
          <ContactForm onSubmitSuccess={handleSubmitSuccess} />
        ) : (
          <ThankYouMessage onReset={handleReset} />
        )}
      </div>
    </div>
  )
}

export default Contact
