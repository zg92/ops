import './App.css';
import Navbar from './navbar/navbar.component';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './routes/home/home.component';
import SignIn from './routes/signin/signin.component';
import SignUp from './routes/signup/signup.component';
import ArticlePage from './routes/article/article-page.component';
import Settings from './routes/settings/settings.component';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path='signin' element={<SignIn />} />
            <Route path='signup' element={<SignUp />} />
            <Route path='article' element={<ArticlePage />} />
            <Route path='settings' element={<Settings />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
