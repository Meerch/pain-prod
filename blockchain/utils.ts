import {abiPain} from "./abiPain";

export const generateContractPainSetting = (methodName: string, additionalSettings?) => ({
    addressOrName: '0x95eBBdfE571DF72C1Da8B87166B39CEFC1B6ce9f',
    contractInterface: abiPain,
    functionName: methodName,
    ...additionalSettings
})