import "./App.css";
import 'antd/dist/antd.css';
import { Texts } from './components/Texts/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Text } from "./components/Text";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Texts />} />
          <Route path="/:id" element={<Text />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
