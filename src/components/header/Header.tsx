import Container from '@/components/common/Container'
import useHeaderScroll from '@/hooks/useHeaderScroll'
import { Theme } from '@/types/theme'
import { linkItems } from '@mocks/data'
import { capitalizeFirstLetter } from '@utils/utils'
import classNames from 'classnames'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import BasicButtons from '../common/Button'
import NavToggle from './NavToggle'
import ToggleThemeSwitch from './ToggleThemeSwitch'

const Header = ({ toggleTheme }: Theme) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (itemName: string | null) => {
    setSelectedItem(itemName)
  }

  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }

  useHeaderScroll()

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
                    onClick={() => handleClick(item.name)}
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
            <NavToggle
              toggleDrawer={toggleDrawer}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
