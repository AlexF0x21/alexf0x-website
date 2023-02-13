import { useRouter } from 'next/router'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import clsx from 'clsx'
import { TbWorld } from 'react-icons/tb'

const languages = [
  { name: 'Русский', code: 'ru' },
  { name: 'English', code: 'en' },
]

const LanguageMenu = () => {
  const router = useRouter()

  const changeLanguage = (locale: string) => {
    return () => router.push(router.pathname, router.asPath, { locale })
  }

  return (
    <Menu as='div' className='relative'>
      <Menu.Button className={clsx('icon-button')}>
        <TbWorld />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items
          className={clsx(
            'absolute right-0 w-36 flex flex-col mt-2 py-2.5 bg-zinc-400/20 dark:bg-zinc-700/30 ring-1 ring-zinc-500/40 dark:ring-zinc-600/75 rounded-xl'
          )}
        >
          {languages.map((lang, idx) => (
            <Menu.Item key={idx}>
              {({ active }) => (
                <button
                  className={clsx(
                    'inline-flex gap-2 items-center p-2 transition',
                    active && 'bg-zinc-500/20 dark:bg-zinc-600/20',
                    router.locale === lang.code && 'text-orange-600'
                  )}
                  onClick={changeLanguage(lang.code)}
                >
                  {lang.name}
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default LanguageMenu
