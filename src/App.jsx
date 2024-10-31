import { Outlet } from 'react-router-dom';

import { MenuProvider } from './contexts/Menu';

const App = () => {
  return (
    <section className="overflow-hidden">
      <MenuProvider>
        <Outlet/>
      </MenuProvider>
    </section>
  )
}

export default App;