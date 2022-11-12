export interface Stats {
    eth: number
    change: number
}

export interface MetaToken {

}


export interface SpeedometerSchema {
    stats?: Stats
    metaToken?: MetaToken
    currentRound?: number
    signature?: any
}