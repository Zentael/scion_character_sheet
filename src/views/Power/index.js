import React from "react";

class Mundanes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalAttrToUse: 18,
            availableAttr: 18,
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.character.attributes !== prevProps.character.attributes || this.state.totalAttrToUse !== prevState.totalAttrToUse){
            this.setState({
                availableAttr: this.state.totalAttrToUse - (Object.values(this.props.character.attributes).map(attr => attr.mundane).reduce((a, b) => a + b, 0) - 9)
            })
        }
    }

    render() {

        const handleCheckAttr = (e, i, keyOfAttrName) => {
            if(i+1 - this.props.character.attributes[keyOfAttrName].mundane > this.state.availableAttr){
                this.props.setAttr(i+1 - this.state.availableAttr, "attributes", keyOfAttrName, "mundane");
            } else {
                this.props.setAttr(i+1, "attributes", keyOfAttrName, "mundane");
            }
        };

        let attributesCheckboxes = (attrName) => {
            let keyOfAttrName = Object.keys(this.props.character.attributes).find(attr => this.props.character.attributes[attr].name === attrName);
            let maxAttribute = this.props.character.legend > 7 ? 12 : this.props.character.legend > 4 ? 8 : 5;
            let aC = [];
            for (let i = 0; i < maxAttribute; i++) {
                aC.push(<input
                    checked={this.props.character.attributes[keyOfAttrName].mundane >= i + 1}
                    disabled={this.state.availableAttr <= 0 && this.props.character.attributes[keyOfAttrName].mundane < i + 1}
                    onChange={e => handleCheckAttr(e, i, keyOfAttrName)}
                    key={i} type="checkbox"/>)
            }
            return aC;
        };

        return (
            <fieldset>
                <div>
                    <button onClick={() => {
                        this.props.buyWithExp(3);
                        this.setState({totalAttrToUse: this.state.totalAttrToUse + 1})
                    }}>Acheter un attribut supplémentaire</button>
                    <p>Attributs gratuits restants : <span>{this.state.availableAttr}</span></p>
                </div>
                <div>
                    {
                        Object.values(this.props.character.attributes).map((attribute, index) => {
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
    }
}

export default Mundanes;
