import './App.scss'
import { Arrowicon } from './components/arrow-icon'

function App() {

  return (
  <main>
    <header className='header-container'> 
      <img src="./logo-img.svg" alt=""/>
      <nav className='menu-options'> 
        <a href="">Oque nos fazemos</a>
        <a href="">Como funciona</a>
        <a href="">Portifolio</a>
      </nav>
      <button>
        <div className='btn-face-white'>
          Nos contact
          <Arrowicon/>
        </div>
        <div className='btn-face-purple'>
          Nos contacte
          <Arrowicon/>
        </div>
      </button>
    </header>
    <div className='content-container'>
      <div className='heading'>
        <h2>Vamos crescer sua</h2>
        <h2> presença social </h2>
      </div>
      <div className='buble target'>
        🎯
      </div>
      <div className='buble shopp'>
        🛍️
      </div>
      <div className='buble rocket'>
        🚀
      </div>
      <div className='buble fire'>
        🔥
      </div>
    </div>
  </main>
  )
}

export default App
