export const formatLevel = (level) => {
    switch (level) {
        case 1:
            return "1st Level";
        case 2:
            return "2nd Level";
        case 3:
            return "3rd Level";
        default:
            return `${level}th Level`;
    }
};

const curry = (func, initialArgs = []) => (...additionalArgs) => {
    const args = [...initialArgs, ...additionalArgs];
    return (args.length >= func.length)
        ? func(...args)
        : curry(func, args);
}