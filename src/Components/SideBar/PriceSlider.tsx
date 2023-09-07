import Slider from "react-slider";
import "./PriceSlider.css";
import { useEffect, useState } from "react";
type Props = {
  priceValues: number[];
};

const PriceSlider = (props: Props) => {
  useEffect(() => {
    setValues([MIN, MAX]);
  }, [props.priceValues]);
  const MIN = Math.min(...props.priceValues);
  const MAX = Math.max(...props.priceValues);
  const [values, setValues] = useState([MIN, MAX]);
  return (
    <div className="app">
      <div className="box">
        <h3>
          Price<span> Range</span>
        </h3>
        <div>
          <div className={"value"}>
            ₺{values[0]}-₺{values[1]}
          </div>
        </div>
        <Slider
          className="slider"
          value={values}
          min={MIN}
          max={MAX}
          onChange={setValues}
        />
      </div>
    </div>
  );
};

export default PriceSlider;
