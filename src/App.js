import './App.css';
// import chakra provider
import { ChakraProvider } from '@chakra-ui/react'
import Routing from './routing/Routing';
// toastify
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
     <ChakraProvider>
       <ToastContainer/>
     <Routing/>
     </ChakraProvider>
    </div>
  );
}

export default App;
