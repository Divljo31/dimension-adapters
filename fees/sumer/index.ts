import { compoundV2Export } from "../../helpers/compoundV2";

const comptrollers = {
  meter: "0xcB4cdDA50C1B6B0E33F544c98420722093B7Aa88",
  base: "0x611375907733D9576907E125Fb29704712F0BAfA",
  arbitrum: "0xBfb69860C91A22A2287df1Ff3Cdf0476c5aab24A",
  ethereum: "0x60A4570bE892fb41280eDFE9DB75e1a62C70456F",
  zklink: "0xe6099D924efEf37845867D45E3362731EaF8A98D",
  bsquared: "0xdD9C863197df28f47721107f94eb031b548B5e48",
  core: "0x7f5a7aE2688A7ba6a9B36141335044c058a08b3E",
  bsc: "0x15B5220024c3242F7D61177D6ff715cfac4909eD",
  berachain: "0x16C7d1F9EA48F7DE5E8bc3165A04E8340Da574fA",
  hemi: "0xB2fF02eEF85DC4eaE95Ab32AA887E0cC69DF8d8E",
};

export default compoundV2Export(comptrollers);
