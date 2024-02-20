import { useEffect, useState } from "react";

const ColorPicker = ({onValueChange, name, defaultRgb }) => {
    const [red, setRed] = useState(defaultRgb.red);
    const [green, setGreen] = useState(defaultRgb.green);
    const [blue, setBlue] = useState(defaultRgb.blue);

    function onChangeRed(e) {
        setRed(e.target.value);
    }

    function onChangeGreen(e) {
        setGreen(e.target.value);
    }

    function onChangeBlue(e) {
        setBlue(e.target.value);
    }


    useEffect(() => {
        onValueChange({
            red : red,
            green : green,
            blue : blue
        })
    },[red,green,blue])

    return (
        

        <div>
            <div className="flex space-x-5 text-white">
                <p>{name} :</p>
                <p className="font-semibold"> Red : <input type="range" defaultValue={defaultRgb.red} onChange={onChangeRed} min="0" max="255" className="bg-red-300 rounded-md appearance-none" /></p>
                <p className="font-semibold"> Green : <input type="range" defaultValue={defaultRgb.green} onChange={onChangeGreen} min="0" max="255" className="bg-green-300 rounded-md appearance-none"  /></p>
                <p className="font-semibold"> Blue : <input type="range" defaultValue={defaultRgb.blue} onChange={onChangeBlue} min="0" max="255" className="bg-blue-300 rounded-md appearance-none"  /></p>
            </div>
        </div>
    );
}

export default ColorPicker;