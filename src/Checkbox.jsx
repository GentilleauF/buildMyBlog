const Checkbox = ({onValueChange}) => {
    function updateAlignement(e) {
        onValueChange(e.target.value);
    }

    return (
        <div className="flex text-white space-x-6">
            <p className="">Aligner :</p>
            <p>Gauche <input  type="radio" onClick={updateAlignement} name="align" value={'left'}/></p>
            <p>Centre <input type="radio" onClick={updateAlignement} name="align" value={'center'} /></p>
            <p>Droite <input type="radio" onClick={updateAlignement} name="align" value={'right'} /></p>
        </div>
    );
}

export default Checkbox;