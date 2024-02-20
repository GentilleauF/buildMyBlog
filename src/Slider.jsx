const Slider = ({name="Range",onValueChange,min=0,max=100, defaultValue}) => {
function updateValue(e) {
    onValueChange(e.target.value)
}

    return (
        <div>
            <label className="text-white">
                <label className="mr-5">{name}</label>
                <input className="rounded-md appearance-none" type="range" onInput={updateValue} min={min} max={max}  defaultValue={defaultValue} />
            </label>
        </div>

    );
}

export default Slider;