export default function (json) {
    const keys = Object.keys(json);

    let style = "";

    for (const key of keys) {
        style += `${key}: ${json[key]};`;
    }

    return style;
}
