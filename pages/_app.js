import { Container } from "next/app";
import { GlobalStyle } from "styles/GlobalStyle";

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <GlobalStyle/>
      <Component {...pageProps} />
    </Container>
  )
}

export default MyApp
