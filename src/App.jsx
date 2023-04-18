import 'bootstrap/dist/css/bootstrap.min.css';
import { Main } from './components/Main';
import { Search } from './components/SearchForm';




function App() {

  
  return (
    <>  
      <div className="container">
        <Search />
        <Main />
      </div>    
    </>
    
  );
}

export default App;
