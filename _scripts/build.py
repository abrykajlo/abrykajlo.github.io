#!/usr/bin/python3.6

import sys
import os

import yaml

def readPostYAML(filename):
    file = os.open(filename, 'r')

rawrEnginePath = os.environ['RAWR_ENGINE_PATH'])

if __name__ == "__main__":
    filename = sys.argv[1]
    tag, copyDict = readPostYAML(filename)
    
    os.chdir(rawrEnginePath)
    os.system('scons --clean')
