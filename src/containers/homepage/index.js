import React from 'react';
import {StyledHomepage} from "./style";

import blankCharacter from "../../data/character";
import pantheonList from "../../data/pantheons";
import purviewList from "../../data/purviews";
import virtueList from "../../data/virtues";

import * as View from "../../views";

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            character: blankCharacter,
            pantheons: pantheonList,
            virtues: virtueList,
            purviews: purviewList,
            scionStatus: "",
            customPantheon: {},
            customGod: {
                powers: {
                    epic: {
                        0: "",
                        1: "",
                        2: ""
                    },
                    purview: {
                        0: "",
                        1: "",
                        2: "",
                    },
                },
                abilities: {},
            }
        };
        this.setAttr = this.setAttr.bind(this);
    }

    componentDidMount() {
        this.setState({
            scionStatus: this.state.character.legend > 8 ? "god" : this.state.character.legend > 4 ? "demi-god" : "hero"
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    setAttr(value, data, dataTwo, dataThree){
        console.log("Set attr : " , value, data, dataTwo, dataThree);
        if(typeof dataThree !== "undefined"){

            this.setState(prevState => ({
                character: {
                    ...prevState.character,
                    [data]: {
                        ...prevState.character[data],
                        [dataTwo]: {
                            ...prevState.character[data][dataTwo],
                            [dataThree]: value
                        },
                    }
                }
            }));
        } else
        if(typeof dataTwo !== "undefined"){
            this.setState(prevState => ({
                character: {
                    ...prevState.character,
                    [data]: {
                        ...prevState.character[data],
                        [dataTwo]: value,
                    }
                }
            }));
        } else {
            this.setState(prevState => ({
                character: {
                    ...prevState.character,
                    [data]: value
                }
            }));
        }

    }

    render(){
        console.log("state : ", this.state);
        return (
            <StyledHomepage>
                <View.Naming
                    character={this.state.character}
                    setAttr={this.setAttr}
                />
                <View.GodSelection
                    character={this.state.character}
                    pantheons={this.state.pantheons}
                    setAttr={this.setAttr}
                />
                <View.CustomPantheon
                    virtues={this.state.virtues}
                    customPantheon={this.state.customPantheon}
                    setCustomPantheon={(e, n) => {
                        e.persist();
                        this.setState(prevState => ({customPantheon: {...prevState.customPantheon, [n]: e.target.value}}))
                    }}
                />
                <View.CustomGod
                    character={this.state.character}
                    customGod={this.state.customGod}
                    purviews={this.state.purviews}
                    setCustomGodEpic={(e, n) => {
                        e.persist();
                        this.setState(prevState => ({
                            customGod: {
                                ...prevState.customGod,
                                powers: {
                                    ...prevState.customGod.powers,
                                    epic: {
                                        ...prevState.customGod.powers.epic,
                                        [n]: e.target.value
                                    }
                                }
                            }
                        }))
                    }}
                    setCustomGodPurview={(e, n) => {
                        e.persist();
                        this.setState(prevState => ({
                            customGod: {
                                ...prevState.customGod,
                                powers: {
                                    ...prevState.customGod.powers,
                                    purview: {
                                        ...prevState.customGod.powers.purview,
                                        [n]: e.target.value
                                    }
                                }
                            }
                        }))
                    }}
                />
                <View.LegendRank
                    character={this.state.character}
                    setAttr={this.setAttr}
                />
                <View.Mundane
                    character={this.state.character}
                    setAttr={this.setAttr}
                />
                {JSON.stringify(this.state.character)}
            </StyledHomepage>
        );
    }
}

export default Homepage;
