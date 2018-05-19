#!/usr/bin/python3.6

import sys
import os

import yaml

def readPostYAML(filename):
    file = open(filename, 'r')
    buf = file.read()
    frontMatter = buf.split('---')[1]
    frontMatter = yaml.load(frontMatter)
    return frontMatter['rawr_hash'], frontMatter['rawr_copy_map']


rawrEnginePath = os.environ['RAWR_ENGINE_PATH']

if __name__ == "__main__":
    filename = sys.argv[1]
    gitHash, copyDict = readPostYAML(filename)
    
    print("hash: {}, copy_map: {}".format(gitHash, copyDict))
