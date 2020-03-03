import React from "react";

class CustomPantheon extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let allVirtues = this.props.virtues;
        allVirtues = allVirtues.filter(virtue => !Object.values(this.props.customPantheon).includes(virtue));
        console.log("allVirtues : ", allVirtues);
        return (
            <fieldset>
                <label>Choix de la première vertu du panthéon :
                    <select value={this.props.customPantheon[0]} onChange={e => this.props.setCustomPantheon(e, 0)}>
                        {typeof this.props.customPantheon[0] !== "string" ? <option value=""/> : ""}
                        {
                            allVirtues.map((virtue, index) => {
                                return <option key={index} value={virtue}>{virtue}</option>
                            })
                        }
                        {
                            typeof this.props.customPantheon[0] !== "undefined" ?
                                <option
                                    value={this.props.customPantheon[0]}>{this.props.customPantheon[0]}</option> : ""
                        }
                    </select>
                </label>
                <label>Choix de la deuxième vertu du panthéon :
                    <select value={this.props.customPantheon[1]} onChange={e => this.props.setCustomPantheon(e, 1)}>
                        {typeof this.props.customPantheon[1] !== "string" ? <option value=""/> : ""}
                        {
                            allVirtues.map((virtue, index) => {
                                return <option key={index} value={virtue}>{virtue}</option>
                            })
                        }
                        {
                            typeof this.props.customPantheon[1] !== "undefined" ?
                                <option
                                    value={this.props.customPantheon[1]}>{this.props.customPantheon[1]}</option> : ""
                        }
                    </select>
                </label>
                <label>Choix de la troisième vertu du panthéon :
                    <select value={this.props.customPantheon[2]} onChange={e => this.props.setCustomPantheon(e, 2)}>
                        {typeof this.props.customPantheon[2] !== "string" ? <option value=""/> : ""}
                        {
                            allVirtues.map((virtue, index) => {
                                return <option key={index} value={virtue}>{virtue}</option>
                            })
                        }
                        {
                            typeof this.props.customPantheon[2] !== "undefined" ?
                                <option
                                    value={this.props.customPantheon[2]}>{this.props.customPantheon[2]}</option> : ""
                        }
                    </select>
                </label>
                <label>Choix de la quartième vertu du panthéon :
                    <select value={this.props.customPantheon[3]} onChange={e => this.props.setCustomPantheon(e, 3)}>
                        {typeof this.props.customPantheon[3] !== "string" ? <option value=""/> : ""}
                        {
                            allVirtues.map((virtue, index) => {
                                return <option key={index} value={virtue}>{virtue}</option>
                            })
                        }
                        {
                            typeof this.props.customPantheon[3] !== "undefined" ?
                                <option
                                    value={this.props.customPantheon[3]}>{this.props.customPantheon[3]}</option> : ""
                        }
                    </select>
                </label>
            </fieldset>
        )
    }
}

export default CustomPantheon;
