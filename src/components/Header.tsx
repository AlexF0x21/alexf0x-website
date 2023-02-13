import clsx from 'clsx'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import LanguageMenu from '@/components/LanguageMenu'

const Header = () => {
	return (
		<header
			className={clsx('container py-2 flex justify-between items-center')}
		>
			<ThemeSwitcher />
			<LanguageMenu />
		</header>
	)
}

export default Header
