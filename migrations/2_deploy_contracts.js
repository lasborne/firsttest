const StakeDAO = artifacts.require("StakeDAO.sol");

module.exports = function(deployer) {
  deployer.deploy(StakeDAO);
};
