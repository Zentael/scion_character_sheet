import React from "react";

class CustomGod extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        //Helper
        const substractArrayFromArray = (target, source) => {
            return target.filter(elem => !Object.values(source).includes(elem));
        };

        //Epics
        let nbEpicChoice = Object.values(this.props.customGod.powers.epic).length;
        const epicChoice = () => {
            let allAttributes = Object.values(this.props.character.attributes).map(attr => attr.name);
            allAttributes = substractArrayFromArray(allAttributes, this.props.customGod.powers.epic);
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

        //Purviews
        let nbPurviewChoice = Object.values(this.props.customGod.powers.purview).length;
        const purviewChoice = () => {
            let allPurviews = Object.keys(this.props.purviews);
            allPurviews = substractArrayFromArray(allPurviews, this.props.customGod.powers.purview);
            let pC = [];
            for (let i = 0; i < nbPurviewChoice; i++) {
                pC.push(
                    <label key={i}> Purview n°{i + 1}
                        <select value={this.props.customGod.powers.purview[i]} onChange={e => this.props.setCustomGodPurview(e, i)}>
                            {typeof this.props.customGod.powers.purview[i] !== "string" ? <option value=""/> : ""}
                            {
                                allPurviews.map((purview, index) => {
                                    return <option key={index} value={purview}>{purview}</option>
                                })
                            }
                            {
                                typeof this.props.customGod.powers.purview[i] !== "undefined" ?
                                    <option
                                        value={this.props.customGod.powers.purview[i]}>{this.props.customGod.powers.purview[i]}</option> : ""
                            }
                        </select>
                    </label>
                )
            }
            return pC;
        };
        const addNewPurview = () => {
            console.log("AJOUTER UN PURVIEW");
            if (nbPurviewChoice < 24)
                Object.assign(this.props.customGod.powers.purview, {[nbPurviewChoice++]: ""});
            this.forceUpdate()
        };

        return (
            <fieldset>
                <div>
                    <p>Choix des pouvoirs épiques : </p>
                    {epicChoice()}
                    <button onClick={addNewEpic}>Ajouter un autre pouvoir épique</button>
                </div>
                <div>
                    <p>Choix des purviews : </p>
                    {purviewChoice()}
                    <button onClick={addNewPurview}>Ajouter un autre purview</button>
                </div>
            </fieldset>
        )
    }
}

export default CustomGod;
