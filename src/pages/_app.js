import Context from "@/context/context"
import "./style.css"
import {Analytics} from '@vercel/analytics/react';

const MyApp = ({ Component, pageProps }) => {

  return (
    <>
      <Context>
        <Component {...pageProps} />
        <Analytics/>
      </Context>
    </>
  )
}
export default MyApp
