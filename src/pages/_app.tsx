import { GlobalStyes } from "../../shared/global"


const App = ({ Component, pageProps }) => (
  <>
  {GlobalStyes} 
    <Component {...pageProps} />
  </>
)

export default App
