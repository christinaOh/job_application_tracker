import './App.css';
import Dashboard from './components/Dashboard';


function Header() {
  return (
    <header>
      <h2>LOGO</h2>
    </header>
  )
}

function Footer() {
  return (
    <footer>
      <p>Icons by <a href="https://freeicons.io/profile/730">Anu Rocks</a> 
          on <a href="https://freeicons.io">freeicons.io</a></p>
    </footer>
  )
}

function App() {
  return (
    <div>
      <Header/>
      <Dashboard/>
      <Footer/>
    </div>
  );
}

export default App;
