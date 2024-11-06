import { useEffect } from 'react'

const useHeaderScroll = () => {
  /**
   * Handle scroll event
   * 스크롤 이벤트가 발생 할 때,
   * 헤더의 스크롤 여부를 확인하고 클래스를 추가하거나 제거합니다.
   */

  const handleScroll = () => {
    const header = document.querySelector('.header')
    if (header) {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      if (scrollTop > 0) {
        header.classList.add('scrolled')
      } else {
        header.classList.remove('scrolled')
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return handleScroll
}

export default useHeaderScroll
