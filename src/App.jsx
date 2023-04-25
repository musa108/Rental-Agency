import './App.css';
import Details from './Components/Details';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Property from './Components/Property/Property';
import PropertyAdditon from './Components/Property/Property-Additon';
import PropertyButton from './Components/Property/Property-button';
import PropertyDescription from './Components/Property/Property-Description';
import PropertyOwner from './Components/Property/Property-Owner';


function App() {

  return (
    <div className="App">
      <Header/>
      <Details/>
      <Property/>
      <PropertyButton/>
      <PropertyDescription/>
      <PropertyAdditon/>
      <PropertyOwner/>
      <Footer/>
    </div>
  )
}

export default App
