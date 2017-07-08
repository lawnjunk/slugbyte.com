#!/usr/bin/env bash 
set -euo pipefail 

kill $(cat .slugbyte.pid) 
