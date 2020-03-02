import React from 'react';
import {StyledHomepage} from "./style";

import blankCharacter from "../../data/character";
import pantheonList from "../../data/pantheons";

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            character: blankCharacter,
            pantheons: pantheonList,
            scionStatus: ""
        };
        this.setAttr = this.setAttr.bind(this);
    }

    componentDidMount() {
        this.setState({
            scionStatus: this.state.character.legend > 8 ? "god" : this.state.character.legend > 4 ? "demi-god" : "hero"
        })
    }

    setAttr(value, data){
        console.log("Set attr : " , value);
        console.log("Set attr data : ", data);
        console.log("Set attr real data : ", this.state.character[data]);
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
                        {
                            this.state.pantheons.map((pant, index) => {
                                return <option key={index} value={pant.name}>{pant.name}</option>
                            })
                        }
                        <option value="other">Autre</option>
                    </select>
                </label>
                {!this.state.pantheons.map(pant => pant.name).includes(this.state.character.pantheon) ?
                    <label>Mon Panthéon :
                        <input onChange={e => this.setAttr(e.target.value, "pantheon")} type="text"/>
                    </label> : ""
                }
                <label>Choix de la divinité parente :
                    <select onChange={e => this.setAttr(e.target.value, "god")}>
                        {console.log(this.state.character.pantheon)}
                        {console.log("filter : ", this.state.pantheons.filter(pant => pant.name === this.state.character.pantheon))}
                        {   this.state.pantheons.filter(pant => pant.name === this.state.character.pantheon).length > 0 ?
                            this.state.pantheons.filter(pant => pant.name === this.state.character.pantheon)[0]
                                .gods.map((god, index) => {
                                return <option key={index} value={god.name}>{god.name}</option>
                            }) : ''
                        }
                        <option value="other">Autre</option>
                    </select>
                </label>
                {
                    !this.state.pantheons.filter(pant => pant.name === this.state.character.pantheon).length > 0 ?
                        <label>Ma divinité :
                            <input onChange={e => this.setAttr(e.target.value, "god")} type="text"/>
                        </label> : ""
                }
                {
                    this.state.pantheons.filter(pant => pant.name === this.state.character.pantheon).length > 0 ?
                    !this.state.pantheons.filter(pant => pant.name === this.state.character.pantheon)[0].gods.map(god => god.name).includes(this.state.character.god) ?
                        <label>Ma divinité :
                            <input onChange={e => this.setAttr(e.target.value, "god")} type="text"/>
                        </label> : "" : ""
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

        let attributesCheckboxes = (attrName) => {
            let maxAttribute = this.state.scionStatus === "god" ? 12 : this.state.scionStatus === "demi-god" ? 8 : 5;
            let aC = [];
            for (let i = 0; i < maxAttribute; i++){
                aC.push(<input
                    onClick={e => this.setAttr(i, "attributes[" + this.state.character.attributes.findIndex(attr => attr.name === attrName) + "].mundane")}
                    key={i} type="checkbox"/>)
            }
            return aC;
        };

        return (
            <fieldset>
                <div>
                    {
                        this.state.character.attributes.map((attribute, index) => {
                            return (
                                <label key={index}>
                                    <p>{attribute.name}</p>
                                    {attributesCheckboxes(attribute.name)}
                                </label>
                            )
                        })
                    }
                </div>
                <button type="button">Suivant</button>
            </fieldset>
        )
    };

    render(){
        console.log(this.state.character.attributes.map(attr => attr.mundane));
        return (
            <StyledHomepage>
                {this.Naming()}
                {this.GodSelection()}
                {this.LegendRank()}
                {this.Attributes()}
                {JSON.stringify(this.state.character)}
            </StyledHomepage>
        );
    }
}

export default Homepage;
