import { InjectedConnector } from "@web3-react/injected-connector";
import { SupportedChainIds } from "./chains";

const supportedChainIds = Object.keys(SupportedChainIds).map((k) => Number(k));

export const injected = new InjectedConnector({
  supportedChainIds,
});
