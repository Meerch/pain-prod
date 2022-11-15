import {abiPain} from "./abiPain";

export const generateContractPainSetting = (methodName: string, additionalSettings?) => ({
    addressOrName: '0x2E454984B1F1A435B52edF57b69C755cde6cCA0b',
    contractInterface: abiPain,
    functionName: methodName,
    ...additionalSettings
})