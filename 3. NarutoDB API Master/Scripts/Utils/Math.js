export function valueFormat(Num) {
    let Format;

    if (Num >= 1000000) {
        Format = Math.floor(Num / 100000) / 10 + "M+"
    } else if (Num >= 10000) {
        Format = Math.floor(Num / 1000) + "K+";
    } else if (Num >= 1000) {
        Format = Math.floor(Num / 100) * 100 + "+";
    } else if (Num >= 100) {
        Format = Math.floor(Num / 10) * 10 + "+";
    } else if (Num >= 10) {
        Format = Math.floor(Num / 10) * 10 + "+";
    } else {
        Format = Num;
    }
    return Format;
}