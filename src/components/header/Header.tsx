import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '@/components/common/Container'
import { Theme } from '@/types/theme'
import { linkItems } from '@mocks/data'
import { capitalizeFirstLetter } from '@utils/utils'
import BasicButtons from '../common/Button'
import NavToggle from './NavToggle'
import ToggleThemeSwitch from './ToggleThemeSwitch'
import { handleScroll } from './handleScroll'

import classNames from 'classnames'

const Header = ({ toggleTheme }: Theme) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null)

  const handleClick = (itemName: string | null) => {
    setSelectedItem(itemName)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className="header fixed top-0 left-0 w-full flex items-center justify-between h-20 z-50 transition-shadow duration-300">
      <Container>
        <div className="flex items-center justify-between w-full px-4">
          <Link to={'/'} onClick={() => handleClick(null)}>
            <h1 className="text-2xl font-bold">Portfolio</h1>
          </Link>

          <nav className="hidden md:block">
            <ul className="flex gap-6">
              {linkItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className={classNames('hover:text-blue-600', {
                      'font-bold': selectedItem === item.name,
                    })}
                    onClick={() => handleClick(item.name)} // 클릭 시 선택된 항목을 설정
                  >
                    {capitalizeFirstLetter(item.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center md:gap-6 gap-2">
            <div className="flex md:gap-2 gap-2 items-center">
              <BasicButtons>로그인</BasicButtons>
              <ToggleThemeSwitch onClick={toggleTheme} />
            </div>
            <NavToggle />
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
