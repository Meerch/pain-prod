import { BigNumberish, ethers } from "ethers";
import web3 from "web3";

export const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

export const formatEther = (value1: BigNumberish): string => {
    return ethers.utils.formatEther(value1)
}


export const toWei = (value2: string): number => {
    return +web3.utils.toWei(value2, "ether")
}