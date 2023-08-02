import "./App.css";
import { useEffect, useRef, useState } from "react";
import styles from "./app.module.css";
import { BeforeAfter } from "./components/before-after/before-after";
import { ShowHide } from "./components/show-hide/show-hide";
import { Menu } from "./components/menu/menu";

function App() {
  const [width, setWidth] = useState(0);
  const boxRef = useRef();
  const textEffect = (e) => {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    let iterations = 0;

    const interval = setInterval(() => {
      e.target.innerText = e.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iterations) {
            return e.target.dataset.value[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iterations >= e.target.innerText.length) {
        clearInterval(interval);
      }

      iterations += 1 / 3;
    }, 20);
  };

  const [mousePos, setMousePos] = useState({});

  const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
      setWidth((event.clientX / window.innerWidth) * 100);
 
  };
  
  useEffect(() => {

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);



  return (
    <div className="App" >
      <h2 data-value="Before/After" onMouseOver={textEffect}>
        Before/After
      </h2>
      <BeforeAfter />
      <div>
        <marquee scrollamount="30" direction="left" behavior="scroll">
          hello hello hello hello hello hello hello hello hello hello
        </marquee>
        <marquee scrollamount="30" direction="right">
          hello hello hello hello hello hello hello hello hello hello
        </marquee>
      </div>
      <h2 data-value="Show/Hide" onMouseOver={textEffect}>
        Show / Hide
      </h2>
      <ShowHide />
      <Menu />

      <div className={styles.wrapper} onMouseOver={handleMouseMove} >
        <div ref={boxRef}  className={`${styles.box} ${styles.right}`} id="right">
          <h2 className={styles.boxTitle}>good</h2>
        </div>
        <div className={`${styles.box} ${styles.left}`}   id="left" style={{ width: `${width}%` }}>
          <h2 className={styles.boxTitle}>or bad</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
