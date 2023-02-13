import clsx from 'clsx'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { TbMoon, TbSun } from 'react-icons/tb'

const ThemeSwitcher = () => {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const switchTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button className={clsx('icon-button')} onClick={switchTheme}>
      {resolvedTheme === 'dark' ? <TbMoon /> : <TbSun />}
    </button>
  )
}

export default ThemeSwitcher
