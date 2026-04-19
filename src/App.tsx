import { useState } from "react";
import keypad from "./utils/keypad.json";

function App() {

  const savedTheme = localStorage.getItem("theme")
  const [currentTheme, setCurrentTheme] = useState<string>(savedTheme || "theme1")
  const [displayText, setDisplayText] = useState("")


  function handleSelectedTheme(theme: string) {
    localStorage.setItem("theme", theme)
    setCurrentTheme(theme)
  }

  function handleSelectedButton(item: string) {
    try {

      if (item == "=") {
        const result = eval(displayText)
        setDisplayText(result)
        return;
      }

      if (item == "reset") {
        setDisplayText("")
        return;
      }

      if (item == "del") {
        const output = displayText.toString().slice(0, -1)
        setDisplayText(output)
        return;
      }

      setDisplayText((prevState) => prevState += item)
    }
    catch {
      setDisplayText("invalid")
    }

  }

  return (
    <main className={`calculator-frame ${currentTheme}`}>
      <section>
        <nav>
          <h1>calc</h1>
          <div className="theme-slider">
            <p>theme</p>
            <div>
              <ul><li>1</li><li>2</li><li>3</li></ul>
              <div className="theme-slider-bar">
                {["theme1", "theme2",
                  "theme3"].map(item => <button key={item} className={`${currentTheme === item ? "show" : "hide"}`} onClick={() => handleSelectedTheme(item)}></button>)}
              </div>
            </div>
          </div>
        </nav>
        <div className="display-screen">
          <p>{displayText}</p>
        </div>
        <ul className="keypad-box">
          {keypad.map(item => <li key={item} onClick={() => handleSelectedButton(item)}>{item}</li>)}
        </ul>
      </section>
    </main>
  )
}

export default App
