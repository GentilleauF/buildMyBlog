import ColorPicker from './ColorPicker';
import ContentInput from './ContentInput';
import Slider from './Slider';
import Checkbox from './Checkbox';

const SettingPannel = ({ styleContent, setStyleContent, setI, i }) => {


    function updateTextSize(newSize) {
        setStyleContent({
            ...styleContent,
            fontSize: `${newSize}px`
        })
    }

    function updateTextLetterSpacing(newLetterSpacing) {
        setStyleContent({
            ...styleContent,
            letterSpacing: `${newLetterSpacing}px`
        })
    }

    function addPadding(paddingValue) {
        setStyleContent({
            ...styleContent,
            padding: `${paddingValue}px`
        })
    }

    function updateTextColor({ red, green, blue }) {
        setStyleContent({
            ...styleContent,
            color: `rgba(${red},${green},${blue},1)`
        })
    }


    function updateBackgroundColor({ red, green, blue }) {
        setStyleContent({
            ...styleContent,
            backgroundColor: `rgba(${red},${green},${blue},1)`
        })
    }

    function updateAlign(align) {
        setStyleContent({
            ...styleContent,
            textAlign: `${align}`
        })
    }

    function resetInputSettings() {
       setI(i + 1);
       setStyleContent({})
    }


    return (
        <div>
            <ColorPicker onValueChange={updateTextColor} name={'Couleur du texte'} defaultRgb={{ red: 255, green: 255, blue: 255 }} />
            <ColorPicker onValueChange={updateBackgroundColor} name={'Couleur du background'} defaultRgb={{ red: 71, green: 84, blue: 104 }} />
            <Slider name="Taille du texte :" min={0} max={100} defaultValue={20} onValueChange={updateTextSize} />
            <Slider name="Modifier l'inter-lettrage :" min={0} max={10} defaultValue={0} onValueChange={updateTextLetterSpacing} />
            <Slider name="Ajouter du padding :" min={0} max={30} defaultValue={0} onValueChange={addPadding} />
            <Checkbox onValueChange={updateAlign} />
            <button className='bg-slate-500 px-3 rounded mt-3' onClick={resetInputSettings}>Reset les paramètres</button>

        </div>
    );
}

export default SettingPannel;