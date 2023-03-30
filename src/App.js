import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header/index';
import Footer from './components/Footer/index';
import Routes from './Routes';
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  }
})

function App() {
  return (
    <ChakraProvider theme={theme} >
      <Router>
        <Header />
        <Routes />
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
