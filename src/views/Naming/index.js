import React from "react";

class Naming extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <fieldset>
                <label>Nom du Joueur :
                    <input value={this.props.character.player} onChange={e => this.props.setAttr(e.target.value, "player")} type="text"/>
                </label>
                <label>Nom du Personnage :
                    <input onChange={e => this.props.setAttr(e.target.value, "name")} type="text"/>
                </label>
                <label>Age du Personnage :
                    <input onChange={e => this.props.setAttr(e.target.value, "age")} type="number"/>
                </label>
                <button type="button">Suivant</button>
            </fieldset>
        );
    }
}

export default Naming;
