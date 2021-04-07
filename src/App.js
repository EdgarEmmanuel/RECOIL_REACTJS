import './App.css';
import React,{Suspense} from 'react';
import {RecoilRoot} from "recoil";
import SongsComponent from "./components/SongsComponent";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <h1>Recoil Example</h1>
          <Suspense fallback={<span>Loading...</span>}>
            <SongsComponent/>
          </Suspense>
      </RecoilRoot>
    </div>
  );
}

export default App;
