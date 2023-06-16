export interface Card {
    name: string,
    desc: string,
    pubDate: string,
    modDate: string,
    color: string,
    exercises: Execise[],
}

export interface Execise {
    name: string,
    rep: string,
    series: string,
    description: string,
    influenceArea: string[],
}