# -*- coding: utf-8 -*-
"""
Created on Thu Mar 10 13:54:31 2022

@author: Besteq
"""


import os

dir= input("Working Directory name: ")
projectpath = input("Upper Path: ")
dir_list = os.listdir()
index = 1
f = open("filelist.jsx", "w")

openingText = """
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';\n"""


f.write(openingText)
f.close()
f = open("filelist.jsx", "a")

for fname in dir_list:
    if fname == "filelist.jsx" or fname == "filelist_creator.py":
        continue
    else:
        f.write("import CarouselPic" + str(index) + " from '" + projectpath + "/" + dir + "/" + fname + "';\n")
        index = index + 1

dirC = dir.capitalize()

f.write(""" 
        

export default class """ + dirC + """Carousel extends Component {
    render() {
        return (
            <Carousel autoPlay={true} infiniteLoop={true}>""")
index = 1

for fname in dir_list:
    if fname == "filelist.jsx" or fname == "filelist_creator.py":
        continue
    else:
        f.write("""
                <div>
                    <img src={CarouselPic""" + str(index) + """}/>
                    <p className="legend">Legend</p>
                </div>
 """)
        index = index + 1

f.write("""
            </Carousel>
        );
    }
};""")
f.close()
