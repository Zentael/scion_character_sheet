import React from "react";
import {substractArrayFromArray} from "../../helpers";

class Powers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            freePower: 10,
            currentWindow: "epics",
            currentlySelectedPurview: "",
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.character.attributes !== prevProps.character.attributes || this.props.character.purviews !== prevProps.character.purviews){
            console.log(Object.values(this.props.character.purviews).map(purview => purview.boons.length).reduce((a, b) => a + b, 0));
            this.setState({
               freePower: 10
                    - Object.values(this.props.character.attributes).map(attr => attr.epic).reduce((a, b) => a + b, 0)
                    - Object.values(this.props.character.purviews).map(purview => purview.boons.length).reduce((a, b) => a + b, 0)
            })

        }
    }

    render() {
        const handleCheckAttr = (e, i, keyOfAttrName) => {
            const currentAttrEpic = this.props.character.attributes[keyOfAttrName].epic;
            if(currentAttrEpic > 0 && i === 0){ //Si on clique sur la première checkbox et que celle-ci est déjà cochée, on décoche tout
                this.props.setAttr(0, "attributes", keyOfAttrName, "epic");
            } else
            if(this.state.freePower > 0){
                if(i+1 - currentAttrEpic > this.state.freePower){
                    this.props.setAttr(currentAttrEpic + this.state.freePower, "attributes", keyOfAttrName, "epic");
                } else {
                    this.props.setAttr(i+1, "attributes", keyOfAttrName, "epic");
                }
            }
        };

        let attributesCheckboxesForReference = (attrName) => {
            let keyOfAttrName = Object.keys(this.props.character.attributes).find(attr => this.props.character.attributes[attr].name === attrName);
            let maxAttribute = this.props.character.legend > 7 ? 12 : this.props.character.legend > 4 ? 8 : 5;
            let aC = [];
            for (let i = 0; i < maxAttribute; i++) {
                aC.push(<input
                    checked={this.props.character.attributes[keyOfAttrName].mundane >= i + 1}
                    disabled
                    key={i} type="checkbox"/>)
            }
            return aC;
        };

        const epicsCheckboxes = (attrName) => {
            let keyOfAttrName = Object.keys(this.props.character.attributes).find(attr => this.props.character.attributes[attr].name === attrName);
            let currentAttr = this.props.character.attributes[keyOfAttrName];
            let maxAttribute = Math.max(Math.min(this.props.character.legend - 1, currentAttr.mundane), 2);
            /*const isBuyable = (checkboxNum) => {
                if(checkboxNum === -1) return false;
                return this.state.boughtPower[checkboxNum] <= 0 || (currentAttr.epic < checkboxNum && isBuyable(checkboxNum -1))
            };*/
            let eC = [];
            for (let i = 0; i < maxAttribute; i++) {
                eC.push(<input
                    checked={currentAttr.epic >= i + 1}
                    disabled={
                        this.state.freePower <= 0
                        //&& isBuyable(i)
                        && currentAttr.epic < i + 1}
                    onChange={e => handleCheckAttr(e, i, keyOfAttrName)}
                    key={i} type="checkbox"/>)
            }
            return eC;
        };

        const handleCheckPurview = (e, i, keyOfPurviewName) => {
            const currentPurviewLevel = this.props.character.purviews[keyOfPurviewName].boons.length;
            if(currentPurviewLevel > 0 && i === 0){ //Si on clique sur la première checkbox et que celle-ci est déjà cochée, on décoche tout
                this.props.setAttr([], "purviews", keyOfPurviewName, "boons");
            } else
            if(this.state.freePower > 0){
                if(i+1 - currentPurviewLevel > this.state.freePower){
                    this.props.setAttr([...Array(currentPurviewLevel + this.state.freePower).fill([])], "purviews", keyOfPurviewName, "boons");
                } else {
                    this.props.setAttr([...Array(i+1).fill([])], "purviews", keyOfPurviewName, "boons");
                }
            }
        };

        const purviewCheckboxes = (keyOfPurviewName, currentPurview) => {
            let maxAttribute = Math.max(this.props.character.legend - 1, 2);
            let pC = [];
            for (let i = 0; i < maxAttribute; i++) {
                pC.push(<input
                    checked={currentPurview.boons.length > i}
                    disabled={
                        this.state.freePower <= 0
                        //&& isBuyable(i)
                        && currentPurview.boons.length <= i}
                    onChange={e => handleCheckPurview(e, i, keyOfPurviewName)}
                    key={i} type="checkbox"/>)
            }
            return pC;
        };

        const advancedPurview = (keyOfPurviewName, purview) => {
            const associatedRelicKey = Object.keys(this.props.character.birthrights.relics).find(relicKey => this.props.character.birthrights.relics[relicKey].effects.indexOf(purview.name) > 0);
            return(
              <div key={keyOfPurviewName}>
                  <p>{purview.name}</p>
                  <label>
                      <span>Relique associée :</span>
                      <input type="text"
                        onChange={e => this.props.setAttr(e.target.value, "birthrights", "relics", associatedRelicKey, "name")}
                      />
                  </label>
                  <div>
                      {purviewCheckboxes(keyOfPurviewName, purview)}
                  </div>
              </div>
          )
        };

        const purviewsSelection = () => {
            let allPurviews = Object.values(this.props.purviews);
            allPurviews = allPurviews.filter(purview => !Object.values(this.props.character.purviews).map(purview => purview.name).includes(purview.name));
            const keyOfNewPurview = Object.keys(this.props.character.purviews).length;
            const keyOfNewRelicForPurview = Object.keys(this.props.character.birthrights.relics).length;
            return (
                <div>
                    <label> Choisissez un ou plusieurs purviews
                        <select onChange={e => {this.setState({
                            currentlySelectedPurview: e.target.value
                        })}}>
                            <option value={this.state.currentlySelectedPurview}>{this.state.currentlySelectedPurview}</option>
                            {
                                allPurviews.map((purview, index) => {
                                    return <option key={index} value={purview.name}>{purview.name}</option>
                                })
                            }
                        </select>
                        <button onClick={() => {
                            if(this.props.birthrightPoints > 0){
                                this.props.setAttr(this.state.currentlySelectedPurview, "purviews", keyOfNewPurview, "name");
                                this.props.setAttr("", "birthrights", "relics", keyOfNewRelicForPurview, "name");
                                this.props.setAttr("Permet d'utiliser le purview " + this.state.currentlySelectedPurview, "birthrights", "relics", keyOfNewRelicForPurview, "effects");
                                this.props.setAttr([], "purviews", keyOfNewPurview, "boons");
                            }}}
                        >Ajouter ce purview</button>
                    </label>
                    <div>
                        {
                            Object.entries(this.props.character.purviews).map(([key, purview]) => advancedPurview(key, purview))
                        }
                    </div>
                </div>

            )
        };

        const buyButtons = () => {
           let buttons = [];
            for(let i=0; i < 10; i++){
                buttons.push(
                    <div key={i}>
                        <button onClick={() => {
                            this.props.buyWithExp((i+1) * 2 + 4);
                            this.setState(({boughtPower}) => ({
                                boughtPower: [
                                    ...boughtPower.slice(0, i),
                                    boughtPower[i] + 1,
                                    ...boughtPower.slice(i+1)
                                ]
                            }));
                        }}>Acheter un pouvoir de niveau {i+1}</button>
                        <p>Pouvoirs de niveau {i+1} restants : <span>{this.state.boughtPower[i]}</span></p>
                    </div>
                )
            }
            return buttons;
        } ;

        return (
            <fieldset>
                <div>
                    <div>
                        <p>Pouvoirs gratuits restants : <span>{this.state.freePower}</span></p>
                    </div>
                    {/*buyButtons()*/}
                </div>
                <nav>
                    <div onClick={e => this.setState({currentWindow: "epics"})}>
                        Epics
                    </div>
                    <div onClick={e => this.setState({currentWindow: "purviews"})}>
                        Purviews
                    </div>
                </nav>

                {this.state.currentWindow === "purviews" ?
                    <div>
                        {purviewsSelection()}
                    </div> :
                    <div>
                        {
                            Object.values(this.props.character.attributes).map((attribute, index) => {
                                return (
                                    <label key={index}>
                                        <p>{attribute.name}</p>
                                        <div>
                                            {attributesCheckboxesForReference(attribute.name)}
                                        </div>
                                        <div>
                                            {epicsCheckboxes(attribute.name)}
                                        </div>
                                    </label>
                                )
                            })
                        }
                    </div>
                }
                <button type="button">Suivant</button>
            </fieldset>
        )
    }
}

export default Powers;
