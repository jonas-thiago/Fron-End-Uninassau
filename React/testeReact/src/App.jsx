import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <main>
      <header>
        <h1>Vite + React</h1>
      </header>

      <section>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRmdMrv3Fl8hK2pmF-_mDbKaD-6J5W1XTRxw&s" alt="Grogu concentrado usando a Força" id='grogu' />
        <ul>
          <li>Meditar com o Luke</li>
          <li>Roubar ovos da rã</li>
          <li>Levitar peças da nave do Mando</li>
        </ul>
        <Formulario />
      </section>
    </main>
  )
}

function Formulario() {
  return (
    <form className='form-evento'>
      <h2>Preencha para criar um evento</h2>
      <fieldset>
        <label htmlFor='nome'>Qual Nome do Evento?</label>
        <input type='text' id='nome'/>
      </fieldset>

    </form>
  )
}

export default App
