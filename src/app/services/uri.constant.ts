const PROTOCOL = 'https://';
// const PROTOCOL = 'http://';
const HOST = 'www.thinmelon.cc';
// const HOST = 'localhost:4200';
const API = '/finance';
const PREFIX = PROTOCOL + HOST + API;

export class UriConstant {
    static ChinaBond(from: string, to: string): string {
        return `${ PREFIX }/bond/${ from }-${ to }`;
    }
}
