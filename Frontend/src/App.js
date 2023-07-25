import './App.css';
import QuoteOptions from './components/QuoteOptions';
import react_logo from './assets/react_logo.png';

const App = ()=> {
  
  return (
    <div className="App">
      <header className="header">
      <h1>Random Quote Generator</h1>
      </header>
      <main className="main-content">
        <QuoteOptions/>
      </main>
      <footer className='Footer'>
      <p className='copyright'>COPYRIGHT &copy; {new Date().getFullYear()}, ALL RIGHTS RESERVED</p>
      <p>Made with ❤️ by <a href='https://6rmoq-4iaaa-aaaak-aezja-cai.icp0.io/' target='_blank' rel='noreferrer'>Dipesh Goel</a><i>  under mentorship of </i> <a href='https://www.linkedin.com/in/kanishkkhurana/' target='_blank' rel='noreferrer'>Kanishk Sir</a> ( <a href='https://academy.lumoslabs.co/' target='_blank' rel='noreferrer'>Lumos Academy</a> )  using <img src={react_logo} alt='React Logo' className='React-logo'/> </p>
      </footer>
      
    </div>
  );
};

export default App;
