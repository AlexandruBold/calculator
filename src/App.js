import { useState, useEffect } from "react";
import "./App.css";

function App() {
  let [result, setResult] = useState("");
  let [display, setDisplay] = useState("0");
  let [n1, setN1] = useState("");
  let [n2, setN2] = useState("");
  let [equal, setEqual] = useState("");
  let [operation, setOperation] = useState("");

  let final = useEffect(() => {
    if (equal == "=") {
      setOperation("");
      setN2("");
      setEqual("");
      setN1(result);
    }
  });
  let ecran = useEffect(() => {
    if (operation == "" && n1 != "" && n2 == "" && equal == "") {
      setDisplay(n1);
    }
    if (operation != "" && n1 != "" && n2 == "" && equal == "") {
      setDisplay(operation);
    }
    if (operation != "" && n1 != "" && n2 != "" && equal == "") {
      setDisplay(n2);
    }
    if (operation != "" && n1 != "" && n2 != "" && equal == "=") {
      setDisplay(result);
    }
  });

  let math = useEffect(() => {
    if (operation == "+" && n1 != "" && n2 != "") {
      setResult(String(Number(n1) + Number(n2)));
    }
    if (operation == "-" && n1 != "" && n2 != "") {
      setResult(String(Number(n1) - Number(n2)));
    }
    if (operation == "x" && n1 != "" && n2 != "") {
      setResult(String(Number(n1) * Number(n2)));
    }
    if (operation == "/" && n1 != "" && n2 != "") {
      setResult(String(Number(n1) / Number(n2)));
    }

    if (operation == "R") {
      setResult("");
      setOperation("");
      setN2("");
      setEqual("");
      setN1("");
      setDisplay("0");
    }
  });

  return (
    <div className="container">
      <div className="calculator">
        <div className="display">
          <div className="content">{display}</div>
          <button
            className="pct"
            onClick={() => {
              if (n1 == "") {
                setN1("0.");
              }
              if (display == n1 && !n1.split("").includes(".")) {
                setN1(n1 + ".");
              }
              if (display == n2 && !n2.split("").includes(".")) {
                setN2(n2 + ".");
              }
            }}
          >
            .
          </button>
        </div>
        <div className="buttons">
          <div className="numbers">
            <button
              onClick={() => {
                if (operation == "" && n1 == "") {
                  setN1("9");
                } else if (operation == "" && n1 != "") {
                  setN1(n1 + 9);
                }
                if (operation != "" && n1 !== "") {
                  setN2("9");
                }
                if (display == n2 && equal == "") {
                  setN2(n2 + 9);
                }
                if (display == n2 && equal == "" && n2 == "0") {
                  setN2(n2 + "." + 9);
                }
              }}
            >
              9
            </button>
            <button
              onClick={() => {
                if (operation == "" && n1 == "") {
                  setN1("8");
                } else if (operation == "" && n1 != "") {
                  setN1(n1 + 8);
                }
                if (operation != "" && n1 !== "") {
                  setN2("8");
                }
                if (display == n2 && equal == "") {
                  setN2(n2 + 8);
                }
                if (display == n2 && equal == "" && n2 == "0") {
                  setN2(n2 + "." + 8);
                }
              }}
            >
              8
            </button>
            <button
              onClick={() => {
                if (operation == "" && n1 == "") {
                  setN1("7");
                } else if (operation == "" && n1 != "") {
                  setN1(n1 + 7);
                }
                if (operation != "" && n1 !== "") {
                  setN2("7");
                }
                if (display == n2 && equal == "") {
                  setN2(n2 + 7);
                }
                if (display == n2 && equal == "" && n2 == "0") {
                  setN2(n2 + "." + 7);
                }
              }}
            >
              7
            </button>
            <button
              onClick={() => {
                if (operation == "" && n1 == "") {
                  setN1("6");
                } else if (operation == "" && n1 != "") {
                  setN1(n1 + 6);
                }
                if (operation != "" && n1 !== "") {
                  setN2("6");
                }
                if (display == n2 && equal == "") {
                  setN2(n2 + 6);
                }
                if (display == n2 && equal == "" && n2 == "0") {
                  setN2(n2 + "." + 6);
                }
              }}
            >
              6
            </button>
            <button
              onClick={() => {
                if (operation == "" && n1 == "") {
                  setN1("5");
                } else if (operation == "" && n1 != "") {
                  setN1(n1 + 5);
                }
                if (operation != "" && n1 !== "") {
                  setN2("5");
                }
                if (display == n2 && equal == "") {
                  setN2(n2 + 5);
                }
                if (display == n2 && equal == "" && n2 == "0") {
                  setN2(n2 + "." + 5);
                }
              }}
            >
              5
            </button>
            <button
              onClick={() => {
                if (operation == "" && n1 == "") {
                  setN1("4");
                } else if (operation == "" && n1 != "") {
                  setN1(n1 + 4);
                }
                if (operation != "" && n1 !== "") {
                  setN2("4");
                }
                if (display == n2 && equal == "") {
                  setN2(n2 + 4);
                }
                if (display == n2 && equal == "" && n2 == "0") {
                  setN2(n2 + "." + 4);
                }
              }}
            >
              4
            </button>
            <button
              onClick={() => {
                if (operation == "" && n1 == "") {
                  setN1("3");
                } else if (operation == "" && n1 != "") {
                  setN1(n1 + 3);
                }
                if (operation != "" && n1 !== "") {
                  setN2("3");
                }
                if (display == n2 && equal == "") {
                  setN2(n2 + 3);
                }
                if (display == n2 && equal == "" && n2 == "0") {
                  setN2(n2 + "." + 3);
                }
              }}
            >
              3
            </button>
            <button
              onClick={() => {
                if (operation == "" && n1 == "") {
                  setN1("2");
                } else if (operation == "" && n1 != "") {
                  setN1(n1 + 2);
                }
                if (operation != "" && n1 !== "") {
                  setN2("2");
                }
                if (display == n2 && equal == "") {
                  setN2(n2 + 2);
                }
                if (display == n2 && equal == "" && n2 == "0") {
                  setN2(n2 + "." + 2);
                }
              }}
            >
              2
            </button>
            <button
              onClick={() => {
                if (operation == "" && n1 == "") {
                  setN1("1");
                } else if (operation == "" && n1 != "") {
                  setN1(n1 + 1);
                }
                if (operation != "" && n1 !== "") {
                  setN2("1");
                }
                if (display == n2 && equal == "") {
                  setN2(n2 + 1);
                }
                if (display == n2 && equal == "" && n2 == "0") {
                  setN2(n2 + "." + 1);
                }
              }}
            >
              1
            </button>

            <button onClick={() => setOperation("R")}>R</button>
            <button
              onClick={() => {
                if (operation == "" && n1 == "") {
                  setN1("0.");
                }

                if (operation == "" && n1 != "") {
                  setN1(n1 + 0);
                }
                if (operation != "" && n1 != "" && equal == "") {
                  setN2("0");
                }

                if (display == n2 && equal == "") {
                  setN2(n2 + "0");
                }
                if (display == n2 && equal == "" && n2 == "0") {
                  setN2(n2 + "." + 0);
                }
              }}
            >
              0
            </button>
            <button
              onClick={() => {
                if (operation != "" && n1 != "" && n2 != "") setEqual("=");
              }}
            >
              =
            </button>
          </div>
          <div className="operations">
            <div>
              <button
                onClick={() => {
                  if (n1 != "") setOperation("+");
                }}
              >
                +
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  if (n1 != "") setOperation("-");
                }}
              >
                -
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  if (n1 != "") setOperation("x");
                }}
              >
                x
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  if (n1 != "") setOperation("/");
                }}
              >
                /
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
