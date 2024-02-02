#!/bin/bash

# Check if user has phpBashMocker alias setup
# If alias is not setup, then add it into bashrc file
# If is added, return that alias is setup

# Color codes - TODO - to be moved from here
RED="\e[31m"
GREEN="\e[32m"
BOLDGREEN="\e[1;${GREEN}"
BOLDRED="\e[1;${RED}"
ENDCOLOR="\e[0m"

phpBashMocker_found=false
phpBashMocker_installed=false



if ! command -v phpBashMocker &> /dev/null
then
    echo -e "${BOLDGREEN}===========================================${ENDCOLOR}"
    echo -e "${BOLDRED}000 - <phpBashMocker> command could not be found${ENDCOLOR}"
    echo -e "${BOLDGREEN}001 - <phpBashMocker> will be installed on system${ENDCOLOR}"
    echo -e "${BOLDGREEN}===========================================${ENDCOLOR}"
    exit 1
fi