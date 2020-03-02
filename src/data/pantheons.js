import blankCharacter from "./character";

const pantheons = [
    {
        name: "Aesir",
        virtues: [
            "Courage",
            "Endurance",
            "Expression",
            "Loyauté",
        ],
        gods: [
            {
                name: "Baldur",
                powers: [
                    "Apparence",
                    "Charisme",
                    "Soleil",
                    "Guerre",
                ],
                abilities: [
                    "Athlétisme",
                    "Vigilance",
                    "Commandement",
                    "Pilotage",
                    "Mêlée",
                    "Eloquence"
                ]
            },
            {
                name: "Freya",
                powers: [
                    "Apparence",
                    "Mort",
                    "Fertilité",
                    "Magie",
                    "Guerre"
                ],
                abilities: [
                    "Animaux",
                    "Médecine",
                    "Mêlée",
                    "Occulte",
                    "Eloquence",
                    "Survie",
                ]
            },
            {
                name: "Freyr",
                powers:[
                    "Apparence",
                    "Charisme",
                    "Fertilité",
                    "Soleil",
                ],
                abilities: [
                    "Animaux",
                    "Pilotage",
                    "Résistance",
                    "Mêlée",
                    "Eloquence",
                    "Survie"
                ]
            },
            {
                name: "Frigg",
                powers:[
                    "Manipulation",
                    "Vivacité",
                    "Magie",
                    "Prophécie",
                ],
                abilities: [
                    "Vigilance",
                    "Empathie",
                    "Médecine",
                    "Occulte",
                    "Politique",
                    "Eloquence",
                ]
            },
            {
                name: "Heimdall",
                powers:[
                    "Perception",
                    "Vigueur",
                    "Gardien",
                    "Psychopompe",
                ],
                abilities: [
                    "Culture",
                    "Vigilance",
                    "Corps à Corps",
                    "Résistance",
                    "Investigation",
                    "Médecine",
                ]
            },
            {
                name: "Hel",
                powers:[
                    "Mort",
                    "Apparence",
                    "Vigueur",
                    "Santé",
                ],
                abilities: [
                    "Commandement",
                    "Résistance",
                    "Intégrité",
                    "Médecine",
                    "Occulte",
                    "Eloquence",
                ]
            },
            {
                name: "Loki",
                powers:[
                    "Chaos",
                    "Manipulation",
                    "Vivacité",
                    "Illusion",
                    "Magie",
                ],
                abilities: [
                    "Empathie",
                    "Résistance",
                    "Larcin",
                    "Occulte",
                    "Politique",
                    "Discrétion",
                ]
            },
            {
                name: "Njord",
                powers:[
                    "Perception",
                    "Fertilité",
                    "Feu",
                    "Ciel",
                    "Eau",
                ],
                abilities: [
                    "Vigilance",
                    "Pilotage",
                    "Résistance",
                    "Intégrité",
                    "Politique",
                    "Survie",
                ]
            },
            {
                name: "Odin",
                powers:[
                    "Vigueur",
                    "Manipulation",
                    "Intelligence",
                    "Vivacité",
                    "Magie",
                    "Mystère",
                    "Prophécie",
                    "Psychompompe",
                    "Guerre",
                ],
                abilities: [
                    "Animaux",
                    "Art",
                    "Commandement",
                    "Investigation",
                    "Mêlée",
                    "Occulte",
                ]
            },
            {
                name: "Thor",
                powers:[
                    "Force",
                    "Vigueur",
                    "Charisme",
                    "Gardien",
                    "Foudre",
                ],
                abilities: [
                    "Athlétisme",
                    "Pilotage",
                    "Résistance",
                    "Mêlée",
                    "Eloquence",
                    "Lancé",
                ]
            },
            {
                name: "Tyr",
                powers:[
                    "Intelligence",
                    "Force",
                    "Justice",
                    "Guerre",
                ],
                abilities: [
                    "Animaux",
                    "Athlétisme",
                    "Commandement",
                    "Résistance",
                    "Intégrité",
                    "Investigation",
                ]
            },
            {
                name: "Uller",
                powers:[
                    "Dextérité",
                    "Perception",
                    "Gel",
                    "Psychompompe",
                ],
                abilities: [
                    "Athlétisme",
                    "Résistance",
                    "Intégrité",
                    "Tir",
                    "Mêlée",
                    "Survie",
                ]
            }
        ],
    },
    {
        name: "Anunna",
        virtues: [
            "Conviction",
            "Courage",
            "Ordre",
            "Piété"
        ],
        gods: [
            {
                name: "Enki",
                powers:[
                    "Chaos",
                    "Charisme",
                    "Vivacité",
                    "Santé",
                    "Eau",
                ],
                abilities: [
                    "Culture",
                    "Art",
                    "Empathie",
                    "Politique",
                    "Discrétion",
                    "Survie",
                ]
            },
            {
                name: "Ereshkigal",
                powers:[
                    "Mort",
                    "Apparence",
                    "Gardien",
                ],
                abilities: [
                    "Commandement",
                    "Empathie",
                    "Intégrité",
                    "Occulte",
                    "Politique",
                    "Eloquence",
                ]
            },
            {
                name: "Marduk",
                powers:[
                    "Charisme",
                    "Perception",
                    "Force",
                    "Feu",
                    "Gardien",
                    "Justice",
                    "Ciel",
                    "Foudre",
                ],
                abilities: [
                    "Commandement",
                    "Pilotage",
                    "Tir",
                    "Mêlée",
                    "Politique",
                    "Survie",
                ]
            },
            {
                name: "Ninhursag",
                powers:[
                    "Animal",
                    "Terre",
                    "Charisme",
                    "Fertilité",
                    "Santé",
                ],
                abilities: [
                    "Animaux",
                    "Art",
                    "Empathie",
                    "Médecine",
                    "Eloquence",
                    "Survie",
                ]
            },
            {
                name: "Shamash",
                powers:[
                    "Perception",
                    "Gardien",
                    "Justice",
                    "Prophécie",
                    "Soleil",
                ],
                abilities: [
                    "Vigilance",
                    "Commandement",
                    "Pilotage",
                    "Empathie",
                    "Intégrité",
                    "Investigation",
                ]
            },
            {
                name: "Tammuz",
                powers:[
                    "Animal",
                    "Apparence",
                    "Charisme",
                    "Fertilité",
                ],
                abilities: [
                    "Animaux",
                    "Empathie",
                    "Politique",
                    "Eloquence",
                    "Discrétion",
                    "Survie",
                ]
            },
            {
                name: "Enlil",
                powers:[
                    "Manipulation",
                    "Perception",
                    "Fertilité",
                    "Justice",
                    "Ciel",
                ],
                abilities: [
                    "Vigilance",
                    "Commandement",
                    "Intégrité",
                    "Politique",
                    "Eloquence",
                    "Survie",
                ]
            },
            {
                name: "Ishtar",
                powers:[
                    "Chaos",
                    "Apparence",
                    "Charisme",
                    "Manipulation",
                    "Vivacité",
                    "Etoiles",
                    "Foudre",
                    "Guerre",
                ],
                abilities: [
                    "Art",
                    "Athlétisme",
                    "Commandement",
                    "Empathie",
                    "Mêlée",
                    "Eloquence",
                ]
            },
            {
                name: "Nergal",
                powers:[
                    "Chaos",
                    "Mort",
                    "Vigueur",
                    "Santé",
                    "Soleil",
                    "Guerre",
                ],
                abilities: [
                    "Animaux",
                    "Commandement",
                    "Résistance",
                    "Médecine",
                    "Mêlée",
                    "Discrétion",
                ]
            },
            {
                name: "Ninurta",
                powers:[
                    "Vigueur",
                    "Force",
                    "Foudre",
                    "Guerre",
                    "Eau",
                ],
                abilities: [
                    "Athlétisme",
                    "Corps à Corps",
                    "Pilotage",
                    "Résistance",
                    "Mêlée",
                    "Survie",
                ]
            },
            {
                name: "Sin",
                powers:[
                    "Animal",
                    "Apparence",
                    "Charisme",
                    "Justice",
                    "Lune",
                ],
                abilities: [
                    "Animaux",
                    "Résistance",
                    "Intégrité",
                    "Investigation",
                    "Eloquence",
                    "Survie",
                ]
            },
        ]
    },
    {
        name: "Bogovi",
        virtues: [
            "Devoir",
            "Harmonie",
            "Ordre",
            "Piété"
        ],
        gods: [
            {
                name: "Chors",
                powers:[
                    "Apparence",
                    "Lune",
                    "Soleil",
                ],
                abilities: [
                    "Art",
                    "Intégrité",
                    "Larcin",
                    "Occulte",
                    "Eloquence",
                    "Discrétion",
                ]
            },
            {
                name: "Dzahbog",
                powers:[
                    "Apparence",
                    "Charisme",
                    "Soleil",
                ],
                abilities: [
                    "Animaux",
                    "Art",
                    "Pilotage",
                    "Empathie",
                    "Politique",
                    "Eloquence",
                ]
            },
            {
                name: "Mokosh",
                powers:[
                    "Terre",
                    "Vigueur",
                    "Fertilité",
                    "Santé",
                ],
                abilities: [
                    "Animaux",
                    "Art",
                    "Empathie",
                    "Résistance",
                    "Médecine",
                    "Survie",
                ]
            },
            {
                name: "Morena",
                powers:[
                    "Mort",
                    "Apparence",
                    "Fertilité",
                    "Gel",
                ],
                abilities: [
                    "Commandement",
                    "Intégrité",
                    "Médecine",
                    "Occulte",
                    "Eloquence",
                    "Survie",
                ]
            },
            {
                name: "Perun",
                powers:[
                    "Force",
                    "Fertilité",
                    "Feu",
                    "Foudre",
                    "Guerre",
                ],
                abilities: [
                    "Pilotage",
                    "Tir",
                    "Mêlée",
                    "Eloquence",
                    "Survie",
                    "Lancé",
                ]
            },
            {
                name: "Radegast",
                powers:[
                    "Charisme",
                    "Ténèbres",
                    "Feu",
                    "Etoiles",
                ],
                abilities: [
                    "Art",
                    "Commandement",
                    "Empathie",
                    "Intégrité",
                    "Eloquence",
                    "Discrétion",
                ]
            },
            {
                name: "Stribog",
                powers:[
                    "Manipulation",
                    "Perception",
                    "Gel",
                    "Ciel",
                ],
                abilities: [
                    "Vigilance",
                    "Commandement",
                    "Empathie",
                    "Larcin",
                    "Discrétion",
                    "Survie",
                ]
            },
            {
                name: "Svantovit",
                powers:[
                    "Animal",
                    "Perception",
                    "Fertilité",
                    "Prophécie",
                    "Guerre",
                ],
                abilities: [
                    "Animaux",
                    "Vigilance",
                    "Commandement",
                    "Pilotage",
                    "Occulte",
                    "Eloquence",
                ]
            },
            {
                name: "Svarozhich",
                powers:[
                    "Artistique",
                    "Terre",
                    "Apparence",
                    "Perception",
                    "Force",
                    "Ciel",
                    "Soleil",
                    "Eau",
                ],
                abilities: [
                    "Culture",
                    "Animaux",
                    "Art",
                    "Commandement",
                    "Pilotage",
                    "Mêlée",
                ]
            },
            {
                name: "Veles",
                powers:[
                    "Animal",
                    "Mort",
                    "Manipulation",
                    "Fertilité",
                    "Illusion",
                    "Magie",
                ],
                abilities: [
                    "Art",
                    "Empathie",
                    "Larcin",
                    "Occulte",
                    "Discrétion",
                    "Survie",
                ]
            },
        ]
    },
    {
        name: "Deva",
        virtues: [
            "Devoir",
            "Endurance",
            "Harmonie",
            "Intelligence"
        ],
        gods: [
            {
                name: "Agni",
                powers:[
                    "Charisme",
                    "Intelligence",
                    "Feu",
                    "Psychopompe",
                ],
                abilities: [
                    "Résistance",
                    "Médecine",
                    "Occulte",
                    "Politique",
                    "Eloquence",
                    "Survie",
                ]
            },
            {
                name: "Brahma",
                powers:[
                    "Artistique",
                    "Intelligence",
                    "Vigueur",
                    "Illusion",
                    "Magie",
                ],
                abilities: [
                    "Culture",
                    "Art",
                    "Vigilance",
                    "Résistance",
                    "Occulte",
                    "Survie",
                ]
            },
            {
                name: "Ganesha",
                powers:[
                    "Animal",
                    "Intelligence",
                    "Perception",
                    "Vigueur",
                    "Magie",
                    "Psychopompe",
                ],
                abilities: [
                    "Culture",
                    "Art",
                    "Vigilance",
                    "Résistance",
                    "Occulte",
                    "Lancé",
                ]
            },
            {
                name: "Indra",
                powers:[
                    "Mort",
                    "Charisme",
                    "Perception",
                    "Force",
                    "Foudre",
                    "Guerre",
                    "Eau",
                ],
                abilities: [
                    "Athlétisme",
                    "Commandement",
                    "Pilotage",
                    "Tir",
                    "Mêlée",
                    "Eloquence",
                ]
            },
            {
                name: "Kali",
                powers:[
                    "Chaos",
                    "Ténèbres",
                    "Mort",
                    "Apparence",
                    "Force",
                    "Guerre",
                ],
                abilities: [
                    "Art",
                    "Athlétisme",
                    "Corps à Corps",
                    "Mêlée",
                    "Occulte",
                    "Eloquence",
                ]
            },
            {
                name: "Lakshmi",
                powers:[
                    "Apparence",
                    "Charisme",
                    "Intelligence",
                    "Perception",
                    "Magie",
                ],
                abilities: [
                    "Empathie",
                    "Intégrité",
                    "Occulte",
                    "Politique",
                    "Eloquence",
                    "Discrétion",
                ]
            },
            {
                name: "Parvati",
                powers:[
                    "Terre",
                    "Manipulation",
                    "Vigueur",
                    "Vivacité",
                ],
                abilities: [
                    "Vigilance",
                    "Empathie",
                    "Résistance",
                    "Intégrité",
                    "Médecine",
                    "Survie",
                ]
            },
            {
                name: "Sarasvati",
                powers:[
                    "Artistique",
                    "Apparence",
                    "Charisme",
                    "Intelligence",
                    "Eau",
                ],
                abilities: [
                    "Culture",
                    "Art",
                    "Vigilance",
                    "Empathie",
                    "Eloquence",
                    "Survie",
                ]
            },
            {
                name: "Shiva",
                powers:[
                    "Chaos",
                    "Mort",
                    "Dexterity",
                    "Vigueur",
                    "Santé",
                    "Foudre",
                ],
                abilities: [
                    "Art",
                    "Résistance",
                    "Intégrité",
                    "Mêlée",
                    "Occulte",
                    "Survie",
                ]
            },
            {
                name: "Surya",
                powers:[
                    "Perception",
                    "Feu",
                    "Santé",
                    "Etoiles",
                    "Soleil",
                ],
                abilities: [
                    "Vigilance",
                    "Pilotage",
                    "Intégrité",
                    "Investigation",
                    "Médecine",
                    "Eloquence",
                ]
            },
            {
                name: "Vishnu",
                powers:[
                    "Apparence",
                    "Charisme",
                    "Intelligence",
                    "Vigueur",
                    "Gardien",
                    "Mystère",
                    "Soleil",
                ],
                abilities: [
                    "Animaux",
                    "Vigilance",
                    "Commandement",
                    "Empathie",
                    "Mêlée",
                    "Eloquence",
                ]
            },
            {
                name: "Yama",
                powers:[
                    "Mort",
                    "Apparence",
                    "Justice",
                    "Psychompompe",
                ],
                abilities: [
                    "Vigilance",
                    "Empathie",
                    "Intégrité",
                    "Investigation",
                    "Occulte",
                    "Eloquence",
                ]
            },
        ]
    },
    {
        name: "Netjer",
        virtues: [
            "Conviction",
            "Harmonie",
            "Order",
            "Piété"
        ],
        gods: [
            {
                name: "Anubis",
                powers:[
                    "Animal",
                    "Mort",
                    "Perception",
                    "Justice",
                    "Psychopompe",
                ],
                abilities: [
                    "Animaux",
                    "Vigilance",
                    "Empathie",
                    "Investigation",
                    "Médecine",
                    "Occulte",
                ]
            },
            {
                name: "Bastet",
                powers:[
                    "Animal",
                    "Dexterity",
                    "Vivacité",
                    "Gardien",
                    "Lune",
                ],
                abilities: [
                    "Animaux",
                    "Athlétisme",
                    "Vigilance",
                    "Empathie",
                    "Occulte",
                    "Eloquence",
                ]
            },
            {
                name: "Hathor",
                powers:[
                    "Animal",
                    "Apparence",
                    "Charisme",
                    "Fertilité",
                    "Santé",
                    "Etoiles",
                ],
                abilities: [
                    "Animaux",
                    "Art",
                    "Empathie",
                    "Médecine",
                    "Politique",
                    "Eloquence",
                ]
            },
            {
                name: "Horus",
                powers:[
                    "Animal",
                    "Manipulation",
                    "Vivacité",
                    "Ciel",
                    "Soleil",
                    "Guerre",
                ],
                abilities: [
                    "Commandement",
                    "Empathie",
                    "Politique",
                    "Discrétion",
                    "Survie",
                    "Lancé",
                ]
            },
            {
                name: "Isis",
                powers:[
                    "Charisme",
                    "Manipulation",
                    "Vivacité",
                    "Gardien",
                    "Santé",
                    "Magie",
                    "Etoiles",
                ],
                abilities: [
                    "Empathie",
                    "Intégrité",
                    "Médecine",
                    "Occulte",
                    "Politique",
                    "Eloquence",
                ]
            },
            {
                name: "Nephthys",
                powers:[
                    "Ténèbres",
                    "Mort",
                    "Perception",
                    "Gardien",
                    "Santé",
                ],
                abilities: [
                    "Vigilance",
                    "Empathie",
                    "Résistance",
                    "Intégrité",
                    "Investigation",
                    "Médecine",
                ]
            },
            {
                name: "Osiris",
                powers:[
                    "Mort",
                    "Charisme",
                    "Fertilité",
                    "Justice",
                ],
                abilities: [
                    "Vigilance",
                    "Commandement",
                    "Intégrité",
                    "Occulte",
                    "Politique",
                    "Eloquence",
                ]
            },
            {
                name: "Ptah",
                powers:[
                    "Artistique",
                    "Terre",
                    "Charisme",
                    "Intelligence",
                    "Perception",
                    "Vigueur",
                ],
                abilities: [
                    "Culture",
                    "Art",
                    "Vigilance",
                    "Empathie",
                    "Investigation",
                    "Occulte",
                ]
            },
            {
                name: "Ra",
                powers:[
                    "Animal",
                    "Charisme",
                    "Perception",
                    "Justice",
                    "Soleil",
                ],
                abilities: [
                    "Vigilance",
                    "Commandement",
                    "Intégrité",
                    "Médecine",
                    "Politique",
                    "Eloquence",
                ]
            },
            {
                name: "Sekhmet",
                powers:[
                    "Animal",
                    "Dextérité",
                    "Force",
                    "Santé",
                    "Soleil",
                    "Guerre",
                ],
                abilities: [
                    "Animaux",
                    "Corps à Corps",
                    "Intégrité",
                    "Tir",
                    "Eloquence",
                    "Survie",
                ]
            },
            {
                name: "Set",
                powers:[
                    "Chaos",
                    "Terre",
                    "Force",
                    "Vigueur",
                    "Gardien",
                    "Foudre",
                ],
                abilities: [
                    "Athlétisme",
                    "Commandement",
                    "Résistance",
                    "Intégrité",
                    "Mêlée",
                    "Survie",
                ]
            },
            {
                name: "Sobek",
                powers:[
                    "Animal",
                    "Vigueur",
                    "Force",
                    "Fertilité",
                    "Gardien",
                    "Eau",
                ],
                abilities: [
                    "Animaux",
                    "Vigilance",
                    "Corps à Corps",
                    "Résistance",
                    "Intégrité",
                    "Survie",
                ]
            },
            {
                name: "Thoth",
                powers:[
                    "Animal",
                    "Intelligence",
                    "Justice",
                    "Magie",
                    "Lune",
                    "Mystère",
                ],
                abilities: [
                    "Culture",
                    "Art",
                    "Athlétisme",
                    "Intégrité",
                    "Investigation",
                    "Occulte",
                ]
            },
        ]
    },
    {
        name: "Orisha",
        virtues: [
            "Conviction",
            "Courage",
            "Expression",
            "Vengeance"
        ],
        gods: [
            {
                name: "Erinle",
                powers:[
                    "Animal",
                    "Terre",
                    "Vivacité",
                    "Eau",
                ],
                abilities: [
                    "Animaux",
                    "Athlétisme",
                    "Médecine",
                    "Occulte",
                    "Politique",
                    "Survie",
                ]
            },
            {
                name: "Eshu",
                powers:[
                    "Chaos",
                    "Ténèbres",
                    "Manipulation",
                    "Vivacité",
                    "Santé",
                    "Justice",
                    "Magie",
                    "Prophécie",
                    "Psychompompe",
                ],
                abilities: [
                    "Vigilance",
                    "Empathie",
                    "Larcin",
                    "Occulte",
                    "Politique",
                    "Discrétion",
                ]
            },
            {
                name: "Obatala",
                powers:[
                    "Artistique",
                    "Terre",
                    "Charisme",
                    "Fertilité",
                    "Gardien",
                    "Santé",
                ],
                abilities: [
                    "Culture",
                    "Art",
                    "Commandement",
                    "Intégrité",
                    "Médecine",
                    "Eloquence",
                ]
            },
            {
                name: "Ogun",
                powers:[
                    "Artistique",
                    "Terre",
                    "Perception",
                    "Justice",
                    "Guerre",
                ],
                abilities: [
                    "Animaux",
                    "Artisanat",
                    "Pilotage",
                    "Médecine",
                    "Mêlée",
                    "Survie",
                ]
            },
            {
                name: "Oko",
                powers:[
                    "Animal",
                    "Charisme",
                    "Fertilité",
                ],
                abilities: [
                    "Animaux",
                    "Résistance",
                    "Médecine",
                    "Mêlée",
                    "Politique",
                    "Survie",
                ]
            },
            {
                name: "Olokun",
                powers:[
                    "Apparence",
                    "Magie",
                    "Mystère",
                    "Eau",
                ],
                abilities: [
                    "Animaux",
                    "Art",
                    "Pilotage",
                    "Médecine",
                    "Mêlée",
                    "Survie",
                ]
            },
            {
                name: "Oshun",
                powers:[
                    "Apparence",
                    "Manipulation",
                    "Santé",
                    "Magie",
                    "Eau",
                ],
                abilities: [
                    "Art",
                    "Empathie",
                    "Larcin",
                    "Médecine",
                    "Eloquence",
                    "Survie",
                ]
            },
            {
                name: "Oya",
                powers:[
                    "Chaos",
                    "Mort",
                    "Apparence",
                    "Illusion",
                    "Thunder",
                    "Water",
                ],
                abilities: [
                    "Athlétisme",
                    "Larcin",
                    "Occulte",
                    "Elouence",
                    "Discrétion",
                    "Survie",
                ]
            },
            {
                name: "Shango",
                powers:[
                    "Manipulation",
                    "Vigueur",
                    "Force",
                    "Feu",
                    "Justice",
                    "Foudre",
                    "Guerre",
                ],
                abilities: [
                    "Art",
                    "Athlétisme",
                    "Commandement",
                    "Résistance",
                    "Mêlée",
                    "Eloquence",
                ]
            },
        ]
    },
    {
        name: "Teotl",
        virtues: [
            "Courage",
            "Conviction",
            "Devoir",
            "Loyauté"
        ],
        gods: [
            {
                name: "Chalchiuhtlicue",
                powers:[
                    "Animal",
                    "Charisme",
                    "Santé",
                    "Eau",
                ],
                abilities: [
                    "Empathie",
                    "Intégrité",
                    "Résistance",
                    "Médecine",
                    "Eloquence",
                    "Survie",
                ]
            },
            {
                name: "Huitzilopochtli",
                powers:[
                    "Animal",
                    "Mort",
                    "Charisme",
                    "Force",
                    "Gardien",
                    "Soleil",
                    "Guerre",
                ],
                abilities: [
                    "Vigilance",
                    "Commandement",
                    "Intégrité",
                    "Occulte",
                    "Survie",
                    "Lancé",
                ]
            },
            {
                name: "Mictlantecuhtli",
                powers:[
                    "Animal",
                    "Ténèbres",
                    "Mort",
                    "Apparence",
                ],
                abilities: [
                    "Animaux",
                    "Commandement",
                    "Intégrité",
                    "Investigation",
                    "Occulte",
                    "Eloquence",
                ]
            },
            {
                name: "Quetzalcoatl",
                powers:[
                    "Animal",
                    "Vigueur",
                    "Vivacité",
                    "Psychopompe",
                    "Ciel",
                    "Etoiles",
                ],
                abilities: [
                    "Culture",
                    "Empathie",
                    "Intégrité",
                    "Larcin",
                    "Politique",
                    "Discrétion",
                ]
            },
            {
                name: "Tezcaatlipoca",
                powers:[
                    "Animal",
                    "Chaos",
                    "Ténèbres",
                    "Terre",
                    "Charisme",
                    "Manipulation",
                    "Santé",
                    "Illusion",
                    "Magie",
                ],
                abilities: [
                    "Artisanat",
                    "Vigilance",
                    "Empathie",
                    "Médecine",
                    "Occulte",
                    "Discrétion",
                ]
            },
            {
                name: "Tlaloc",
                powers:[
                    "Mort",
                    "Terre",
                    "Apparence",
                    "Fertilité",
                    "Foudre",
                ],
                abilities: [
                    "Animaux",
                    "Résistance",
                    "Intégrité",
                    "Médecine",
                    "Eloquence",
                    "Survie",
                ]
            },
            {
                name: "Tlazolteotl",
                powers:[
                    "Terre",
                    "Apparence",
                    "Perception",
                    "Santé",
                    "Justice",
                ],
                abilities: [
                    "Vigilance",
                    "Empathie",
                    "Résistance",
                    "Intégrité",
                    "Investigation",
                    "Médecine",
                ]
            },
            {
                name: "Xipe Totec",
                powers:[
                    "Apparence",
                    "Charisme",
                    "Vigueur",
                    "Fertilité",
                ],
                abilities: [
                    "Art",
                    "Athlétisme",
                    "Commandement",
                    "Médecine",
                    "Eloquence",
                    "Survie",
                ]
            },
            {
                name: "Xochiquetzal",
                powers:[
                    "Apparence",
                    "Charisme",
                    "Fertilité",
                    "Santé",
                ],
                abilities: [
                    "Animaux",
                    "Science",
                    "Empathie",
                    "Médecine",
                    "Eloquence",
                    "Survie",
                ]
            },
        ]
    },
    {
        name: "Theoi",
        virtues: [
            "Expression",
            "Piété",
            "Intelligence",
            "Vengeance"
        ],
        gods: [
            {
                name: "Aphrodite",
                powers:[
                    "Apparence",
                ],
                abilities: [
                    "Animaux",
                    "Athlétisme",
                    "Vigilance",
                    "Empathie",
                    "Eloquence",
                    "Politique",
                ]
            },
            {
                name: "Appolo",
                powers:[
                    "Artistique",
                    "Apparence",
                    "Perception",
                    "Santé",
                    "Prophécie",
                    "Soleil",
                ],
                abilities: [
                    "Art",
                    "Athlétisme",
                    "Pilotage",
                    "Tir",
                    "Médecine",
                    "Eloquence",
                ]
            },
            {
                name: "Ares",
                powers:[
                    "Chaos",
                    "Apparence",
                    "Guerre",
                ],
                abilities: [
                    "Animaux",
                    "Corps à Corps",
                    "Pilotage",
                    "Intégrité",
                    "Mêlée",
                    "Eloquence",
                ]
            },
            {
                name: "Artemis",
                powers:[
                    "Animal",
                    "Dextérité",
                    "Lune",
                ],
                abilities: [
                    "Animaux",
                    "Art",
                    "Intégrité",
                    "Tir",
                    "Médecine",
                    "Survie",
                ]
            },
            {
                name: "Athena",
                powers:[
                    "Intelligence",
                    "Gardien",
                    "Guerre",
                ],
                abilities: [
                    "Culture",
                    "Artisanat",
                    "Commandement",
                    "Intégrité",
                    "Mêlée",
                    "Lancé",
                ]
            },
            {
                name: "Demeter",
                powers:[
                    "Fertilité",
                    "Mystère",
                    "Justice",
                ],
                abilities: [
                    "Culture",
                    "Vigilance",
                    "Intégrité",
                    "Occulte",
                    "Politique",
                    "Survie",
                ]
            },
            {
                name: "Dionysus",
                powers:[
                    "Chaos",
                    "Charisme",
                    "Vigueur",
                    "Fertilité",
                    "Mystère",
                ],
                abilities: [
                    "Art",
                    "Empathie",
                    "Résistance",
                    "Occulte",
                    "Eloquence",
                    "Survie",
                ]
            },
            {
                name: "Hades",
                powers:[
                    "Ténèbres",
                    "Mort",
                    "Terre",
                ],
                abilities: [
                    "Vigilance",
                    "Intégrité",
                    "Occulte",
                    "Politique",
                    "Eloquence",
                    "Discrétion",
                ]
            },
            {
                name: "Hephaestus",
                powers:[
                    "Artistique",
                    "Intelligence",
                    "Feu",
                ],
                abilities: [
                    "Culture",
                    "Animaux",
                    "Artisanat",
                    "Mêlée",
                    "Occulte",
                    "Lancé",
                ]
            },
            {
                name: "Hera",
                powers:[
                    "Apparence",
                    "Manipulation",
                    "Santé",
                    "Justice",
                ],
                abilities: [
                    "Empathie",
                    "Intégrité",
                    "Investigation",
                    "Mêlée",
                    "Politique",
                    "Eloquence",
                ]
            },
            {
                name: "Hermes",
                powers:[
                    "Manipulation",
                    "Vivacité",
                    "Magie",
                    "Psychompompe",
                ],
                abilities: [
                    "Animaux",
                    "Athlétisme",
                    "Empathie",
                    "Larcin",
                    "Occulte",
                    "Discrétion",
                ]
            },
            {
                name: "Pan",
                powers:[
                    "Animal",
                    "Artistique",
                    "Chaos",
                    "Fertilité",
                ],
                abilities: [
                    "Animaux",
                    "Art",
                    "Vigilance",
                    "Empathie",
                    "Eloquence",
                    "Survie",
                ]
            },
            {
                name: "Poseidon",
                powers:[
                    "Animal",
                    "Terre",
                    "Eau",
                ],
                abilities: [
                    "Animaux",
                    "Art",
                    "Pilotage",
                    "Mêlée",
                    "Politique",
                    "Survie",
                ]
            },
            {
                name: "Zeus",
                powers:[
                    "Charisme",
                    "Justice",
                    "Prophécie",
                    "Ciel",
                    "Foudre",
                ],
                abilities: [
                    "Animaux",
                    "Vigilance",
                    "Commandement",
                    "Politique",
                    "Eloquence",
                    "Lancé",
                ]
            },
        ]
    },
    {
        name: "Tuatha de Danann",
        virtues: [
            "Courage",
            "Expression",
            "Piété",
            "Vengeance",
        ],
        gods: [
            {
                name: "Aengus",
                powers:[
                    "Apparence",
                    "Charisme",
                    "Manipulation",
                ],
                abilities: [
                    "Empathie",
                    "Investigation",
                    "Intégrité",
                    "Mêlée",
                    "Politique",
                    "Eloquence",
                ]
            },
            {
                name: "Brigid",
                powers:[
                    "Artistique",
                    "Feu",
                    "Santé",
                ],
                abilities: [
                    "Animaux",
                    "Art",
                    "Médecine",
                    "Mêlée",
                    "Occulte",
                    "Politique",
                ]
            },
            {
                name: "Goibniu",
                powers:[
                    "Artistique",
                    "Intelligence",
                    "Vigueur",
                ],
                abilities: [
                    "Culture",
                    "Artisanat",
                    "Résistance",
                    "Médecine",
                    "Occulte",
                    "Lancé",
                ]
            },
            {
                name: "Lugh",
                powers:[
                    "Force",
                    "Charisme",
                    "Vivacité",
                    "Guerre",
                ],
                abilities: [
                    "Artisanat",
                    "Mêlée",
                    "Eloquence",
                    "Politique",
                    "Lancé",
                    "Survie",
                ]
            },
            {
                name: "Manannan mac Lir",
                powers:[
                    "Mort",
                    "Manipulation",
                    "Vivacité",
                    "Illusion",
                    "Psychopompe",
                    "Eau",
                ],
                abilities: [
                    "Animaux",
                    "Pilotage",
                    "Empathie",
                    "Larcin",
                    "Occulte",
                    "Politique",
                ]
            },
            {
                name: "Nuada",
                powers:[
                    "Charisme",
                    "Justice",
                    "Guerre",
                ],
                abilities: [
                    "Culture",
                    "Commandement",
                    "Intégrité",
                    "Mêlée",
                    "Politique",
                    "Eloquence",
                ]
            },
            {
                name: "Ogma",
                powers:[
                    "Manipulation",
                    "Force",
                    "Intelligence",
                    "Guerre",
                ],
                abilities: [
                    "Culture",
                    "Artisanat",
                    "Athlétisme",
                    "Empathie",
                    "Politique",
                    "Lancé",
                ]
            },
            {
                name: "The Dagda",
                powers:[
                    "Charisme",
                    "Vigueur",
                    "Force",
                    "Fertilité",
                    "Mystère",
                ],
                abilities: [
                    "Culture",
                    "Artisanat",
                    "Athlétisme",
                    "Résistance",
                    "Mêlée",
                    "Eloquence",
                ]
            },
            {
                name: "The Morrigan",
                powers:[
                    "Animal",
                    "Chaos",
                    "Apparence",
                    "Charisme",
                    "Mort",
                    "Prophécie",
                    "Guerre",
                ],
                abilities: [
                    "Animaux",
                    "Art",
                    "Corps à Corps",
                    "Larcin",
                    "Occulte",
                    "Eloquence",
                ]
            },
        ]
    },
    {
        name: "Yazata",
        virtues: [
            "Conviction",
            "Expression",
            "Ordre",
            "Valeur",
        ],
        gods: [
            {
                name: "Anahita",
                powers:[
                    "Apparence",
                    "Intelligence",
                    "Fertilité",
                    "Santé",
                    "Guerre",
                    "Eau",
                ],
                abilities: [
                    "Culture",
                    "Pilotage",
                    "Empathie",
                    "Intégrité",
                    "Investigation",
                    "Mêlée",
                ]
            },
            {
                name: "Ard",
                powers:[
                    "Apparence",
                    "Charisme",
                    "Fertilité",
                    "Magie",
                ],
                abilities: [
                    "Vigilance",
                    "Empathie",
                    "Résistance",
                    "Occulte",
                    "Eloquence",
                    "Survie",
                ]
            },
            {
                name: "Atar",
                powers:[
                    "Intelligence",
                    "Feu",
                    "Justice",
                    "Mystère",
                ],
                abilities: [
                    "Commandement",
                    "Résistance",
                    "Intégrité",
                    "Occulte",
                    "Eloquence",
                    "Survie",
                ]
            },
            {
                name: "Haoma",
                powers:[
                    "Apparence",
                    "Force",
                    "Fertilité",
                    "Santé",
                    "Lune",
                ],
                abilities: [
                    "Culture",
                    "Science",
                    "Corps à Corps",
                    "Commandement",
                    "Occulte",
                    "Eloquence",
                ]
            },
            {
                name: "Mah",
                powers:[
                    "Animal",
                    "Apparence",
                    "Charisme",
                    "Lune",
                    "Etoiles",
                ],
                abilities: [
                    "Animaux",
                    "Empathie",
                    "Intégrité",
                    "Politique",
                    "Eloquence",
                    "Survie",
                ]
            },
            {
                name: "Mithra",
                powers:[
                    "Charisme",
                    "Perception",
                    "Force",
                    "Gardien",
                    "Justice",
                    "Soleil",
                ],
                abilities: [
                    "Athlétisme",
                    "Corps à Corps",
                    "Commandement",
                    "Intégrité",
                    "Mêlée",
                    "Eloquence",
                ]
            },
            {
                name: "Sraosha",
                powers:[
                    "Apparence",
                    "Dextérité",
                    "Gardien",
                    "Justice",
                    "Psychopompe",
                ],
                abilities: [
                    "Athlétisme",
                    "Intégrité",
                    "Investigation",
                    "Mêlée",
                    "Occulte",
                    "Eloquence",
                ]
            },
            {
                name: "Tishtrya",
                powers:[
                    "Animal",
                    "Force",
                    "Fertilité",
                    "Etoiles",
                    "Foudre",
                    "Eau",
                ],
                abilities: [
                    "Animaux",
                    "Athlétisme",
                    "Corps à Corps",
                    "Intégrité",
                    "Occulte",
                    "Survie",
                ]
            },
            {
                name: "Vahram",
                powers:[
                    "Animal",
                    "Dextérité",
                    "Force",
                    "Feu",
                    "Magie",
                    "Guerre",
                ],
                abilities: [
                    "Athlétisme",
                    "Corps à Corps",
                    "Résistance",
                    "Tir",
                    "Mêlée",
                    "Lancé",
                ]
            },
            {
                name: "Vayu",
                powers:[
                    "Mort",
                    "Charisme",
                    "Vivacité",
                    "Ciel",
                ],
                abilities: [
                    "Empathie",
                    "Résistance",
                    "Médecine",
                    "Oculte",
                    "Politique",
                    "Eloquence",
                ]
            },
            {
                name: "Zam",
                powers:[
                    "Mort",
                    "Terre",
                    "Vigueur",
                    "Fertilité",
                ],
                abilities: [
                    "Commandement",
                    "Résistance",
                    "Intégrité",
                    "Occulte",
                    "Eloquence",
                    "Survie",
                ]
            },
        ]
    },
];

export default pantheons;
