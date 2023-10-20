import { Component } from "react";
import Enfant from "./Enfant";


export default class Parent extends Component {

    state = {
        sommeParent: 0,
        sommeEnfant: 0
    }

    addParent = (nombre) => {
        this.setState((state) => ({
            sommeParent: state.sommeParent + nombre
        }));
    }

    addEnfant = (nombre) => {
        this.setState((state) => ({
            sommeEnfant: state.sommeEnfant + nombre
        }));
    }

    render() {
        return (
            <div>
                <div>
                    <button onClick={() => this.addParent(1)} >+1 Parent</button>
                    <label htmlFor="PsPp" >Parent somme Parent : </label>
                    <input readOnly id="PsPp" type="number" value={this.state.sommeParent}></input>
                    <label htmlFor="PsEp">Parent somme Enfant : </label>
                    <input readOnly id="PsEp" type="number" value={this.state.sommeEnfant} ></input>
                    <label htmlFor="PsTp">Parent somme Total : </label>
                    <input readOnly id="PsTp" type="number" value={this.state.sommeParent + this.state.sommeEnfant}></input>
                </div>
                <Enfant sommeParent={this.state.sommeParent} sommeEnfant={this.state.sommeEnfant} callback={() => this.addEnfant(2)}/>
            </div>
        );
    }

}