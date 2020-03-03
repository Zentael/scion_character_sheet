import React from "react";

class LegendRank extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <fieldset>
                <label>Niveau de légende :
                    {this.props.character.legend}
                    <input onChange={e => this.props.setAttr(e.target.value, "legend")}
                           value={this.props.character.legend} type="range" min="1" max="12"/>
                </label>
                <label>Expérience de départ :
                    <input onChange={e => this.props.setAttr(e.target.value, "experience")}
                           value={this.props.character.experience} min="45" type="number"/>
                </label>
                <button type="button">Suivant</button>
            </fieldset>
        )
    }
}

export default LegendRank;
