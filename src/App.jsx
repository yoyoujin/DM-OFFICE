import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Question from './pages/Question';
import Start from './pages/Start';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/question' element={<Question />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
