const CANTRIP = 0;

export const formatJustLevel = (level) => {
    switch (level) {
        case CANTRIP:
            return "cantrip";
        case 1:
            return "1st";
        case 2:
            return "2nd";
        case 3:
            return "3rd";
        default:
            return level + "th";
    }
}

export const formatLevel = (level) => {
    switch (level) {
        case CANTRIP:
            return "cantrip";
        case 1:
            return "1st-level";
        case 2:
            return "2nd-level";
        case 3:
            return "3rd-level";
        default:
            return `${level}th-level`;
    }
}

export const capitalize = (word) => word.length > 0
    ? word.charAt(0).toUpperCase() + word.substring(1)
    : word;

export const formatLevelAndSchool = (level, school) => {
    if (level === CANTRIP) {
        return `${capitalize(school)} ${formatLevel(level)}`;
    } else {
        return `${formatLevel(level)} ${school}`;
    }
}

export const formatClasses = (classes) => {
    if (classes.length === 0) {
        return "No classes";
    } else {
        return capitalize(classes.join(", "));
    }
}

// export const formatLevelList = (level) => level === 0
//     ? "Cantrip"
//     : "" + level;
