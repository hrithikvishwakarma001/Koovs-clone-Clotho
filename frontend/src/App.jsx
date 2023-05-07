
// import NextUIAdminPage from "./0568";

import WithSubnavigation from './0571/component/Nav2';
import './App.css'
import AllRoutes from "./router/AllRoutes"
import { useMediaQuery } from '@chakra-ui/react'


import NextUIAdminPage from "./0568";




function App() {

  return (
    <>

      <WithSubnavigation />
      <AllRoutes />
    </>
  )
}

export default App;
