const blankCharacter = {
    name: "",
    age: "",
    player: "",
    pantheon: "",
    god: {
        name: "",
        powers: [],
        abilities: []
    },
    experience: 45,
    attributes: {
        0: {
            name: "Force",
            mundane: 1,
            epic: 0
        },
        1: {
            name: "Dextérité",
            mundane: 1,
            epic: 0
        },
        2: {
            name: "Vigueur",
            mundane: 1,
            epic: 0
        },
        3: {
            name: "Charisme",
            mundane: 1,
            epic: 0
        },
        4: {
            name: "Manipulation",
            mundane: 1,
            epic: 0
        },
        5: {
            name: "Apparence",
            mundane: 1,
            epic: 0
        },
        6: {
            name: "Perception",
            mundane: 1,
            epic: 0
        },
        7: {
            name: "Intelligence",
            mundane: 1,
            epic: 0
        },
        8: {
            name: "Astuce",
            mundane: 1,
            epic: 0
        },
    },
    competences: [
        {
            speciality: [],
            name: "",
            level: 0,
        }
    ],
    birthrights: {
        money: 0,
        relics: {
            0: {
                name: "Relique",
                type: "",
                level: 1,
                speed: 5,
                damage: 1,
                defense: 1,
                effects: ""
            }
        }
    },
    knacks: [
        {
            name: "microscopic precision",
            description: "je suis un knack très utile",
            cost: ""
        }
    ],
    purviews: {},
    virtues: [
        {
            name: "Duty",
            level: 4
        }
    ],
    willpower: 5,
    legend: 2,
    soak: {
        armed: 10,
        armored: 10,
        nude: 7
    },
    dodge: {
        armed: 10,
        armored: 10,
        nude: 7
    },
    mental: 9
};

export default blankCharacter;
