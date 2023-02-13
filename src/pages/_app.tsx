import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google'
import { ThemeProvider } from 'next-themes'
import { appWithTranslation } from 'next-i18next'
import '/node_modules/flag-icons/css/flag-icons.min.css'
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute='class'>
      <div className={inter.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </ThemeProvider>
  )
}

export default appWithTranslation(App)
