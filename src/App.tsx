import keypad from "./keypad.json";

function App() {

  return (
    <main className="calculator-frame theme1">
      <section>
        <nav>
          <h1>calc</h1>
          <div className="theme-slider">
            <p>theme</p>
            <div>
              <ul><li>1</li><li>2</li><li>3</li></ul>
              <div className="theme-slider-bar">
                <div className="theme-slider--1 hide"></div>
                <div className="theme-slider--2 hide"></div>
                <div className="theme-slider--3"></div>
              </div>
            </div>
          </div>
        </nav>
        <div className="display-screen">
          <p>3,444,555</p>
        </div>
        <ul className="keypad-box">
          {keypad.map(item => <li key={item}>{item}</li>)}
        </ul>
      </section>
    </main>
  )
}

export default App
