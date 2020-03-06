import React from "react";
import Naming from "../Naming";

class GodSelection extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <fieldset>
                <label>Choix du panthéon :
                    <select onChange={e => this.props.setAttr(e.target.value, "pantheon")}>
                        {this.props.character.pantheon === "" ? <option value=""/> : ""}
                        {
                            this.props.pantheons.map((pant, index) => {
                                return <option key={index} value={pant.name}>{pant.name}</option>
                            })
                        }
                        <option value="other">Autre</option>
                    </select>
                </label>
                {!this.props.pantheons.map(pant => pant.name).includes(this.props.character.pantheon) && this.props.character.pantheon !== "" ?
                    <label>Mon Panthéon :
                        <input onChange={e => this.props.setAttr(e.target.value, "pantheon")} type="text"/>
                    </label> : ""
                }
                {
                    this.props.pantheons.map(pant => pant.name).includes(this.props.character.pantheon) ?
                    <label>Choix de la divinité parente :
                        <select onChange={e => this.props.setAttr(e.target.value, "god")}>
                            {this.props.character.god === "" ? <option value=""/> : ""}
                            {this.props.pantheons.filter(pant => pant.name === this.props.character.pantheon).length > 0 ?
                                this.props.pantheons.filter(pant => pant.name === this.props.character.pantheon)[0]
                                    .gods.map((god, index) => {
                                    return <option key={index} value={god.name}>{god.name}</option>
                                }) : ''
                            }
                            <option value="other">Autre</option>
                        </select>
                    </label> : ""
                }
                {
                    !this.props.pantheons.map(pant => pant.name).includes(this.props.character.pantheon) && this.props.character.pantheon !== "" ?
                        <label>Ma divinité :
                            <input onChange={e => this.props.setAttr(e.target.value, "god")} type="text"/>
                        </label> : ""
                }
                {
                    this.props.pantheons.map(pant => pant.name).includes(this.props.character.pantheon) && this.props.character.pantheon !== "" ?
                        !this.props.pantheons.filter(pant => pant.name === this.props.character.pantheon)[0].gods.map(god => god.name).includes(this.props.character.god) ?
                            <label>Ma divinité :
                                <input onChange={e => this.props.setAttr(e.target.value, "god")} type="text"/>
                            </label> : "" : ""
                }
                <button type="button">Suivant</button>
            </fieldset>
        )
    }
}

export default GodSelection;
