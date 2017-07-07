#!/usr/bin/env bash 
set -euo pipefail 

node $PWD/index.js & 
echo $! > .slugbyte-pid 
