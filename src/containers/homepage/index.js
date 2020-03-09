import React from 'react';
import {StyledHomepage} from "./style";

import * as View from "../../views";
import * as Data from "../../data";

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            character: Data.blankCharacter,
            pantheons: Data.pantheonList,
            virtues: Data.virtueList,
            purviews: Data.purviewList,
            abilities: Data.abilityList,
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
            },
            experienceLeft: 0,
            birthrightsPoints: 5,
        };
        this.setAttr = this.setAttr.bind(this);
        this.buy = this.buy.bind(this);
    }

    componentDidMount() {
        this.setState({
            scionStatus: this.state.character.legend > 8 ? "god" : this.state.character.legend > 4 ? "demi-god" : "hero",
            experienceLeft: this.state.character.experience,
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    buy(pool, price){
        this.setState({[pool]: this.state[pool] - price})
    }

    setAttr(value, data, dataTwo, dataThree, dataFour){
        if(typeof dataFour !== "undefined"){
            this.setState(prevState => ({
                character: {
                    ...prevState.character,
                    [data]: {
                        ...prevState.character[data],
                        [dataTwo]: {
                            ...prevState.character[data][dataTwo],
                            [dataThree]: {
                                ...prevState.character[data][dataTwo][dataThree],
                                [dataFour]: value
                            },
                        },
                    }
                }
            }));
        } else
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
        return (
            <StyledHomepage>
                <div>
                    <p>Experience left : <span>{this.state.experienceLeft}</span></p>
                </div>
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
                    abilities={this.state.abilities}
                    setAttr={this.setAttr}
                />
                <View.LegendRank
                    character={this.state.character}
                    setAttr={this.setAttr}
                />
                <View.Mundane
                    character={this.state.character}
                    buyWithExp={price => this.setState({experienceLeft: this.state.experienceLeft - price})}
                    setAttr={this.setAttr}
                />
                <View.Power
                    character={this.state.character}
                    purviews={this.state.purviews}
                    birthrightPoints={this.state.birthrightsPoints}
                    buy={this.buy}
                    setAttr={this.setAttr}
                />
                {JSON.stringify(this.state.character)}
            </StyledHomepage>
        );
    }
}

export default Homepage;
