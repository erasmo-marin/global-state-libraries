import React, { useState } from "react";
import LocalExample from "./local";
import FluxExample from "./flux";
import ReduxExample from "./redux";
import MobxExample from "./mobx";
import ContextExample from "./context";
import RecoilExample from "./recoil";
import "./App.scss";

function App() {
  const [hide, setHide] = useState(false);

  return (
    <div className="app">
      {!hide && (
        <>
          <LocalExample />
          <FluxExample />
          <ReduxExample />
          <MobxExample />
          <ContextExample />
          <RecoilExample />
        </>
      )}
      <button onClick={() => setHide(!hide)} className="hide-btn">
        {hide ? "Mount" : "Unmount"}
      </button>
    </div>
  );
}

export default App;
