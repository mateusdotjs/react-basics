import './App.css';
import Header from './Header';
import Home from './Home';
import Produtos from './Produtos';

const App = () => {
let {pathname} = window.location;
  return (
    <>
      <Header/>
      {pathname == '/' ? <Home /> : <Produtos />}
    </>
  );
}

export default App;
