import './App.css'
import Header from './components/Header/Header'
import Home from './Sections/Home/Home'
import SchoolList from './Sections/SchoolList/SchoolList'

function App() {
  return (
    <>
      <div className='App'>

        <Header />

        <Home />
        <SchoolList />
      </div>
    </>
  )
}

export default App