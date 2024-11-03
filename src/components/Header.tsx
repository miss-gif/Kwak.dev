import { linkItems } from '@/mock/data'
import { Link } from 'react-router-dom'
import LinkItem from './header/LinkItem'
import { capitalizeFirstLetter } from '@/utils/utils'

const Header = () => {
  return (
    <header className="flex justify-between items-center h-20 px-10 bg-white shadow-md">
      <Link to={'/'}>
        <h1 className="text-2xl font-bold text-gray-800">로고</h1>
      </Link>

      <nav>
        <ul className="flex gap-6">
          {linkItems.map((item, index) => (
            <Link to={item.name} key={index}>
              <LinkItem>{capitalizeFirstLetter(item.name)}</LinkItem>
            </Link>
          ))}
        </ul>
      </nav>

      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
        로그인
      </button>
    </header>
  )
}

export default Header
