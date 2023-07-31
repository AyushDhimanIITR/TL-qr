import Context from "@/context/context"
import "./style.css"

const MyApp = ({ Component, pageProps }) => {

  return (
    <>
      <Context>
        <Component {...pageProps} />
      </Context>
    </>
  )
}
export default MyApp
