#!/usr/bin/env bash

# exit on first error after this point to avoid redeploying with successful build
set -e

echo
echo ---------------------------------------------------------
echo "Step 0: Check for required environment variables"
echo ---------------------------------------------------------
echo

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1
[ -z "$ACCOUNT" ] && echo "Missing \$ACCOUNT environment variable" && exit 1
[ -z "$CONTRACT" ] || echo "Found it! \$CONTRACT is set to [ $CONTRACT ]"
[ -z "$ACCOUNT" ] || echo "Found it! \$ACCOUNT is set to [ $ACCOUNT ]"

echo
echo
echo ---------------------------------------------------------
echo "Step 1: Delete $CONTRACT, setting $ACCOUNT as beneficiary"
echo ---------------------------------------------------------
echo
near delete $CONTRACT $ACCOUNT

echo
echo ---------------------------------------------------------
echo "Step 2: Clean up project folders"
echo ---------------------------------------------------------
echo
yarn clean

exit 0
