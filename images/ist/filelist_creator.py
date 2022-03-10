# -*- coding: utf-8 -*-
"""
Created on Thu Mar 10 13:54:31 2022

@author: Besteq
"""

import os
dir_list = os.listdir()
f = open("filelist.js", "w")
f.write("{\n")
for x in dir_list:
    if x == "filelist.js" or x == "filelist_creator.py":
        continue
    else:
        f.write('\t"' + x +'"\n') 
f.write("}")
f.close()