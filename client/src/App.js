import './App.css';
import Dashboard from './components/Dashboard';


function Header() {
  return (
    <header>
      <h2 class="logo">next</h2>
    </header>
  )
}

function Footer() {
  return (
    <footer>
      <p>Icons by <a href="https://freeicons.io/profile/730">Anu Rocks </a> 
        and illustration by <a href="https://freeicons.io/office-illustrations/account-imac-warehouse-illustration-290">Athul Mc </a>
        on <a href="https://freeicons.io">freeicons.io</a></p>
    </footer>
  )
}

function App() {
  return (
    <div class="page-container">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Azeret+Mono:wght@700&family=Plus+Jakarta+Sans:wght@400;500;700;800&display=swap');
      </style>
      <Header/>
      <Dashboard/>
      <Footer/>
    </div>
  );
}

export default App;
