#!/usr/bin/env bash

# exit on first error after this point to avoid redeploying with successful build
set -e

echo
echo ---------------------------------------------------------
echo "Step 0: Check for environment variable with contract name"
echo ---------------------------------------------------------
echo

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1
[ -z "$CONTRACT" ] || echo "Found it! \$CONTRACT is set to [ $CONTRACT ]"
[ -z "$ACCOUNT" ] && echo "Missing \$ACCOUNT environment variable" && exit 1
[ -z "$ACCOUNT" ] || echo "Found it! \$ACCOUNT is set to [ $ACCOUNT ]"

echo
echo ---------------------------------------------------------
echo "Step 1: Call 'getProperty' function on the contract"
echo ---------------------------------------------------------
echo

near call $CONTRACT getProperty '{"propertyId": "12"}' --accountId $ACCOUNT

echo
echo ---------------------------------------------------------
echo "Step 2: Call 'getProperty' function on the contract with non existing id"
echo ---------------------------------------------------------
echo

near call $CONTRACT getProperty '{"propertyId": "15"}' --accountId $ACCOUNT

echo
echo "now run this script again to see changes made by this file"
exit 0
