import { Outlet } from 'react-router-dom';


const App = () => {
  return (
    <section className="overflow-hidden">
      <Outlet/>
    </section>
  )
}

export default App;