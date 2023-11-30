
import '../styles/css/main.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/google-font.css';
// import "../styles/css/flower.css"
// import Navbar from '../components/navbar/Navbar'

function MyApp({ Component, pageProps }) {
  return <>
    {/* <Navbar/> */}
    <Component {...pageProps} />
  </>
}

export default MyApp
