export const delay = async (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
export const classNamesBuilder = (...classNames: (string | Record<string, boolean>)[]) => {
    const classNamesArray: string[] = [];

    classNames.reduce((acc, className) => {
        if (typeof className === "string") {
            acc.push(className);
        } else if (typeof className === "object") {
            Object.entries(className).forEach(([className, condition]) => {
                if (condition) acc.push(className);
            })
        }
        return acc;
    }, classNamesArray)

    return classNamesArray.join(" ");
}