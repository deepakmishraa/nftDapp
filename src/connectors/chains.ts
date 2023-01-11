export const SupportedChainIds = {
  1: "ethereum",
  3: "ropsten",
  4: "rinkeby",
  10: "optimism",
  42: "kovan",
  42161: "arbitrum",
};

export type SupportedChainIDs = 1 | 3 | 4 | 10 | 42 | 42161;

export const getChainNameByID = (chainID: SupportedChainIDs): string => {
  return SupportedChainIds[chainID] || "ethereum";
};
