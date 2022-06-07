

const TetrisTurn = () => {
    let state = global.state
    let arrayTable = global.arrayTable
    let noneActiveElement = global.noneActiveElement
    let activeElement = global.activeElement

    state.directionActiveFigure++;
    if(state.directionActiveFigure >= 4){
        state.directionActiveFigure = 0;
    };
    
    if(state.shapeActiveFigure === "snake"){
        if(state.directionActiveFigure === 0){
        state.positionActiveElement.forEach((item) => {
            arrayTable[item.top][item.left].innerHTML = noneActiveElement;
        });
    
        state.positionActiveElement[0].top--;
        state.positionActiveElement[0].left--;
        state.positionActiveElement[2].top++;
        state.positionActiveElement[2].left++;
        state.positionActiveElement[3].top += 2;
        state.positionActiveElement[3].left += 2;
    
        state.positionActiveElement.forEach((item) => {
            if(item.top <= 0){
            state.positionActiveElement.forEach((item) => item.top++)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.top >= 15){
            state.positionActiveElement.forEach((item) => item.top--)
            return
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.left <= -1){
            state.positionActiveElement.forEach((item) => item.left++)
            }
        })
        state.positionActiveElement.forEach((item) => {
            if(item.left >= 14){
            state.positionActiveElement.forEach((item) => item.left--)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            state.coordinatesAllFallElements.forEach((i) => {
            if(i.top === item.top && i.left === item.left){
                console.log("greate");
                state.positionActiveElement[0].top++;
                state.positionActiveElement[0].left++;
                state.positionActiveElement[2].top--;
                state.positionActiveElement[2].left--;
                state.positionActiveElement[3].top -= 2;
                state.positionActiveElement[3].left -= 2;
                state.directionActiveFigure--;
            }
            })
        })
    
        state.positionActiveElement.forEach((item) => {
            arrayTable[item.top][item.left].innerHTML = activeElement;
        });
        } else if(state.directionActiveFigure === 1){
        state.positionActiveElement.forEach((item) => {
            arrayTable[item.top][item.left].innerHTML = noneActiveElement;
        });
    
        state.positionActiveElement[0].top--;
        state.positionActiveElement[0].left++;
        state.positionActiveElement[2].top++;
        state.positionActiveElement[2].left--;
        state.positionActiveElement[3].top +=2;
        state.positionActiveElement[3].left -=2;
    
        state.positionActiveElement.forEach((item) => {
            if(item.top >= 14){
            state.positionActiveElement.forEach((item) => item.top-=1)
            return
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.top <= 0){
            state.positionActiveElement.forEach((item) => item.top++)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            state.coordinatesAllFallElements.forEach((i) => {
            if(i.top === item.top && i.left === item.left){
                console.log("greate");
                state.positionActiveElement[0].top++;
                state.positionActiveElement[0].left--;
                state.positionActiveElement[2].top--;
                state.positionActiveElement[2].left++;
                state.positionActiveElement[3].top -= 2;
                state.positionActiveElement[3].left += 2;
                state.directionActiveFigure--;
            }
            })
        })
    
        state.positionActiveElement.forEach((item) => {
            arrayTable[item.top][item.left].innerHTML = activeElement;
        });
        } else if(state.directionActiveFigure === 2){
        state.positionActiveElement.forEach((item) => {
            arrayTable[item.top][item.left].innerHTML = noneActiveElement;
        });
    
        state.positionActiveElement[0].top++;
        state.positionActiveElement[0].left++;
        state.positionActiveElement[2].top--;
        state.positionActiveElement[2].left--;
        state.positionActiveElement[3].top -= 2;
        state.positionActiveElement[3].left -= 2;
    
        state.positionActiveElement.forEach((item) => {
            if(item.top >= 15){
            state.positionActiveElement.forEach((item) => item.top--)
            return
            }
        })
    
    
        state.positionActiveElement.forEach((item) => {
            if(item.top <= 0){
            state.positionActiveElement.forEach((item) => item.top++)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.left <= -1){
            state.positionActiveElement.forEach((item) => item.left++)
            }
        })
        state.positionActiveElement.forEach((item) => {
            if(item.left >= 14){
            state.positionActiveElement.forEach((item) => item.left--)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            state.coordinatesAllFallElements.forEach((i) => {
            if(i.top === item.top && i.left === item.left){
                console.log("greate");
                state.positionActiveElement[0].top--;
                state.positionActiveElement[0].left--;
                state.positionActiveElement[2].top++;
                state.positionActiveElement[2].left++;
                state.positionActiveElement[3].top += 2;
                state.positionActiveElement[3].left += 2;
                state.directionActiveFigure--;
            }
            })
        })
    
        state.positionActiveElement.forEach((item) => {
            arrayTable[item.top][item.left].innerHTML = activeElement;
        });
        } else if(state.directionActiveFigure === 3){
        state.positionActiveElement.forEach((item) => {
            arrayTable[item.top][item.left].innerHTML = noneActiveElement;
        });
    
        state.positionActiveElement[0].top++;
        state.positionActiveElement[0].left--;
        state.positionActiveElement[2].top--;
        state.positionActiveElement[2].left++;
        state.positionActiveElement[3].top -= 2;
        state.positionActiveElement[3].left +=2;
    
        state.positionActiveElement.forEach((item) => {
            if(item.top >= 15){
            state.positionActiveElement.forEach((item) => item.top--)
            return
            }
        })
    
    
        state.positionActiveElement.forEach((item) => {
            if(item.top <= 0){
            state.positionActiveElement.forEach((item) => item.top++)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            state.coordinatesAllFallElements.forEach((i) => {
            if(i.top === item.top && i.left === item.left){
                console.log("greate");
                state.positionActiveElement[0].top--;
                state.positionActiveElement[0].left++;
                state.positionActiveElement[2].top++;
                state.positionActiveElement[2].left--;
                state.positionActiveElement[3].top += 2;
                state.positionActiveElement[3].left -= 2;
                state.directionActiveFigure--;
            }
            })
        })
    
        state.positionActiveElement.forEach((item) => {
            arrayTable[item.top][item.left].innerHTML = activeElement;
        });
        };
    
    
    
    } else if(state.shapeActiveFigure === "pyramid"){
        if(state.directionActiveFigure === 0){
        state.positionActiveElement.forEach((item) => {
            arrayTable[item.top][item.left].innerHTML = noneActiveElement;
        });
    
        state.positionActiveElement[0].top--;
        state.positionActiveElement[0].left--;
        state.positionActiveElement[2].top++;
        state.positionActiveElement[2].left++;
        state.positionActiveElement[3].top++;
        state.positionActiveElement[3].left--;
    
        state.positionActiveElement.forEach((item) => {
            if(item.top >= 15){
            state.positionActiveElement.forEach((item) => item.top--)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.top >= 15){
            state.positionActiveElement.forEach((item) => item.top--)
            return
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            state.coordinatesAllFallElements.forEach((i) => {
            if(i.top === item.top && i.left === item.left){
                console.log("greate");
                state.positionActiveElement[0].top++;
                state.positionActiveElement[0].left++;
                state.positionActiveElement[2].top--;
                state.positionActiveElement[2].left--;
                state.positionActiveElement[3].top--;
                state.positionActiveElement[3].left++;
                state.directionActiveFigure--;
            }
            })
        })
    
    
        state.positionActiveElement.forEach((item) => {
            if(item.top <= 0){
            state.positionActiveElement.forEach((item) => item.top++)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.left <= -1){
            state.positionActiveElement.forEach((item) => item.left++)
            }
        })
        state.positionActiveElement.forEach((item) => {
            if(item.left >= 14){
            state.positionActiveElement.forEach((item) => item.left--)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            arrayTable[item.top][item.left].innerHTML = activeElement;
        });
        } else if(state.directionActiveFigure === 1){
        state.positionActiveElement.forEach((item) => {
            arrayTable[item.top][item.left].innerHTML = noneActiveElement;
        });
    
        state.positionActiveElement[0].top--;
        state.positionActiveElement[0].left++;
        state.positionActiveElement[2].top++;
        state.positionActiveElement[2].left--;
        state.positionActiveElement[3].top--;
        state.positionActiveElement[3].left--;
    
        state.positionActiveElement.forEach((item) => {
            if(item.top >= 15){
            state.positionActiveElement.forEach((item) => item.top--)
            return
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.top >= 15){
            state.positionActiveElement.forEach((item) => item.top--)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            state.coordinatesAllFallElements.forEach((i) => {
            if(i.top === item.top && i.left === item.left){
                console.log("greate");
                state.positionActiveElement[0].top++;
                state.positionActiveElement[0].left--;
                state.positionActiveElement[2].top--;
                state.positionActiveElement[2].left++;
                state.positionActiveElement[3].top++;
                state.positionActiveElement[3].left++;
                state.directionActiveFigure--;
            }
            })
        })
    
    
        state.positionActiveElement.forEach((item) => {
            if(item.top <= 0){
            state.positionActiveElement.forEach((item) => item.top++)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.left <= -1){
            state.positionActiveElement.forEach((item) => item.left++)
            }
        })
        state.positionActiveElement.forEach((item) => {
            if(item.left >= 14){
            state.positionActiveElement.forEach((item) => item.left--)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            arrayTable[item.top][item.left].innerHTML = activeElement;
        });
        } else if(state.directionActiveFigure === 2){
        state.positionActiveElement.forEach((item) => {
            arrayTable[item.top][item.left].innerHTML = noneActiveElement;
        });
    
        state.positionActiveElement[0].top++;
        state.positionActiveElement[0].left++;
        state.positionActiveElement[2].top--;
        state.positionActiveElement[2].left--;
        state.positionActiveElement[3].top--;
        state.positionActiveElement[3].left++;
    
        state.positionActiveElement.forEach((item) => {
            if(item.top >= 15){
            state.positionActiveElement.forEach((item) => item.top--)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.top >= 15){
            state.positionActiveElement.forEach((item) => item.top--)
            return
            }
        })
    
    
        state.positionActiveElement.forEach((item) => {
            state.coordinatesAllFallElements.forEach((i) => {
            if(i.top === item.top && i.left === item.left){
                console.log("greate");
                state.positionActiveElement[0].top--;
                state.positionActiveElement[0].left--;
                state.positionActiveElement[2].top++;
                state.positionActiveElement[2].left++;
                state.positionActiveElement[3].top++;
                state.positionActiveElement[3].left--;
                state.directionActiveFigure--;
            }
            })
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.top <= 0){
            state.positionActiveElement.forEach((item) => item.top++)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.left <= -1){
            state.positionActiveElement.forEach((item) => item.left++)
            }
        })
        state.positionActiveElement.forEach((item) => {
            if(item.left >= 14){
            state.positionActiveElement.forEach((item) => item.left--)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            arrayTable[item.top][item.left].innerHTML = activeElement;
        });
        } else if(state.directionActiveFigure === 3){
        state.positionActiveElement.forEach((item) => {
            arrayTable[item.top][item.left].innerHTML = noneActiveElement;
        });
    
        state.positionActiveElement[0].top++;
        state.positionActiveElement[0].left--;
        state.positionActiveElement[2].top--;
        state.positionActiveElement[2].left++;
        state.positionActiveElement[3].top++;
        state.positionActiveElement[3].left++;
    
        state.positionActiveElement.forEach((item) => {
            if(item.top >= 15){
            state.positionActiveElement.forEach((item) => item.top--)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.top >= 15){
            state.positionActiveElement.forEach((item) => item.top--)
            return
            }
        })
    
    
        state.positionActiveElement.forEach((item) => {
            state.coordinatesAllFallElements.forEach((i) => {
            if(i.top === item.top && i.left === item.left){
                console.log("greate");
                state.positionActiveElement[0].top--;
                state.positionActiveElement[0].left++;
                state.positionActiveElement[2].top++;
                state.positionActiveElement[2].left--;
                state.positionActiveElement[3].top--;
                state.positionActiveElement[3].left--;
                state.directionActiveFigure--;
            }
            })
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.top <= 0){
            state.positionActiveElement.forEach((item) => item.top++)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.left <= -1){
            state.positionActiveElement.forEach((item) => item.left++)
            }
        })
        state.positionActiveElement.forEach((item) => {
            if(item.left >= 14){
            state.positionActiveElement.forEach((item) => item.left--)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            arrayTable[item.top][item.left].innerHTML = activeElement;
        });
        };
    
    
    
    } else if(state.shapeActiveFigure === "lightning"){
        if(state.directionActiveFigure === 0){
        state.positionActiveElement.forEach((item) => {
            arrayTable[item.top][item.left].innerHTML = noneActiveElement;
        });
    
        state.positionActiveElement[0].top--;
        state.positionActiveElement[0].left--;
        state.positionActiveElement[2].top++;
        state.positionActiveElement[2].left--;
        state.positionActiveElement[3].top += 2;
    
        state.positionActiveElement.forEach((item) => {
            if(item.top >= 15){
            state.positionActiveElement.forEach((item) => item.top--)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.top >= 15){
            state.positionActiveElement.forEach((item) => item.top--)
            return
            }
        })
    
    
        state.positionActiveElement.forEach((item) => {
            state.coordinatesAllFallElements.forEach((i) => {
            if(i.top === item.top && i.left === item.left){
                console.log("greate");
                state.positionActiveElement[0].top++;
                state.positionActiveElement[0].left++;
                state.positionActiveElement[2].top--;
                state.positionActiveElement[2].left++;
                state.positionActiveElement[3].top -= 2;
                state.directionActiveFigure--;
            }
            })
        })
    
    
        state.positionActiveElement.forEach((item) => {
            if(item.top <= 0){
            state.positionActiveElement.forEach((item) => item.top++)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.left <= -1){
            state.positionActiveElement.forEach((item) => item.left++)
            }
        })
        state.positionActiveElement.forEach((item) => {
            if(item.left >= 14){
            state.positionActiveElement.forEach((item) => item.left--)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            arrayTable[item.top][item.left].innerHTML = activeElement;
        });
        } else if(state.directionActiveFigure === 1){
        state.positionActiveElement.forEach((item) => {
            arrayTable[item.top][item.left].innerHTML = noneActiveElement;
        });
    
        state.positionActiveElement[0].top--;
        state.positionActiveElement[0].left++;
        state.positionActiveElement[2].top--;
        state.positionActiveElement[2].left--;
        state.positionActiveElement[3].left -= 2;
    
    
        state.positionActiveElement.forEach((item) => {
            if(item.top >= 15){
            state.positionActiveElement.forEach((item) => item.top--)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.top >= 15){
            state.positionActiveElement.forEach((item) => item.top--)
            return
            }
        })
    
    
        state.positionActiveElement.forEach((item) => {
            state.coordinatesAllFallElements.forEach((i) => {
            if(i.top === item.top && i.left === item.left){
                console.log("greate");
                state.positionActiveElement[0].top++;
                state.positionActiveElement[0].left--;
                state.positionActiveElement[2].top++;
                state.positionActiveElement[2].left++;
                state.positionActiveElement[3].left += 2;
                state.directionActiveFigure--;
            }
            })
        })
    
    
        state.positionActiveElement.forEach((item) => {
            if(item.top <= 0){
            state.positionActiveElement.forEach((item) => item.top++)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.left <= -1){
            state.positionActiveElement.forEach((item) => item.left++)
            }
        })
        state.positionActiveElement.forEach((item) => {
            if(item.left >= 14){
            state.positionActiveElement.forEach((item) => item.left--)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            arrayTable[item.top][item.left].innerHTML = activeElement;
        });
        } else if(state.directionActiveFigure === 2){
        state.positionActiveElement.forEach((item) => {
            arrayTable[item.top][item.left].innerHTML = noneActiveElement;
        });
    
        state.positionActiveElement[0].top++;
        state.positionActiveElement[0].left++;
        state.positionActiveElement[2].top--;
        state.positionActiveElement[2].left++;
        state.positionActiveElement[3].top -= 2;
    
        state.positionActiveElement.forEach((item) => {
            if(item.top >= 15){
            state.positionActiveElement.forEach((item) => item.top--)
            return
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.top >= 15){
            state.positionActiveElement.forEach((item) => item.top--)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            state.coordinatesAllFallElements.forEach((i) => {
            if(i.top === item.top && i.left === item.left){
                console.log("greate");
                state.positionActiveElement[0].top--;
                state.positionActiveElement[0].left--;
                state.positionActiveElement[2].top++;
                state.positionActiveElement[2].left--;
                state.positionActiveElement[3].top += 2;
                state.directionActiveFigure--;
            }
            })
        })
    
    
        state.positionActiveElement.forEach((item) => {
            if(item.top <= 0){
            state.positionActiveElement.forEach((item) => item.top++)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.left <= -1){
            state.positionActiveElement.forEach((item) => item.left++)
            }
        })
        state.positionActiveElement.forEach((item) => {
            if(item.left >= 14){
            state.positionActiveElement.forEach((item) => item.left--)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            arrayTable[item.top][item.left].innerHTML = activeElement;
        });
        } else if(state.directionActiveFigure === 3){
        state.positionActiveElement.forEach((item) => {
            arrayTable[item.top][item.left].innerHTML = noneActiveElement;
        });
    
        state.positionActiveElement[0].top++;
        state.positionActiveElement[0].left--;
        state.positionActiveElement[2].top++;
        state.positionActiveElement[2].left++;
        state.positionActiveElement[3].left += 2;
    
        state.positionActiveElement.forEach((item) => {
            if(item.top >= 15){
            state.positionActiveElement.forEach((item) => item.top--)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.top >= 15){
            state.positionActiveElement.forEach((item) => item.top--)
            return
            }
        })
    
    
        state.positionActiveElement.forEach((item) => {
            state.coordinatesAllFallElements.forEach((i) => {
            if(i.top === item.top && i.left === item.left){
                console.log("greate");
                state.positionActiveElement[0].top--;
                state.positionActiveElement[0].left++;
                state.positionActiveElement[2].top--;
                state.positionActiveElement[2].left--;
                state.positionActiveElement[3].left -= 2;
                state.directionActiveFigure--;
            }
            })
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.top <= 0){
            state.positionActiveElement.forEach((item) => item.top++)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.left <= -1){
            state.positionActiveElement.forEach((item) => item.left++)
            }
        })
        state.positionActiveElement.forEach((item) => {
            if(item.left >= 14){
            state.positionActiveElement.forEach((item) => item.left--)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            arrayTable[item.top][item.left].innerHTML = activeElement;
        });
        };
    
    
    
    } else if(state.shapeActiveFigure === "reverseLightning"){
        if(state.directionActiveFigure === 0){
        state.positionActiveElement.forEach((item) => {
            arrayTable[item.top][item.left].innerHTML = noneActiveElement;
        });
    
        state.positionActiveElement[0].top++;
        state.positionActiveElement[0].left++;
        state.positionActiveElement[2].top++;
        state.positionActiveElement[2].left--;
        state.positionActiveElement[3].left -= 2;
    
        state.positionActiveElement.forEach((item) => {
            if(item.top >= 15){
            state.positionActiveElement.forEach((item) => item.top--)
            }
        })
    
    
        state.positionActiveElement.forEach((item) => {
            if(item.top >= 15){
            state.positionActiveElement.forEach((item) => item.top--)
            return
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            state.coordinatesAllFallElements.forEach((i) => {
            if(i.top === item.top && i.left === item.left){
                console.log("greate");
                state.positionActiveElement[0].top--;
                state.positionActiveElement[0].left--;
                state.positionActiveElement[2].top--;
                state.positionActiveElement[2].left++;
                state.positionActiveElement[3].left += 2;
                state.directionActiveFigure--;
            }
            })
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.top <= 0){
            state.positionActiveElement.forEach((item) => item.top++)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.left <= -1){
            state.positionActiveElement.forEach((item) => item.left++)
            }
        })
        state.positionActiveElement.forEach((item) => {
            if(item.left >= 14){
            state.positionActiveElement.forEach((item) => item.left--)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            arrayTable[item.top][item.left].innerHTML = activeElement;
        });
        } else if(state.directionActiveFigure === 1){
        state.positionActiveElement.forEach((item) => {
            arrayTable[item.top][item.left].innerHTML = noneActiveElement;
        });
    
        state.positionActiveElement[0].top++;
        state.positionActiveElement[0].left--;
        state.positionActiveElement[2].top--;
        state.positionActiveElement[2].left--;
        state.positionActiveElement[3].top -= 2;
    
        state.positionActiveElement.forEach((item) => {
            if(item.top >= 15){
            state.positionActiveElement.forEach((item) => item.top--)
            }
        })
    
    
        state.positionActiveElement.forEach((item) => {
            if(item.top >= 15){
            state.positionActiveElement.forEach((item) => item.top--)
            return
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            state.coordinatesAllFallElements.forEach((i) => {
            if(i.top === item.top && i.left === item.left){
                console.log("greate");
                state.positionActiveElement[0].top--;
                state.positionActiveElement[0].left++;
                state.positionActiveElement[2].top++;
                state.positionActiveElement[2].left++;
                state.positionActiveElement[3].top += 2;
                state.directionActiveFigure--;
            }
            })
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.top <= 0){
            state.positionActiveElement.forEach((item) => item.top++)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.left <= -1){
            state.positionActiveElement.forEach((item) => item.left++)
            }
        })
        state.positionActiveElement.forEach((item) => {
            if(item.left >= 14){
            state.positionActiveElement.forEach((item) => item.left--)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            arrayTable[item.top][item.left].innerHTML = activeElement;
        });
        } else if(state.directionActiveFigure === 2){
        state.positionActiveElement.forEach((item) => {
            arrayTable[item.top][item.left].innerHTML = noneActiveElement;
        });
    
        state.positionActiveElement[0].top--;
        state.positionActiveElement[0].left--;
        state.positionActiveElement[2].top--;
        state.positionActiveElement[2].left++;
        state.positionActiveElement[3].left += 2;
    
        state.positionActiveElement.forEach((item) => {
            if(item.top >= 15){
            state.positionActiveElement.forEach((item) => item.top--)
            }
        })
    
    
        state.positionActiveElement.forEach((item) => {
            if(item.top >= 15){
            state.positionActiveElement.forEach((item) => item.top--)
            return
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            state.coordinatesAllFallElements.forEach((i) => {
            if(i.top === item.top && i.left === item.left){
                console.log("greate");
                state.positionActiveElement[0].top++;
                state.positionActiveElement[0].left++;
                state.positionActiveElement[2].top++;
                state.positionActiveElement[2].left--;
                state.positionActiveElement[3].left -= 2;
                state.directionActiveFigure--;
            }
            })
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.top <= 0){
            state.positionActiveElement.forEach((item) => item.top++)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.left <= -1){
            state.positionActiveElement.forEach((item) => item.left++)
            }
        })
        state.positionActiveElement.forEach((item) => {
            if(item.left >= 14){
            state.positionActiveElement.forEach((item) => item.left--)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            arrayTable[item.top][item.left].innerHTML = activeElement;
        });
        } else if(state.directionActiveFigure === 3){
        state.positionActiveElement.forEach((item) => {
            arrayTable[item.top][item.left].innerHTML = noneActiveElement;
        });
    
        state.positionActiveElement[0].top--;
        state.positionActiveElement[0].left++;
        state.positionActiveElement[2].top++;
        state.positionActiveElement[2].left++;
        state.positionActiveElement[3].top += 2;
    
        state.positionActiveElement.forEach((item) => {
            if(item.top >= 15){
            state.positionActiveElement.forEach((item) => item.top--)
            }
        })
    
    
        state.positionActiveElement.forEach((item) => {
            if(item.top >= 15){
            state.positionActiveElement.forEach((item) => item.top--)
            return
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            state.coordinatesAllFallElements.forEach((i) => {
            if(i.top === item.top && i.left === item.left){
                console.log("greate");
                state.positionActiveElement[0].top++;
                state.positionActiveElement[0].left--;
                state.positionActiveElement[2].top--;
                state.positionActiveElement[2].left--;
                state.positionActiveElement[3].top -= 2;
                state.directionActiveFigure--;
            }
            })
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.top <= 0){
            state.positionActiveElement.forEach((item) => item.top++)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.left <= -1){
            state.positionActiveElement.forEach((item) => item.left++)
            }
        })
        state.positionActiveElement.forEach((item) => {
            if(item.left >= 14){
            state.positionActiveElement.forEach((item) => item.left--)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            arrayTable[item.top][item.left].innerHTML = activeElement;
        });
        };
    
    
    } else if(state.shapeActiveFigure === "horse"){
        if(state.directionActiveFigure === 0){
        state.positionActiveElement.forEach((item) => {
            arrayTable[item.top][item.left].innerHTML = noneActiveElement;
        });
    
        state.positionActiveElement[0].top--;
        state.positionActiveElement[0].left--;
        state.positionActiveElement[2].top++;
        state.positionActiveElement[2].left++;
        state.positionActiveElement[3].top += 2;
    
        state.positionActiveElement.forEach((item) => {
            if(item.top >= 15){
            state.positionActiveElement.forEach((item) => item.top--)
            }
        })
    
    
        state.positionActiveElement.forEach((item) => {
            if(item.top >= 15){
            state.positionActiveElement.forEach((item) => item.top--)
            return
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            state.coordinatesAllFallElements.forEach((i) => {
            if(i.top === item.top && i.left === item.left){
                console.log("greate");
                state.positionActiveElement[0].top++;
                state.positionActiveElement[0].left++;
                state.positionActiveElement[2].top--;
                state.positionActiveElement[2].left--;
                state.positionActiveElement[3].top -= 2;
                state.directionActiveFigure--;
            }
            })
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.top <= 0){
            state.positionActiveElement.forEach((item) => item.top++)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.left <= -1){
            state.positionActiveElement.forEach((item) => item.left++)
            }
        })
        state.positionActiveElement.forEach((item) => {
            if(item.left >= 14){
            state.positionActiveElement.forEach((item) => item.left--)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            arrayTable[item.top][item.left].innerHTML = activeElement;
        });
        } else if(state.directionActiveFigure === 1){
        state.positionActiveElement.forEach((item) => {
            arrayTable[item.top][item.left].innerHTML = noneActiveElement;
        });
    
        state.positionActiveElement[0].top--;
        state.positionActiveElement[0].left++;
        state.positionActiveElement[2].top++;
        state.positionActiveElement[2].left--;
        state.positionActiveElement[3].left -= 2;
    
        state.positionActiveElement.forEach((item) => {
            if(item.top >= 15){
            state.positionActiveElement.forEach((item) => item.top--)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.top >= 15){
            state.positionActiveElement.forEach((item) => item.top--)
            return
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            state.coordinatesAllFallElements.forEach((i) => {
            if(i.top === item.top && i.left === item.left){
                console.log("greate");
                state.positionActiveElement[0].top++;
                state.positionActiveElement[0].left--;
                state.positionActiveElement[2].top--;
                state.positionActiveElement[2].left++;
                state.positionActiveElement[3].left += 2;
                state.directionActiveFigure--;
            }
            })
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.top <= 0){
            state.positionActiveElement.forEach((item) => item.top++)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.left <= -1){
            state.positionActiveElement.forEach((item) => item.left++)
            }
        })
        state.positionActiveElement.forEach((item) => {
            if(item.left >= 14){
            state.positionActiveElement.forEach((item) => item.left--)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            arrayTable[item.top][item.left].innerHTML = activeElement;
        });
        } else if(state.directionActiveFigure === 2){
        state.positionActiveElement.forEach((item) => {
            arrayTable[item.top][item.left].innerHTML = noneActiveElement;
        });
    
        state.positionActiveElement[0].top++;
        state.positionActiveElement[0].left++;
        state.positionActiveElement[2].top--;
        state.positionActiveElement[2].left--;
        state.positionActiveElement[3].top -= 2;
    
        state.positionActiveElement.forEach((item) => {
            if(item.top >= 15){
            state.positionActiveElement.forEach((item) => item.top--)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.top >= 15){
            state.positionActiveElement.forEach((item) => item.top--)
            return
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            state.coordinatesAllFallElements.forEach((i) => {
            if(i.top === item.top && i.left === item.left){
                console.log("greate");
                state.positionActiveElement[0].top--;
                state.positionActiveElement[0].left--;
                state.positionActiveElement[2].top++;
                state.positionActiveElement[2].left++;
                state.positionActiveElement[3].top += 2;
                state.directionActiveFigure--;
            }
            })
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.top <= 0){
            state.positionActiveElement.forEach((item) => item.top++)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.left <= -1){
            state.positionActiveElement.forEach((item) => item.left++)
            }
        })
        state.positionActiveElement.forEach((item) => {
            if(item.left >= 14){
            state.positionActiveElement.forEach((item) => item.left--)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            arrayTable[item.top][item.left].innerHTML = activeElement;
        });
        } else if(state.directionActiveFigure === 3){
        state.positionActiveElement.forEach((item) => {
            arrayTable[item.top][item.left].innerHTML = noneActiveElement;
        });
    
        state.positionActiveElement[0].top++;
        state.positionActiveElement[0].left--;
        state.positionActiveElement[2].top--;
        state.positionActiveElement[2].left++;
        state.positionActiveElement[3].left += 2;
    
        state.positionActiveElement.forEach((item) => {
            if(item.top >= 15){
            state.positionActiveElement.forEach((item) => item.top--)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.top >= 15){
            state.positionActiveElement.forEach((item) => item.top--)
            return
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            state.coordinatesAllFallElements.forEach((i) => {
            if(i.top === item.top && i.left === item.left){
                console.log("greate");
                state.positionActiveElement[0].top--;
                state.positionActiveElement[0].left++;
                state.positionActiveElement[2].top++;
                state.positionActiveElement[2].left--;
                state.positionActiveElement[3].left -= 2;
                state.directionActiveFigure--;
            }
            })
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.top <= 0){
            state.positionActiveElement.forEach((item) => item.top++)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.left <= -1){
            state.positionActiveElement.forEach((item) => item.left++)
            }
        })
        state.positionActiveElement.forEach((item) => {
            if(item.left >= 14){
            state.positionActiveElement.forEach((item) => item.left--)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            arrayTable[item.top][item.left].innerHTML = activeElement;
        });
        };
    
    
    } else if(state.shapeActiveFigure === "reverseHorse"){
        if(state.directionActiveFigure === 0){
        state.positionActiveElement.forEach((item) => {
            arrayTable[item.top][item.left].innerHTML = noneActiveElement;
        });
    
        state.positionActiveElement[0].top++;
        state.positionActiveElement[0].left++;
        state.positionActiveElement[2].top--;
        state.positionActiveElement[2].left--;
        state.positionActiveElement[3].left -= 2;
    
        state.positionActiveElement.forEach((item) => {
            if(item.top >= 15){
            state.positionActiveElement.forEach((item) => item.top--)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.top >= 15){
            state.positionActiveElement.forEach((item) => item.top--)
            return
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            state.coordinatesAllFallElements.forEach((i) => {
            if(i.top === item.top && i.left === item.left){
                console.log("greate");
                state.positionActiveElement[0].top--;
                state.positionActiveElement[0].left--;
                state.positionActiveElement[2].top++;
                state.positionActiveElement[2].left++;
                state.positionActiveElement[3].left += 2;
                state.directionActiveFigure--;
            }
            })
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.top <= 0){
            state.positionActiveElement.forEach((item) => item.top++)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.left <= -1){
            state.positionActiveElement.forEach((item) => item.left++)
            }
        })
        state.positionActiveElement.forEach((item) => {
            if(item.left >= 14){
            state.positionActiveElement.forEach((item) => item.left--)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            arrayTable[item.top][item.left].innerHTML = activeElement;
        });
        } else if(state.directionActiveFigure === 1){
        state.positionActiveElement.forEach((item) => {
            arrayTable[item.top][item.left].innerHTML = noneActiveElement;
        });
    
        state.positionActiveElement[0].top++; 
        state.positionActiveElement[0].left--;
        state.positionActiveElement[2].top--;
        state.positionActiveElement[2].left++;
        state.positionActiveElement[3].top -= 2;
    
        state.positionActiveElement.forEach((item) => {
            if(item.top >= 15){
            state.positionActiveElement.forEach((item) => item.top--)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.top >= 15){
            state.positionActiveElement.forEach((item) => item.top--)
            return
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            state.coordinatesAllFallElements.forEach((i) => {
            if(i.top === item.top && i.left === item.left){
                console.log("greate");
                state.positionActiveElement[0].top--;
                state.positionActiveElement[0].left++;
                state.positionActiveElement[2].top++;
                state.positionActiveElement[2].left--;
                state.positionActiveElement[3].top += 2;
                state.directionActiveFigure--;
            }
            })
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.top <= 0){
            state.positionActiveElement.forEach((item) => item.top++)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.left <= -1){
            state.positionActiveElement.forEach((item) => item.left++)
            }
        })
        state.positionActiveElement.forEach((item) => {
            if(item.left >= 14){
            state.positionActiveElement.forEach((item) => item.left--)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            arrayTable[item.top][item.left].innerHTML = activeElement;
        });
        } else if(state.directionActiveFigure === 2){
        state.positionActiveElement.forEach((item) => {
            arrayTable[item.top][item.left].innerHTML = noneActiveElement;
        });
    
        state.positionActiveElement[0].top--;
        state.positionActiveElement[0].left--;
        state.positionActiveElement[2].top++;
        state.positionActiveElement[2].left++;
        state.positionActiveElement[3].left += 2;
    
        state.positionActiveElement.forEach((item) => {
            if(item.top >= 15){
            state.positionActiveElement.forEach((item) => item.top--)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.top >= 15){
            state.positionActiveElement.forEach((item) => item.top--)
            return
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            state.coordinatesAllFallElements.forEach((i) => {
            if(i.top === item.top && i.left === item.left){
                console.log("greate");
                state.positionActiveElement[0].top++;
                state.positionActiveElement[0].left++;
                state.positionActiveElement[2].top--;
                state.positionActiveElement[2].left--;
                state.positionActiveElement[3].left -= 2;
                state.directionActiveFigure--;
            }
            })
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.top <= 0){
            state.positionActiveElement.forEach((item) => item.top++)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.left <= -1){
            state.positionActiveElement.forEach((item) => item.left++)
            }
        })
        state.positionActiveElement.forEach((item) => {
            if(item.left >= 14){
            state.positionActiveElement.forEach((item) => item.left--)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            arrayTable[item.top][item.left].innerHTML = activeElement;
        });
        } else if(state.directionActiveFigure === 3){
        state.positionActiveElement.forEach((item) => {
            arrayTable[item.top][item.left].innerHTML = noneActiveElement;
        });
    
        state.positionActiveElement[0].top--;
        state.positionActiveElement[0].left++;
        state.positionActiveElement[2].top++;
        state.positionActiveElement[2].left--;
        state.positionActiveElement[3].top += 2;
    
        state.positionActiveElement.forEach((item) => {
            if(item.top >= 15){
            state.positionActiveElement.forEach((item) => item.top--)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.top >= 15){
            state.positionActiveElement.forEach((item) => item.top--)
            return
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            state.coordinatesAllFallElements.forEach((i) => {
            if(i.top === item.top && i.left === item.left){
                console.log("greate");
                state.positionActiveElement[0].top++;
                state.positionActiveElement[0].left--;
                state.positionActiveElement[2].top--;
                state.positionActiveElement[2].left++;
                state.positionActiveElement[3].top -= 2;
                state.directionActiveFigure--;
            }
            })
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.top <= 0){
            state.positionActiveElement.forEach((item) => item.top++)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            if(item.left <= -1){
            state.positionActiveElement.forEach((item) => item.left++)
            }
        })
        state.positionActiveElement.forEach((item) => {
            if(item.left >= 14){
            state.positionActiveElement.forEach((item) => item.left--)
            }
        })
    
        state.positionActiveElement.forEach((item) => {
            arrayTable[item.top][item.left].innerHTML = activeElement;
        });
        };
    };
























};

export default TetrisTurn