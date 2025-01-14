import './App.css'
import Header from './components/Header/Header'
import Agenda from './Sections/Agenda/Agenda'
import CompanyLogoList from './Sections/CompanyLogoList/CompanyLogoList'
import GeneratorSection from './Sections/Generator/GeneratorSection'
import Home from './Sections/Home/Home'
import SchoolList from './Sections/SchoolList/SchoolList'

function App() {
  return (
    <>
      <div className='App'>
        <Header />
        <Home />
        <SchoolList />
        <GeneratorSection />
        <CompanyLogoList />
        <Agenda />
      </div>
    </>
  )
}

export default App