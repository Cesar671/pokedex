export const DATA_COLORS = {
    "electric": "yellow",
    "grass": "green",
    "poison": "purple",
    "water": "skyblue",
    "ice": "aqua",
    "fire": "orange",
    "normal": "gray",
    "flying": "cornflowerblue",
    "steel": "teal",
    "bug": "darkgreen",
    "dragon": "darkblue",
    "ghost": "darklateblue",
    "fairy": "hotpink",
    "psychic": "deeppink",
    "rock": "burlywood",
    "dark": "black",
    "ground": "chocolate",
    "fighting": "red",
}

export const DATA_DMG =(data) => {
    switch (data) {
        case 0:
            return {
                color: "black",
                msg: "inmune"
            }
        case 0.50:
            return {
                color: "blue",
                msg: "non effective "
            }
        case 0.25:
            return {
                color: "darkblue",
                msg: "non effective"
            }
        case 2:
            return {
                color: "orange",
                msg: "effective"
            }
        default:
            return {
                color: "red",
                msg: "super effective"
            }
    }
}