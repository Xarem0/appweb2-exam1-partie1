
export default function Enfant (props) {

    return (
        <div>
            <button onClick={props.callback} >+2 Enfant</button>
            <label htmlFor="PsPe" >Enfant somme Parent : </label>
            <input readOnly id="PsPe" type="number" value={props.sommeParent}></input>
            <label htmlFor="PsEe">Enfant somme Enfant : </label>
            <input readOnly id="PsEe" type="number" value={props.sommeEnfant} ></input>
            <label htmlFor="PsTe">Enfant somme Total : </label>
            <input readOnly id="PsTe" type="number" value={props.sommeParent + props.sommeEnfant}></input>
        </div>
    ); 

}