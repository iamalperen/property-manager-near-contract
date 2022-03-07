### Terminal

*This window is used to compile, deploy and control the contract*
- Environment
  ```sh
  export CONTRACT=        # depends on deployment
  export ACCOUNT=         # any account you control

  # for example
  # export CONTRACT=dev-16451486-3003612795
  # export OWNER=testeraccount.testnet
  ```

- Commands

  _Owner scripts_
  ```sh
  dev-deploy.sh             # cleanup, compile and deploy contract in development mode
  prod-deploy.sh            # cleanup, compile and deploy contract in production mode
  cleanup.sh                # cleanup env variables and settings
  ```

  _Public scripts_
  ```sh
  create-property.sh         # creating property, if you run twice, error will be thrown due to same property creation
  get-property.sh            # getting property by its id and getting error by trying to get non existing id
  delete-property.sh         # deleting property by its id and getting error by trying to delete non existing id
  get-all-properties.sh      # getting all properties of $ACCOUNT
  ```

