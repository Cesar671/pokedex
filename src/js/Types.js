const NORMAL = "normal";
const GRASS = "grass";
const FIRE = "fire";
const WATER = "water";
const FLYING = "flying";
const STEEL = "steel";
const BUG = "bug";
const DRAGON = "dragon";
const ELECTRIC = "electric";
const GHOST = "ghost";
const FAIRY = "fairy";
const ICE = "ice";
const PSYCHIC = "psychic";
const ROCK = "rock";
const DARK = "dark";
const GROUND = "ground";
const POISON = "poison";
const FIGHTING = "fighting";

const EFICAZ = 2;
const DEBIL = 0.5;
const INMUNE = 0;

const NORMAL_TYPE = {
    name:NORMAL,
    from:[
            [FIGHTING, EFICAZ],
            [GHOST, INMUNE]
        ],
    to:[
            [STEEL, DEBIL],
            [ROCK, DEBIL],
            [GHOST, INMUNE]
        ]
}

const GRASS_TYPE = {
    name:GRASS,
    from:[
            [FIRE, EFICAZ],
            [ICE, EFICAZ],
            [POISON, EFICAZ],
            [FLYING, EFICAZ],
            [BUG, EFICAZ],
            [WATER, DEBIL],
            [GROUND, DEBIL],
            [ELECTRIC, DEBIL],
            [GRASS, DEBIL]
        ],
    to:[
            [WATER, EFICAZ],
            [ROCK, EFICAZ],
            [GROUND, EFICAZ],
            [STEEL, DEBIL],
            [BUG, DEBIL],
            [DRAGON, DEBIL],
            [FIRE, DEBIL],
            [GRASS, DEBIL],
        ]
}

const FIRE_TYPE = {
    name: FIRE,
    from:[
            [WATER, EFICAZ],
            [GROUND, EFICAZ],
            [ROCK, EFICAZ],
            [FIRE, DEBIL],
            [GRASS, DEBIL],
            [ICE, DEBIL],
            [BUG, DEBIL],
            [STEEL, DEBIL],
            [FAIRY, DEBIL]
        ],
    to:[
            [STEEL, EFICAZ],
            [BUG, EFICAZ],
            [ICE, EFICAZ],
            [GRASS, EFICAZ],
            [WATER, DEBIL],
            [DRAGON, DEBIL],
            [FIRE, DEBIL],
            [ROCK, DEBIL]
        ],
}

const WATER_TYPE = {
    name: WATER,
    from:[
            [ELECTRIC, EFICAZ],
            [GRASS, EFICAZ],
            [STEEL, DEBIL],
            [WATER, DEBIL],
            [ICE, DEBIL],
            [FIRE, DEBIL],
        ],
    to:[
            [FIRE, EFICAZ],
            [ROCK, EFICAZ],
            [GROUND, EFICAZ],
            [WATER, DEBIL],
            [DRAGON, DEBIL],
            [GRASS, DEBIL]
        ],
}

const FLYING_TYPE = {
    name: FLYING,
    from:[
            [ELECTRIC, EFICAZ],
            [ICE, EFICAZ],
            [ROCK, EFICAZ],
            [FIGHTING, DEBIL],
            [BUG, DEBIL],
            [GRASS, DEBIL],
            [GROUND, INMUNE],
        ],
    to:[
            [BUG, EFICAZ],
            [FIGHTING, EFICAZ],
            [GRASS, EFICAZ],
            [STEEL, DEBIL],
            [ELECTRIC, DEBIL],
            [ROCK, DEBIL],
        ],
}

const STEEL_TYPE = {
    name: STEEL,
    from:[
            [FIGHTING, EFICAZ],
            [GROUND, EFICAZ],
            [FIRE, EFICAZ],
            [NORMAL, DEBIL],
            [GRASS, DEBIL],
            [ICE, DEBIL],
            [FLYING, DEBIL],
            [PSYCHIC, DEBIL],
            [BUG, DEBIL],
            [ROCK, DEBIL],
            [DRAGON, DEBIL],
            [STEEL, DEBIL],
            [FAIRY, DEBIL],
            [POISON, INMUNE]
        ],
    to:[
            [FAIRY, EFICAZ],
            [ICE, EFICAZ],
            [ROCK, EFICAZ],
            [STEEL, DEBIL],
            [WATER, DEBIL],
            [ELECTRIC, DEBIL],
            [FIRE, DEBIL]
        ],
}

