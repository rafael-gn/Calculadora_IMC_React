import { data } from "./data/data";
import { useState } from "react";
import ImcCalc from "./components/imcCalc";
import ImcInfo from "./components/imcInfo";
import "./styles.css";

export default function App() {
  const calcImc = (e, height, weight) => {
    e.preventDefault();

    console.log(height, weight);

    const weightFloat = +weight.replace(",", ".");
    const heightFloat = +height.replace(",", ".");

    const imcResult = weightFloat / (heightFloat * heightFloat).toFixed(1);
    setImc(imcResult);

    if (!height || !weight) return;
  };

  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  return (
    <div className="container">
      {!imc ? <ImcCalc calcImc={calcImc} /> : <ImcInfo data={data} />}
    </div>
  );
}
