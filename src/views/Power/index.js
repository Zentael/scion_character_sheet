import React from "react";

class Powers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalPowerToUse: 10,
            boughtPower: [...Array(10).fill(0)],
            availablePower: 10,
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.character.attributes !== prevProps.character.attributes || this.state.totalPowerToUse !== prevState.totalPowerToUse){
            this.setState({
                availablePower: 10
                    - Object.values(this.props.character.attributes).map(attr => attr.epic).reduce((a, b) => a + b, 0)
                    - Object.values(this.props.character.purviews).map(attr => attr.level).reduce((a, b) => a + b, 0)
            })
        }
    }

    render() {
        const handleCheckAttr = (e, i, keyOfAttrName) => {
            if(i+1 - this.props.character.attributes[keyOfAttrName].epic > this.state.availablePower){
                this.props.setAttr(i+1 - this.state.availablePower, "attributes", keyOfAttrName, "epic");
            } else {
                this.props.setAttr(i+1, "attributes", keyOfAttrName, "epic");
            }
        };

        const epicsCheckboxes = (attrName) => {
            let keyOfAttrName = Object.keys(this.props.character.attributes).find(attr => this.props.character.attributes[attr].name === attrName);
            let maxAttribute = Math.min(Math.max(this.props.character.legend - 1, 2), this.props.character.attributes[keyOfAttrName].mundane);
            let eC = [];
            for (let i = 0; i < maxAttribute; i++) {
                eC.push(<input
                    checked={this.props.character.attributes[keyOfAttrName].epic >= i + 1}
                    disabled={this.state.availablePower <= 0 && this.props.character.attributes[keyOfAttrName].epic < i + 1}
                    onChange={e => handleCheckAttr(e, i, keyOfAttrName)}
                    key={i} type="checkbox"/>)
            }
            return eC;
        };

        const buyButtons = () => {
           let buttons = [];
            for(let i=0; i < 10; i++){
                buttons.push(
                    <div>
                        <button onClick={() => {
                            this.props.buyWithExp((i+1) * 2 + 4);
                            this.setState(({boughtPower}) => ({
                                boughtPower: [
                                    ...boughtPower.slice(0, i),
                                    boughtPower[i] + 1,
                                    boughtPower.slice(i+1)
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
                    {buyButtons()}
                </div>
                <div>
                    {
                        Object.values(this.props.character.attributes).map((attribute, index) => {
                            return (
                                <label key={index}>
                                    <p>{attribute.name}</p>
                                    {epicsCheckboxes(attribute.name)}
                                </label>
                            )
                        })
                    }
                </div>
                <button type="button">Suivant</button>
            </fieldset>
        )
    }
}

export default Powers;
