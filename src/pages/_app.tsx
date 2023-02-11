//Styles
import 'styles/global.css'

interface ReactComponent {
    Component: React.FC
    pageProps: any
}

const MyApp: React.FC<ReactComponent> = function({ Component, pageProps }) {

  return <Component {...pageProps} />
}

export default MyApp