import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'
import Footer from '../components/Footer'
import Header from '../components/Header'

import TanStackQueryProvider from '../integrations/tanstack-query/root-provider'


import '../i18n'
import { useLanguageStore } from '../stores/language-store'
import appCss from '../styles.css?url'

import type { QueryClient } from '@tanstack/react-query'

interface MyRouterContext {
  queryClient: QueryClient
}

const THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme-storage');if(stored){var parsed=JSON.parse(stored);var state=parsed&&parsed.state;var mode=(state&&(state.mode==='light'||state.mode==='dark'||state.mode==='auto'))?state.mode:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;}else{var prefersDark2=window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.add(prefersDark2?'dark':'light');document.documentElement.style.colorScheme=prefersDark2?'dark':'light';}}catch(e){}})();`

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Xylentis - VPS, Cloud Server & Digital Solutions for Business',
      },
      {
        name: 'description',
        content:
          'Professional cloud VPS, dedicated servers, and digital solutions with 99.9% uptime SLA. Enterprise-grade infrastructure for your business.',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const { language } = useLanguageStore()
  return (
    <html lang={language} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <HeadContent />
      </head>
      <body className="font-sans antialiased [overflow-wrap:anywhere] selection:bg-[rgba(59,130,246,0.2)]" suppressHydrationWarning>
        <TanStackQueryProvider>
          <Header />
          {children}
          <Footer />
          {/* <TanStackDevtools
            config={{
              position: 'bottom-right',
            }}
            plugins={[
              {
                name: 'Tanstack Router',
                render: <TanStackRouterDevtoolsPanel />,
              },
              TanStackQueryDevtools,
            ]}
          /> */}
        </TanStackQueryProvider>
        <Scripts />
      </body>
    </html>
  )
}
