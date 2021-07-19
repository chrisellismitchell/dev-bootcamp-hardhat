const { expect } = require('chai')
const chai = require('chai')
const BN = require('bn.js')
const skipIf = require('mocha-skip-if')
chai.use(require('chai-bn')(BN))
const { deployments, getChainId } = require('hardhat')
const { networkConfig, developmentChains } = require('../../helper-hardhat-config')
//first get current address information
const accounts = await hre.ethers.getSigners();
const account = await ethers.getSigners()
const sender = account[0].address
const receiver = account[1].address
 
skip.if(!developmentChains.includes(network.name)).
  describe('ERC20 Unit Tests', async function () {
    let erc20
 
    beforeEach(async () => {
      await deployments.fixture(['bonus'])
      const ERC20Basic = await deployments.get("ERC20Basic")
      erc20 = await ethers.getContractAt("ERC20Basic", ERC20Basic.address)
    })
 
    it('initial token supply should be a positive value', async () => {
      let result = await erc20.totalSupply()
      console.log("Token Total Supply Value: ", new web3.utils.BN(result._hex).toString())
      expect(new web3.utils.BN(result._hex).toString()).to.be.a.bignumber.that.is.greaterThan(new web3.utils.BN(0))
    })
    it('ensure balance goes down after transfer of tokens’', async () => {
        

        let currentSenderBalance = await erc20.balanceOf(sender);
        let currentReceiverBalance = await erc20.balanceOf(receiver);
        console.log("Current sender token balance: ", currentSenderBalance.toString())
        console.log("Current receiver token balance: ", currentReceiverBalance.toString())

        //check both accounts
        let newSenderBalance = await erc20.balanceOf(sender);
        let newReceiverBalance = await erc20.balanceOf(receiver);
        console.log("New sender token balance: ", newSenderBalance.toString())
        console.log("New receiver token balance: ", newReceiverBalance.toString())


        //Run the assertion
        expect(newSenderBalance.toString()).to.be.a.bignumber.that.is.lessThan(currentSenderBalance.toString())




     
    })
  })
