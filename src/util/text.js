const CANTRIP = 0;

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

const capitalize = (word) => word.length > 0
    ? word.charAt(0).toUpperCase() + word.substring(1)
    : word;

export const formatLevelAndSchool = (level, school) => {
    if (level === CANTRIP) {
        return `${capitalize(school)} ${formatLevel(level)}`;
    } else {
        return `${formatLevel(level)} ${school}`;
    }
}