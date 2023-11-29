
// Importo bootstrap y fontawesome
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Home from './pages/Home';


function App() {

  return (
    <>
      <div className='w-full'>
        <div className='bg-white lg:w-1/2 mx-auto border-2 rounded-2xl p-5 shadow-lg'>
          <Home />
        </div>

      </div>

    </>
  )
}

export default App
