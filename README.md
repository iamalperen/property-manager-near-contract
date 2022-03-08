# Property Manager Near Contract

This is a smart contract developed in AssemblyScript to track people's properties on blockchain. This smart contract is
working on Near Protocol.

[![Packagist](https://img.shields.io/packagist/l/doctrine/orm.svg)]()
[![PyPI](https://img.shields.io/pypi/status/Django.svg)]()

## Project Overview

Deployed Contract: https://explorer.testnet.near.org/transactions/79zc9e1d3F4tCQMp4sQwKdea4mp9uPNHJv94FNnTKjM2

User Interface - Frontend Project :

Initial Home Page

![](https://github.com/iamalperen/property-manager-near-contract/blob/main/ss/1.png?raw=true)

Property List After Login without having property

![](https://github.com/iamalperen/property-manager-near-contract/blob/main/ss/2.png?raw=true)

Property List After Login with having property

![](https://github.com/iamalperen/property-manager-near-contract/blob/main/ss/4.png?raw=true)


Property Creation Modal

![](https://github.com/iamalperen/property-manager-near-contract/blob/main/ss/3.png?raw=true)


## Usage

### Installation

1. clone this repo
2. run `yarn install` (or `npm install`)
3. run `yarn build` (or `npm run build`)
4. run `yarn test` (or `npm run test`)
5. explore the contents of `src/`

### Helper Scripts

To see and understand the contract, please check the below scripts in details.

Install `NEAR CLI` first like this: `npm i -g near-cli`

run `yarn`

run `near login` and login to your Near account

#### Development Mode Deployment

run `./scripts/dev-deploy.sh` and the contract will be deployed

#### Production Mode Deployment

run `./scripts/prod-deploy.sh` and the contract will be deployed

#### Creating Property Script

run `./scripts/create-property.sh` and a new property will be added to your contract

#### Deleting Property Script

run `./scripts/delete-property.sh` and an existing property will be removed from your contract

#### Getting All Properties Script

run `./scripts/get-all-properties.sh` and all existing properties from your contract will be returned

#### Getting Specific Property Script

run `./scripts/get-property.sh` and an existing property from your contract will be returned


### Unit Tests

[Describe]: Person
[Success]: ✔ should able to create a new property <br />
[Success]: ✔ should not able to create a property with same id <br />
[Success]: ✔ should able to get a property by id <br />
[Success]: ✔ should not able to get a property by non existing id <br />
[Success]: ✔ should able to get all properties after creating 2 properties <br />
[Success]: ✔ should not able to get all properties without creating any property <br />
[Success]: ✔ should not able to get all properties without accurate account id <br />
[Success]: ✔ should able to remove a property by id <br />
[Success]: ✔ should not able to remove a property by non existing id <br />



## Meta

Created and maintained by [Alperen](https://github.com/iamalperen) under [MIT](LICENSE.md) License