const BUG_TYPE = {
    name: BUG,
    from:[
            [FIRE, EFICAZ],
            [FLYING, EFICAZ],
            [ROCK, EFICAZ],
            [FIGHTING, DEBIL],
            [GROUND, DEBIL],
            [GRASS, DEBIL],
        ],
    to:[
            [GRASS, EFICAZ],
            [PSYCHIC, EFICAZ],
            [DARK, EFICAZ],
            [STEEL, DEBIL],
            [GHOST, DEBIL],
            [FIRE, DEBIL],
            [FAIRY, DEBIL],
            [FIGHTING, DEBIL]
        ],
    
}

const DRAGON_TYPE = {
    name: DRAGON,
    from:[
            [FAIRY, EFICAZ],
            [ICE, EFICAZ],
            [DRAGON, EFICAZ],
            [FIRE, DEBIL],
            [GRASS, DEBIL],
            [WATER, DEBIL],
            [ELECTRIC, DEBIL],
        ],
    to:[
            [DRAGON, EFICAZ],
            [STEEL, DEBIL],
            [FAIRY, INMUNE]
        ]
    
}

const ELECTRIC_TYPE = {
    name: ELECTRIC,
    from:[
            [ELECTRIC, EFICAZ],
            [STEEL, DEBIL],
            [ELECTRIC, DEBIL],
            [FLYING, DEBIL], 
        ]
    ,
    to:[
            [WATER, EFICAZ],
            [FLYING, EFICAZ],
            [DRAGON, DEBIL],
            [ELECTRIC, DEBIL],
            [GRASS, DEBIL],
            [GROUND, INMUNE]
        ]
}

const FAIRY_TYPE = {
    name: FAIRY,
    from:[
            [STEEL, EFICAZ],
            [POISON, EFICAZ],
            [BUG, DEBIL],
            [FIGHTING, DEBIL],
            [DARK, DEBIL],
            [DRAGON, INMUNE]
        ],
    to:[
            [DRAGON, EFICAZ],
            [FIGHTING, EFICAZ],
            [DARK, EFICAZ],
            [STEEL, DEBIL],
            [FIRE, DEBIL],
            [POISON, DEBIL],  
        ]
}

const GHOST_TYPE = {
    name: GHOST,
    from:[
            [GHOST, EFICAZ],
            [DARK, EFICAZ],
            [BUG, DEBIL],
            [POISON, DEBIL],
            [FIGHTING, INMUNE],
            [NORMAL, INMUNE],
        ],
    to:[
            [GHOST, EFICAZ],
            [PSYCHIC, EFICAZ],
            [DARK, DEBIL],
            [NORMAL, INMUNE]
        ]
}

const ICE_TYPE = {
    name: ICE,
    from:[
            [STEEL, EFICAZ],
            [FIRE, EFICAZ],
            [FIGHTING, EFICAZ],
            [ROCK, EFICAZ],
            [ICE, DEBIL],
    ],
    to:[
            [DRAGON, EFICAZ],
            [GRASS, EFICAZ],
            [GROUND, EFICAZ],
            [FLYING, EFICAZ],
            [STEEL, DEBIL],
            [WATER, DEBIL],
            [FIRE, DEBIL],
            [ICE, DEBIL]
    ]
    
}

const PSYCHIC_TYPE = {
    name: PSYCHIC,
    from:[
            [BUG, EFICAZ],
            [GHOST, EFICAZ],
            [DARK, EFICAZ],
            [FIGHTING, DEBIL],
            [PSYCHIC, DEBIL],
    ],
    to:[
            [FIGHTING, EFICAZ],
            [POISON, EFICAZ],
            [STEEL, DEBIL],
            [PSYCHIC, DEBIL],
            [DARK, INMUNE]
    ]
    
}

const ROCK_TYPE = {
    name: ROCK,
    from:[
            [STEEL, EFICAZ],
            [WATER, EFICAZ],
            [FIGHTING, EFICAZ],
            [GRASS, EFICAZ],
            [GROUND, EFICAZ],
            [FIRE, DEBIL],
            [NORMAL, DEBIL],
            [POISON, DEBIL],
            [FLYING, DEBIL]
    ],
    to:[
            [BUG, EFICAZ],
            [FIRE, EFICAZ],
            [ICE, EFICAZ],
            [FLYING, EFICAZ],
            [STEEL, DEBIL],
            [FIGHTING, DEBIL],
            [GROUND, DEBIL]
    ]
}

