const getCurrentYear = () => {
  return new Date().getFullYear()
}

const Footer = () => {
  const currentYear = getCurrentYear()

  return (
    <footer className="footer">
      <div className="flex gap-4"></div>
      <p> ⓒ {currentYear} miss-gif. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer
