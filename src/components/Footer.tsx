import clsx from 'clsx'
import { Trans, useTranslation } from 'next-i18next'
import Link from 'next/link'
import { getFullYear } from '@/utils/date'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className={clsx('container flex flex-wrap justify-between py-2')}>
      <p>Copyright &copy; {getFullYear()}</p>
      <p>
        <Trans
          i18nKey='email'
          components={{
            email: (
              <Link
                className={clsx('link')}
                href='mailto:alexf0xdev@gmail.com'
              />
            ),
          }}
        />
      </p>
    </footer>
  )
}

export default Footer
