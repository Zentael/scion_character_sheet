import React from 'react';
import {StyledHomepage} from "./style";
import blankCharacter from "../../data/character";

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            character: blankCharacter
        };
        this.setAttr = this.setAttr.bind(this);
    }

    setAttr(value, data){
        console.log(value, data);
        this.setState(prevState => ({
            character: {
                ...prevState.character,
                [data]: value,
            }
        }));
    }

    Naming = () => {
        return (
            <fieldset>
                <label>Nom du Joueur :
                    <input value={this.state.character.player} onChange={e => this.setAttr(e.target.value, "player")} type="text"/>
                </label>
                <label>Nom du Personnage :
                    <input onChange={e => this.setAttr(e.target.value, "name")} type="text"/>
                </label>
                <label>Age du Personnage :
                    <input onChange={e => this.setAttr(e.target.value, "age")} type="number"/>
                </label>
                <button type="button">Suivant</button>
            </fieldset>
        )
    };

    GodSelection = () => {
        return (
            <fieldset>
                <label>Choix du panthéon :
                    <select onChange={e => this.setAttr(e.target.value, "pantheon")}>
                        <option value="greek">Grec</option>
                        <option value="other">Autre</option>
                    </select>
                </label>
                {this.state.character.pantheon === "other" ?
                    <label>Mon Panthéon :
                        <input onChange={e => this.setAttr(e.target.value, "pantheon")} type="text"/>
                    </label> : ""
                }
                <label>Choix de la divinité parente :
                    <select onChange={e => this.setAttr(e.target.value, "god")}>
                        <option value="zeus">Zeus</option>
                        <option value="other">Autre</option>
                    </select>
                </label>
                {this.state.character.god === "other" ?
                    <label>Ma divinité :
                        <input onChange={e => this.setAttr(e.target.value, "god")} type="text"/>
                    </label> : ""
                }
                <button type="button">Suivant</button>
            </fieldset>
        )
    };

    LegendRank = () => {
        return (
            <fieldset>
                <label>Niveau de légende :
                    {this.state.character.legend}
                    <input onChange={e => this.setAttr(e.target.value, "legend")}
                           value={this.state.character.legend} type="range" min="1" max="12"/>
                </label>
                <label>Expérience de départ :
                    <input onChange={e => this.setAttr(e.target.value, "experience")}
                           value="45" min="45" type="number"/>
                </label>
                <button type="button">Suivant</button>
            </fieldset>
        )
    };

    Attributes = () => {
        return (
            <fieldset>
                <div>
                    <h4>Physique</h4>
                    <label>
                        Force
                        <input type="checkbox"/>
                        <input type="checkbox"/>
                        <input type="checkbox"/>
                        <input type="checkbox"/>
                        <input type="checkbox"/>
                        <input type="checkbox"/>
                        <input type="checkbox"/>
                        <input type="checkbox"/>
                        <input type="checkbox"/>
                        <input type="checkbox"/>
                    </label>
                </div>
                <button type="button">Suivant</button>
            </fieldset>
        )
    };

    render(){

        return (
            <StyledHomepage>
                {this.Naming()}
                {this.GodSelection()}
                {this.LegendRank()}
                {JSON.stringify(this.state.character)}
            </StyledHomepage>
        );
    }
}

export default Homepage;
