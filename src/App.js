import 'bootstrap/dist/css/bootstrap.min.css'
// png, gif, jpg
// svg xml 태그니까 모듈, 따라서 import로 한다.
import logo from './logo.svg'
import './App.css';

const App = () => {
  return (
    <header id="hd">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className='col-4 col-md-2'>
          <a href="/" className='d-block'>
              <img src={logo} className='w-100' alt="" />
          </a>
        </h1>
        <ul id="gnb" className='d-flex'>
          <li><a href="">대메뉴</a></li>
          <li><a href="">대메뉴</a></li>
          <li><a href="">대메뉴</a></li>
          <li><a href="">대메뉴</a></li>
        </ul>
      </div>
    </header>
  );
}

export default App;
