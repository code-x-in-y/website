import React from 'react'
import Head from 'next/head'
import {useRouter} from 'next/router'
import { MDXProvider } from '@mdx-js/react'
import { Header } from './header'


const components = {}

const Theme = ({...props}) => {
  
  const {children, ...rest} = props;

  return (
    <div className="">
      {children}
    </div>
  );
}

export default function Layout(props) {
  const { children, ...rest } = props
  const router = useRouter();
  const route = router.pathname;
  const {useHeader} = props;
  if (route.startsWith('/blog') || route.startsWith('/posts')) {
      return (
        <>
          <Theme>
            <Header />
            <div className="prose lg:prose-lg mx-auto px-4 py-8">
              <MDXProvider components={components}>{children}</MDXProvider>
            </div>
          </Theme>
        </>
      )
  }

    return (
      <>
        <Theme>
        {useHeader && <Header/>}
        {children}
        </Theme>
      </>
    )
}


const withLayout = (Component, config = {}) => (({...props}) => (
  <Layout {...config}>
    <Component {...props}/>
  </Layout>
));

export {withLayout};
