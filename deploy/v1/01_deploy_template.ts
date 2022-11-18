import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const contractName = "SomeContract";
const contractVersion = "someVersion";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {

  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  let { deployer } = await getNamedAccounts();

  await deploy(contractName, {
    from: deployer,
    log: true,
  });

};

export default func;
func.id = contractName + contractVersion;
func.tags = [contractName, contractVersion];