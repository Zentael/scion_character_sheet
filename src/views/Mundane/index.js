import React from "react";

class Mundanes extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let attributesCheckboxes = (attrName) => {
            let keyOfAttrName = Object.keys(this.props.character.attributes).find(attr => this.props.character.attributes[attr].name === attrName);
            let maxAttribute = this.props.scionStatus === "god" ? 12 : this.props.scionStatus === "demi-god" ? 8 : 5;
            let aC = [];
            for (let i = 0; i < maxAttribute; i++) {
                aC.push(<input
                    checked={this.props.character.attributes[keyOfAttrName].mundane >= i + 1}
                    onChange={e => i !== 0 ?
                        this.props.setAttr(i + 1, "attributes", keyOfAttrName, "mundane")
                        : e.preventDefault()
                    }
                    key={i} type="checkbox"/>)
            }
            return aC;
        };

        return (
            <fieldset>
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
