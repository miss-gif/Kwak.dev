import { linkItems } from '@/mocks/data'
import { capitalizeFirstLetter } from '@/utils/utils'
import MenuIcon from '@mui/icons-material/Menu'
import classNames from 'classnames'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close'

type NavToggleProps = {
  toggleDrawer: () => void
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const NavToggle = ({ toggleDrawer, isOpen, setIsOpen }: NavToggleProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <>
      <button className="block md:hidden p-2" onClick={toggleDrawer}>
        <MenuIcon />
      </button>

      <ul
        className={classNames(
          'fixed top-0 right-0 w-full h-full bg-black bg-opacity-90 z-50 overflow-hidden transform transition-transform duration-500 ease-in-out text-white text-xl uppercase font-medium flex flex-col justify-center items-center',
          {
            'translate-x-0': isOpen,
            'translate-x-full': !isOpen,
          },
        )}
      >
        {linkItems.map((item, index) => (
          <li key={index} className="text-center py-4">
            <Link
              className="block py-4 text-3xl text-white hover:text-fire font-bold transition-colors duration-100"
              to={item.path}
              onClick={closeMenu}
            >
              {capitalizeFirstLetter(item.name)}
            </Link>
          </li>
        ))}
        {/* 닫기 버튼 */}
        <button
          className="absolute top-6 right-8 text-white text-3xl"
          onClick={closeMenu}
        >
          <CloseIcon />
        </button>
      </ul>
    </>
  )
}

export default NavToggle
