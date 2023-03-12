import clsx from 'clsx'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import LanguageMenu from '@/components/LanguageMenu'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { TbHome } from 'react-icons/tb'

const Header = () => {
  const router = useRouter()

  return (
    <header
      className={clsx('container py-2 flex justify-between items-center')}
    >
      <div className={clsx('flex gap-2')}>
        <ThemeSwitcher />
        {router.asPath.startsWith('/post') && (
          <Link className={clsx('icon-button')} href='/'>
            <TbHome />
          </Link>
        )}
      </div>
      <LanguageMenu />
    </header>
  )
}

export default Header
