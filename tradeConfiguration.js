const tokens = {
  router: "", // Router of the desired network (TRADERJOE)
  stableToken: "",  // Stablecoin to be used (MIM)
  ethToken: "",     // Reserve currency of the desired network (AVAX)
  tokenOutput: "",  // Token to be sniped (TestToken)
  nbSwap: 1,  // Numbers of transactions to be sent
  inputAmountETH: 0.1, // Input amount of reserve currency
  inputAmountStable: 100, // Input amount of desired stablecoin
  txSecondsDelay: 12000, // Deadline for the transaction


  // Front Run config
  fromAddress: '' // address that adds the liquidity
};

module.exports = tokens;
