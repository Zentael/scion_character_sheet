import React from "react";

class CustomGod extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        let nbEpicChoice = Object.values(this.props.customGod.powers.epic).length;
        
        const epicChoice = () => {
            let allAttributes = Object.values(this.props.character.attributes).map(attr => attr.name);
            allAttributes = allAttributes.filter(attr => !Object.values(this.props.customGod.powers.epic).includes(attr));
            console.log("allAttributes : ", allAttributes);
            console.log("nbEpicChoice : ", nbEpicChoice);
            let eC = [];
            for (let i = 0; i < nbEpicChoice; i++) {
                eC.push(
                    <label key={i}> Pouvoir épique n°{i + 1}
                        <select value={this.props.customGod.powers.epic[i]} onChange={e => this.props.setCustomGodEpic(e, i)}>
                            {typeof this.props.customGod.powers.epic[i] !== "string" ? <option value=""/> : ""}
                            {
                                allAttributes.map((attr, index) => {
                                    return <option key={index} value={attr}>{attr}</option>
                                })
                            }
                            {
                                typeof this.props.customGod.powers.epic[i] !== "undefined" ?
                                    <option
                                        value={this.props.customGod.powers.epic[i]}>{this.props.customGod.powers.epic[i]}</option> : ""
                            }
                        </select>
                    </label>
                )
            }
            return eC;
        };
        const addNewEpic = () => {
            if (nbEpicChoice < 9)
                Object.assign(this.props.customGod.powers.epic, {[nbEpicChoice++]: ""});
            this.forceUpdate()
        };

        console.log("nbEpicChoice : ", nbEpicChoice);

        return (
            <fieldset>
                <div>
                    <p>Choix des pouvoirs épiques : </p>
                    {epicChoice()}
                    <button onClick={addNewEpic}>Ajouter un autre pouvoir épique</button>
                </div>
            </fieldset>
        )
    }
}

export default CustomGod;
