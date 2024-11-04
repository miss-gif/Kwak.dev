// TopScrollButton.js
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import { IconButton } from '@mui/material'
import { useEffect, useState } from 'react'

const TopScrollButton = () => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // 스크롤 위치가 300px 이상일 때 버튼 표시
      setShowButton(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    showButton && (
      <IconButton
        onClick={scrollToTop}
        sx={{
          position: 'fixed',
          bottom: '16px',
          right: '80px',
          backgroundColor: '#705746',
          color: 'white',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          zIndex: 1000,
        }}
      >
        <ArrowUpwardIcon />
      </IconButton>
    )
  )
}

export default TopScrollButton
