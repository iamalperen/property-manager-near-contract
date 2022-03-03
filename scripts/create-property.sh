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

echo
echo ---------------------------------------------------------
echo "Step 1: Call 'createProperty' function on the contract"
echo ---------------------------------------------------------
echo

near call $CONTRACT createProperty '{"propertyId": "11", "name": "Home Sweet Home", "type": 1, "address": "Istanbul", "coords": "40.99047310894828,29.022050248371137"}' --accountId $CONTRACT

echo
echo ---------------------------------------------------------
echo "Step 2: Call 'createProperty' function again on the contract with the same id"
echo ---------------------------------------------------------
echo

near call $CONTRACT createProperty '{"propertyId": "11", "name": "Home Sweet Home", "type": 1, "address": "Istanbul", "coords": "40.99047310894828,29.022050248371137"}' --accountId $CONTRACT

echo
echo "now run this script again to see changes made by this file"
exit 0
