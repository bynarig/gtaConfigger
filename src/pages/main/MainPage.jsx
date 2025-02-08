import "./MainPage.scss";
import { useState } from "react";
import Slider from "rc-slider";
import "../../theme/slider/slider.scss";


export default function MainPage () {
	const [value, setValue] = useState(50);

	const handleChange = (val) => {
		setValue(val);
	};

	return (<div className="main-page">
		  <div >
			  <h2>Current Value: {value}</h2>
			  <Slider className="slider"
				min={0}
				max={100}
				value={value}
				onChange={handleChange}
			  />
		  </div>
	  </div>
	);
}