const DARK_TYPE = {
    name: DARK,
    from:[
            [BUG, EFICAZ],
            [FAIRY, EFICAZ],
            [FIGHTING, EFICAZ],
            [GHOST, DEBIL],
            [DARK, DEBIL],
            [PSYCHIC, INMUNE]
    ],
    to:[
            [GHOST, EFICAZ],
            [PSYCHIC, EFICAZ],
            [FIGHTING, DEBIL],
            [FAIRY, DEBIL],
            [DARK, DEBIL]
    ]
    
}

const GROUND_TYPE = {
    name: GROUND,
    from:[
        [WATER, EFICAZ],
        [ICE, EFICAZ],
        [GRASS, EFICAZ],
        [ROCK, DEBIL],
        [POISON, DEBIL],
        [ELECTRIC, INMUNE],
    ],
    to:[
        [STEEL, EFICAZ],
        [ELECTRIC, EFICAZ],
        [ROCK, EFICAZ],
        [POISON, EFICAZ],
        [FIRE, EFICAZ],
        [BUG, DEBIL],
        [GRASS, DEBIL],
        [FLYING, INMUNE]
    ]
}

const POISON_TYPE = {
    name: POISON,
    from:[
            [PSYCHIC, EFICAZ],
            [GROUND, EFICAZ],
            [BUG, DEBIL],
            [FAIRY, DEBIL],
            [FIGHTING, DEBIL],
            [GRASS, DEBIL],
            [POISON, DEBIL]
    ],
    to:[
            [GRASS, EFICAZ],
            [FAIRY, EFICAZ],
            [GHOST, DEBIL],
            [ROCK, DEBIL],
            [GROUND, DEBIL],
            [POISON, DEBIL],
            [STEEL, INMUNE]
        ]
}

const FIGHTING_TYPE = {
    name: FIGHTING,
    from:[
        [FAIRY, EFICAZ],
        [PSYCHIC, EFICAZ],
        [FLYING, EFICAZ],
        [BUG, DEBIL],
        [ROCK, DEBIL],
        [DARK, DEBIL],
    ],
    to:[
        [STEEL, EFICAZ],
        [ICE, EFICAZ],
        [NORMAL, EFICAZ],
        [ROCK, EFICAZ],
        [DARK, EFICAZ],
        [BUG, DEBIL],
        [FAIRY, DEBIL],
        [PSYCHIC, DEBIL],
        [POISON, DEBIL],
        [FLYING, DEBIL],
        [GHOST, INMUNE],
    ]
    
}


const getType = (Type) => {
    switch (Type) {
        case NORMAL:
            return NORMAL_TYPE;
        case GRASS:
            return GRASS_TYPE;
        case FIRE:
            return FIRE_TYPE;
        case WATER:
            return WATER_TYPE;
        case FLYING:
            return FLYING_TYPE;
        case STEEL:
            return STEEL_TYPE;
        case BUG:
            return BUG_TYPE;
        case DRAGON:
            return DRAGON_TYPE;
        case ELECTRIC:
            return ELECTRIC_TYPE;
        case GHOST:
            return GHOST_TYPE; 
        case FAIRY:
            return FAIRY_TYPE;
        case ICE:
            return ICE_TYPE;
        case PSYCHIC:
            return PSYCHIC_TYPE;
        case ROCK:
            return ROCK_TYPE;
        case DARK:
            return DARK_TYPE;
        case GROUND:
            return GROUND_TYPE;
        case POISON:
            return POISON_TYPE;
        case FIGHTING:
            return FIGHTING_TYPE;
        default:
            return null
    }
}

const interceptsTypes = (dataT, weakness) => {
    const nameType = weakness[0]
    if(!dataT.some( data => data.includes(nameType) )) {
        dataT.push(weakness)
    } else {
        const index = dataT.findIndex(data => data.includes(nameType))
        dataT[index][1] = dataT[index][1] * weakness[1]
    }
}

const cleanTypes = (type) => {
    const from = type.from.filter((data) => data[1] != 1);
    const to = type.to.filter((data) => data[1] != 1);
    type.from = from;
    type.to = to;
}

export const getDataType = (types = []) => {
    const dataTypeRes ={ 
        name: "",
        from:[],
        to:[]
    }

    types.forEach((type) => {
        const dataType = getType(type)
        dataTypeRes.name = `${ dataTypeRes.name }/${ dataType.name }`
        dataType.from.forEach((weakness) => {
            interceptsTypes(dataTypeRes.from, weakness);
        })
        dataType.to.forEach((weakness) => {
            interceptsTypes(dataTypeRes.to, weakness);
        })
    })

    cleanTypes(dataTypeRes)
    return dataTypeRes
}