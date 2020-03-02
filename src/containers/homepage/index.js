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
            scionStatus: "",
            customPantheon: {},
            customGod: {
                powers: {
                    epic: {
                        0: "",
                        1: "",
                        2: ""
                    },
                    purviews: {},
                },
                abilities: {},
            }
        };
        this.setAttr = this.setAttr.bind(this);
    }

    componentDidMount() {
        this.setState({
            scionStatus: this.state.character.legend > 8 ? "god" : this.state.character.legend > 4 ? "demi-god" : "hero"
        })
    }

    setAttr(value, data, dataTwo, dataThree){
        console.log("Set attr : " , value, data, dataTwo, dataThree);
        if(typeof dataThree !== "undefined"){

            this.setState(prevState => ({
                character: {
                    ...prevState.character,
                    [data]: {
                        ...prevState.character[data],
                        [dataTwo]: {
                            ...prevState.character[data][dataTwo],
                            [dataThree]: value
                        },
                    }
                }
            }));
        } else
        if(typeof dataTwo !== "undefined"){
            this.setState(prevState => ({
                character: {
                    ...prevState.character,
                    [data]: {
                        ...prevState.character[data],
                        [dataTwo]: value,
                    }
                }
            }));
        } else {
            this.setState(prevState => ({
                character: {
                    ...prevState.character,
                    [data]: value
                }
            }));
        }

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

    CustomPantheon = () => {
        let allVirtues = Array.from(new Set(this.state.pantheons.map(pant => pant.virtues).flat()));
        allVirtues = allVirtues.filter(virtue => !Object.values(this.state.customPantheon).includes(virtue));
        console.log("allVirtues : ", allVirtues);
        const setCustomPantheon = (e, n) => {
            e.persist();
            this.setState(prevState => ({customPantheon: {...prevState.customPantheon, [n]: e.target.value}}))
        };
        return (
            <fieldset>
                <label>Choix de la première vertu du panthéon :
                    <select value={this.state.customPantheon[0]} onChange={e => setCustomPantheon(e, 0)}>
                        {typeof this.state.customPantheon[0] !== "string" ? <option value=""/> : ""}
                        {
                            allVirtues.map((virtue, index) => {
                                return <option key={index} value={virtue}>{virtue}</option>
                            })
                        }
                        {
                            typeof this.state.customPantheon[0] !== "undefined" ?
                                <option value={this.state.customPantheon[0]}>{this.state.customPantheon[0]}</option> : ""
                        }
                    </select>
                </label>
                <label>Choix de la deuxième vertu du panthéon :
                    <select value={this.state.customPantheon[1]} onChange={e => setCustomPantheon(e, 1)}>
                        {typeof this.state.customPantheon[1] !== "string" ? <option value=""/> : ""}
                        {
                            allVirtues.map((virtue, index) => {
                                return <option key={index} value={virtue}>{virtue}</option>
                            })
                        }
                        {
                            typeof this.state.customPantheon[1] !== "undefined" ?
                                <option value={this.state.customPantheon[1]}>{this.state.customPantheon[1]}</option> : ""
                        }
                    </select>
                </label>
                <label>Choix de la troisième vertu du panthéon :
                    <select value={this.state.customPantheon[2]} onChange={e => setCustomPantheon(e, 2)}>
                        {typeof this.state.customPantheon[2] !== "string" ? <option value=""/> : ""}
                        {
                            allVirtues.map((virtue, index) => {
                                return <option key={index} value={virtue}>{virtue}</option>
                            })
                        }
                        {
                            typeof this.state.customPantheon[2] !== "undefined" ?
                                <option value={this.state.customPantheon[2]}>{this.state.customPantheon[2]}</option> : ""
                        }
                    </select>
                </label>
                <label>Choix de la quartième vertu du panthéon :
                    <select value={this.state.customPantheon[3]} onChange={e => setCustomPantheon(e, 3)}>
                        {typeof this.state.customPantheon[3] !== "string" ? <option value=""/> : ""}
                        {
                            allVirtues.map((virtue, index) => {
                                return <option key={index} value={virtue}>{virtue}</option>
                            })
                        }
                        {
                            typeof this.state.customPantheon[3] !== "undefined" ?
                                <option value={this.state.customPantheon[3]}>{this.state.customPantheon[3]}</option> : ""
                        }
                    </select>
                </label>
            </fieldset>
        )
    };

    CustomGod = () => {

        let nbEpicChoice = Object.values(this.state.customGod.powers.epic).length;
        const setCustomGodEpic = (e, n) => {
            e.persist();
            this.setState(prevState => ({customGod: {
                ...prevState.customGod,
                powers: {
                    ...prevState.customGod.powers,
                    epic: {
                        ...prevState.customGod.powers.epic,
                        [n]: e.target.value
                    }
                }}}))
        };
        const epicChoice = () => {
          let allAttributes = Object.values(this.state.character.attributes).map(attr => attr.name);
          allAttributes = allAttributes.filter(attr => !Object.values(this.state.customGod.powers.epic).includes(attr));
          console.log("allAttributes : ", allAttributes);
          console.log("nbEpicChoice : ", nbEpicChoice);
          let eC = [];
          for(let i = 0; i < nbEpicChoice; i++){
              eC.push(
                  <label key={i}> Pouvoir épique n°{i+1}
                      <select value={this.state.customGod.powers.epic[i]} onChange={e => setCustomGodEpic(e, i)}>
                          {typeof this.state.customGod.powers.epic[i] !== "string" ? <option value=""/> : ""}
                          {
                              allAttributes.map((attr, index) => {
                                  return <option key={index} value={attr}>{attr}</option>
                              })
                          }
                          {
                              typeof this.state.customGod.powers.epic[i] !== "undefined" ?
                                  <option value={this.state.customGod.powers.epic[i]}>{this.state.customGod.powers.epic[i]}</option> : ""
                          }
                      </select>
                  </label>
              )
          }
          return eC;
        };
        const addNewEpic = () => {
            if(nbEpicChoice < 9)
                Object.assign(this.state.customGod.powers.epic, {[nbEpicChoice++]: ""});
            this.forceUpdate()
        };

        console.log("nbEpicChoice : ", nbEpicChoice);

        return(
            <fieldset>
                <div>
                    <p>Choix des pouvoirs épiques : </p>
                    {epicChoice()}
                    <button onClick={addNewEpic}>Ajouter un autre pouvoir épique</button>
                </div>
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
            let keyOfAttrName = Object.keys(this.state.character.attributes).find(attr => this.state.character.attributes[attr].name === attrName);
            let maxAttribute = this.state.scionStatus === "god" ? 12 : this.state.scionStatus === "demi-god" ? 8 : 5;
            let aC = [];
            for (let i = 0; i < maxAttribute; i++){
                aC.push(<input
                    disabled={i === 0}
                    checked={this.state.character.attributes[keyOfAttrName].mundane >= i+1}
                    onChange={() => this.setAttr(i+1, "attributes",
                        keyOfAttrName,
                        "mundane")}
                    key={i} type="checkbox"/>)
            }
            return aC;
        };

        return (
            <fieldset>
                <div>
                    {
                        Object.values(this.state.character.attributes).map((attribute, index) => {
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
        console.log("state : ", this.state);
        return (
            <StyledHomepage>
                {this.Naming()}
                {this.GodSelection()}
                {this.CustomPantheon()}
                {this.CustomGod()}
                {this.LegendRank()}
                {this.Attributes()}
                {JSON.stringify(this.state.character)}
            </StyledHomepage>
        );
    }
}

export default Homepage;
