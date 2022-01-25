const Stadiums = artifacts.require("Stadiums");

module.exports = function (deployer) {
  deployer.deploy(Stadiums);
};
