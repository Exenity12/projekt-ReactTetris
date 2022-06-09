import { React, useCallback, useState } from 'react';
import './Settings.css';
import { useEffect } from "react"

const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


const tableSquareHorizonSize = 14;
const tableSquareVertSize = 15;

let timer = "";
let moveDownIsTrue = "";
let ckeckGameOverPass = false;

const Settings = () => {

    const [counterNumber, setCounterNumber] = useState(0);
    const [fallIsTrue, setfallIsTrue] = useState(false);
    const [coordinatesAllFallElements, setCoordinatesAllFallElements] = useState([{top: 15, left: 15}]);//костыль

    const [tetrisState, setTetrisState] = useState({
        positionActiveElement: [],
        directionActiveFigure: 0,
        shapeActiveFigure: "snake",
    });

    let counterScoreTableUp = () => {
        setCounterNumber(prev => prev + 1);
    };

    const renderTable = useCallback(
        () => {
            var variableAlternateString = 0;
            let arr = [];
            while(variableAlternateString < tableSquareVertSize) {
                let variableCreateItemInString = 0;
                let arrString = [];
                while(variableCreateItemInString < tableSquareHorizonSize){
                    const isInFall = coordinatesAllFallElements.find((item) => {
                        return (item.top === variableAlternateString && item.left === variableCreateItemInString);
                    });
                    const isInActive = tetrisState.positionActiveElement.find((item) => {
                        return (item.top === variableAlternateString && item.left === variableCreateItemInString);
                    });
                    const className = (isInFall || isInActive) ? "activeElement" : "noneActiveElement";
                    const element = (
                        <div className={className} id={`id_${variableAlternateString}_${variableCreateItemInString}`}></div>
                    );
                    arrString.push(element);
                    variableCreateItemInString++;
                };
                const stringElement = <div className='string'>{arrString}</div>;
                arr.push(stringElement);
                variableAlternateString++;
            };
            return arr;
        }, [tetrisState]
    )

    const startGame = useCallback(
        () => {
            setInformationOfNewElement();
            console.log("Start!");
        }, [tetrisState]
    );

    const setInformationOfNewElement = useCallback(
        () => {
            let activeFigure = getRandomIntInclusive(0, 6);
            let positionActive, directionActive, shapeActive;
            if(activeFigure === 0){
                positionActive = [{top: 0, left: 7}, {top: 0, left: 8}, {top: 0, left: 9}, {top: 0, left: 10}];
                directionActive = 0;
                shapeActive =  "snake";

            } else if(activeFigure === 1){
                positionActive = [{top: 0, left: 7}, {top: 0, left: 8}, {top: 1, left: 7}, {top: 1, left: 8}];
                directionActive = 0;
                shapeActive =  "square";

            } else if(activeFigure === 2){
                positionActive = [{top: 0, left: 7}, {top: 0, left: 8}, {top: 0, left: 9}, {top: 1, left: 8}];
                directionActive = 0;
                shapeActive =  "pyramid";

            } else if(activeFigure === 3){
                positionActive = [{top: 0, left: 7}, {top: 0, left: 8}, {top: 1, left: 8}, {top: 1, left: 9}];
                directionActive = 0;
                shapeActive =  "lightning";

            } else if(activeFigure === 4){
                positionActive = [{top: 0, left: 8}, {top: 0, left: 7}, {top: 1, left: 7}, {top: 1, left: 6}];
                directionActive = 0;
                shapeActive =  "reverseLightning";

            } else if(activeFigure === 5){
                positionActive = [{top: 0, left: 7}, {top: 0, left: 8}, {top: 0, left: 9}, {top: 1, left: 9}];
                directionActive = 0;
                shapeActive =  "horse";

            } else if(activeFigure === 6){
                positionActive = [{top: 0, left: 9}, {top: 0, left: 8}, {top: 0, left: 7}, {top: 1, left: 7}];
                directionActive = 0;
                shapeActive =  "reverseHorse";
            };
            global.fallIsTrue = true;
            setTetrisState({      
                positionActiveElement: positionActive,
                directionActiveFigure: directionActive,
                shapeActiveFigure: shapeActive,
            });
        }, []
    );


    let turnActiveFigure = useCallback(
        () => {
            let direct = 0
            direct = direct + tetrisState.directionActiveFigure;
            if(direct === 3){
                direct = direct -= 4;
            }
            setTetrisState((prev) => ({
                ...prev,
                directionActiveFigure: direct + 1,
            }))


            let newAarraySnakeBody = tetrisState.positionActiveElement;

            switch(tetrisState.shapeActiveFigure) {
                case "snake":
                    if(tetrisState.directionActiveFigure === 0){

                        newAarraySnakeBody[0].top += -1;
                        newAarraySnakeBody[0].left += 1;
                        newAarraySnakeBody[2].top += 1;
                        newAarraySnakeBody[2].left += -1;
                        newAarraySnakeBody[3].top += 2;
                        newAarraySnakeBody[3].left += -2;
                    }
                    if(tetrisState.directionActiveFigure === 1){
                        newAarraySnakeBody[0].top += 1;
                        newAarraySnakeBody[0].left += -1;
                        newAarraySnakeBody[2].top += -1;
                        newAarraySnakeBody[2].left += 1;
                        newAarraySnakeBody[3].top += -2;
                        newAarraySnakeBody[3].left += 2;
                    }
                    if(tetrisState.directionActiveFigure === 2){
                        newAarraySnakeBody[0].top += -1;
                        newAarraySnakeBody[0].left += 1;
                        newAarraySnakeBody[2].top += 1;
                        newAarraySnakeBody[2].left += -1;
                        newAarraySnakeBody[3].top += 2;
                        newAarraySnakeBody[3].left += -2;
                    }
                    if(tetrisState.directionActiveFigure === 3){
                        newAarraySnakeBody[0].top += 1;
                        newAarraySnakeBody[0].left += -1;
                        newAarraySnakeBody[2].top += -1;
                        newAarraySnakeBody[2].left += 1;
                        newAarraySnakeBody[3].top += -2;
                        newAarraySnakeBody[3].left += 2;
                    }
                    break;
                case "pyramid":
                    if(tetrisState.directionActiveFigure === 0){
                        newAarraySnakeBody[0].top += -1;
                        newAarraySnakeBody[0].left += 1;
                        newAarraySnakeBody[2].top += 1;
                        newAarraySnakeBody[2].left += -1;
                        newAarraySnakeBody[3].top += -1;
                        newAarraySnakeBody[3].left += -1;
                    }
                    if(tetrisState.directionActiveFigure === 1){
                        newAarraySnakeBody[0].top += 1;
                        newAarraySnakeBody[0].left += 1;
                        newAarraySnakeBody[2].top += -1;
                        newAarraySnakeBody[2].left += -1;
                        newAarraySnakeBody[3].top += -1;
                        newAarraySnakeBody[3].left += 1;
                    }
                    if(tetrisState.directionActiveFigure === 2){
                        newAarraySnakeBody[0].top += 1;
                        newAarraySnakeBody[0].left += -1;
                        newAarraySnakeBody[2].top += -1;
                        newAarraySnakeBody[2].left += 1;
                        newAarraySnakeBody[3].top += 1;
                        newAarraySnakeBody[3].left += 1;
                    }
                    if(tetrisState.directionActiveFigure === 3){
                        newAarraySnakeBody[0].top += -1;
                        newAarraySnakeBody[0].left += -1;
                        newAarraySnakeBody[2].top += 1;
                        newAarraySnakeBody[2].left += 1;
                        newAarraySnakeBody[3].top += 1;
                        newAarraySnakeBody[3].left += -1;
                    }
                    break;
                case "lightning":
                    if(tetrisState.directionActiveFigure === 0){
                        newAarraySnakeBody[0].top += -1;
                        newAarraySnakeBody[0].left += 1;
                        newAarraySnakeBody[2].top += -1;
                        newAarraySnakeBody[2].left += -1;
                        newAarraySnakeBody[3].left += -2;
                    }
                    if(tetrisState.directionActiveFigure === 1){
                        newAarraySnakeBody[0].top += 1;
                        newAarraySnakeBody[0].left += -1;
                        newAarraySnakeBody[2].top += 1;
                        newAarraySnakeBody[2].left += 1;
                        newAarraySnakeBody[3].left += 2;
                    }
                    if(tetrisState.directionActiveFigure === 2){
                        newAarraySnakeBody[0].top += -1;
                        newAarraySnakeBody[0].left += 1;
                        newAarraySnakeBody[2].top += -1;
                        newAarraySnakeBody[2].left += -1;
                        newAarraySnakeBody[3].left += -2;
                    }
                    if(tetrisState.directionActiveFigure === 3){
                        newAarraySnakeBody[0].top += 1;
                        newAarraySnakeBody[0].left += -1;
                        newAarraySnakeBody[2].top += 1;
                        newAarraySnakeBody[2].left += 1;
                        newAarraySnakeBody[3].left += 2;
                    }
                    break;
                case "reverseLightning":
                    if(tetrisState.directionActiveFigure === 0){
                        newAarraySnakeBody[0].top += 1;
                        newAarraySnakeBody[1].left += 1;
                        newAarraySnakeBody[2].top += -1;
                        newAarraySnakeBody[3].top += -2;
                        newAarraySnakeBody[3].left += 1;
                    }
                    if(tetrisState.directionActiveFigure === 1){
                        newAarraySnakeBody[0].top += -1;
                        newAarraySnakeBody[1].left += -1;
                        newAarraySnakeBody[2].top += 1;
                        newAarraySnakeBody[3].top += 2;
                        newAarraySnakeBody[3].left += -1;
                    }
                    if(tetrisState.directionActiveFigure === 2){
                        newAarraySnakeBody[0].top += 1;
                        newAarraySnakeBody[1].left += 1;
                        newAarraySnakeBody[2].top += -1;
                        newAarraySnakeBody[3].top += -2;
                        newAarraySnakeBody[3].left += 1;
                    }
                    if(tetrisState.directionActiveFigure === 3){
                        newAarraySnakeBody[0].top += -1;
                        newAarraySnakeBody[1].left += -1;
                        newAarraySnakeBody[2].top += 1;
                        newAarraySnakeBody[3].top += 2;
                        newAarraySnakeBody[3].left += -1;
                    }
                    break;
                case "horse":
                    if(tetrisState.directionActiveFigure === 0){
                        newAarraySnakeBody[0].top += -1;
                        newAarraySnakeBody[0].left += 1;
                        newAarraySnakeBody[2].top += 1;
                        newAarraySnakeBody[2].left += -1;
                        newAarraySnakeBody[3].left += -2;
                    }
                    if(tetrisState.directionActiveFigure === 1){
                        newAarraySnakeBody[0].top += 1;
                        newAarraySnakeBody[0].left += 1;
                        newAarraySnakeBody[2].top += -1;
                        newAarraySnakeBody[2].left += -1;
                        newAarraySnakeBody[3].top += -2;
                    }
                    if(tetrisState.directionActiveFigure === 2){
                        newAarraySnakeBody[0].top += 1;
                        newAarraySnakeBody[0].left += -1;
                        newAarraySnakeBody[2].top += -1;
                        newAarraySnakeBody[2].left += 1;
                        newAarraySnakeBody[3].left += 2;
                    }
                    if(tetrisState.directionActiveFigure === 3){
                        newAarraySnakeBody[0].top += -1;
                        newAarraySnakeBody[0].left += -1;
                        newAarraySnakeBody[2].top += 1;
                        newAarraySnakeBody[2].left += 1;
                        newAarraySnakeBody[3].top += 2;
                    }
                    break;
                case "reverseHorse":
                    if(tetrisState.directionActiveFigure === 0){
                        newAarraySnakeBody[0].top += 1;
                        newAarraySnakeBody[0].left += -1;
                        newAarraySnakeBody[2].top += -1;
                        newAarraySnakeBody[2].left += 1;
                        newAarraySnakeBody[3].top += -2;
                    }
                    if(tetrisState.directionActiveFigure === 1){
                        newAarraySnakeBody[0].top += -1;
                        newAarraySnakeBody[0].left += -1;
                        newAarraySnakeBody[2].top += 1;
                        newAarraySnakeBody[2].left += 1;
                        newAarraySnakeBody[3].left += 2;
                    }
                    if(tetrisState.directionActiveFigure === 2){
                        newAarraySnakeBody[0].top += -1;
                        newAarraySnakeBody[0].left += 1;
                        newAarraySnakeBody[2].top += 1;
                        newAarraySnakeBody[2].left += -1;
                        newAarraySnakeBody[3].top += 2;
                    }
                    if(tetrisState.directionActiveFigure === 3){
                        newAarraySnakeBody[0].top += 1;
                        newAarraySnakeBody[0].left += 1;
                        newAarraySnakeBody[2].top += -1;
                        newAarraySnakeBody[2].left += -1;
                        newAarraySnakeBody[3].left += -2;
                    }
                    break;
                default: return;
            };

        }, [tetrisState]
    )

    let checkGameOver = () => {
        tetrisState.positionActiveElement.forEach((active) => {
            coordinatesAllFallElements.forEach((fall) => {
                if(active.top === fall.top && active.left === fall.left){
                    console.log("game over");
                    ckeckGameOverPass = true;
                };
            });
        });
    }


    let moveActiveFigure = useCallback(
        () => {
            checkGameOver();
            if(ckeckGameOverPass){
                return;
            };
            fallFigure();
            setfallIsTrue(false)
            setTetrisState(
                (tetrisState) => ({
                    ...tetrisState,
                    positionActiveElement: tetrisState.positionActiveElement.map((item) => {
                        return {top: item.top++, left: item.left};
                    }),
                })
            );
            checkDropOnTable();
            checkDropOnAnotherElement();
        }
    )

    let checkDropOnAnotherElement = useCallback(
        () => {
            let isCollision = false;
            coordinatesAllFallElements.forEach((fall) => {
                if(tetrisState.positionActiveElement.find((active) => active.top + 1 === fall.top && active.left === fall.left)){
                    isCollision = true;
                    return;
                };
            })
            if(isCollision){
                setCoordinatesAllFallElements([
                    ...coordinatesAllFallElements,
                    ...tetrisState.positionActiveElement.map((item) => {
                        return {top: item.top, left: item.left}
                    }),
                ]);
                setTetrisState(
                    (tetrisState) => ({
                        ...tetrisState,
                        positionActiveElement: tetrisState.positionActiveElement.map((item) => {
                            let top = item.top - 1;
                            return {top: top, left: item.left};
                        }),
                    })
                );
                setInformationOfNewElement();
            }
        }
    )

    let checkDropOnTable = useCallback(
        () => {
            if(tetrisState.positionActiveElement.find((item) => item.top === tableSquareHorizonSize)){
                setCoordinatesAllFallElements(
                    [...coordinatesAllFallElements,
                    ...tetrisState.positionActiveElement.map((item) => {
                        return {top: item.top, left: item.left};
                    })]
                );
                setInformationOfNewElement();
            };
        }
    );

    const moveRight = useCallback(
        () => {
            let moveRightATable = false;
            console.log(tetrisState.positionActiveElement)
            tetrisState.positionActiveElement.forEach((item) => {
                if(item.left === 13){
                    console.log("true")
                    moveRightATable = true;
                };
            });
            if(moveRightATable){
                return;
            };
            setTetrisState(
                (tetrisState) => ({
                    ...tetrisState,
                    positionActiveElement: tetrisState.positionActiveElement.map((item) => {
                        return {top: item.top, left: item.left++};
                    }),
                })
            );
        }, [tetrisState]
    );

    const moveLeft = useCallback(
        () => {
            let moveLeftATable = false;
            console.log(tetrisState.positionActiveElement)
            tetrisState.positionActiveElement.forEach((item) => {
                if(item.left === 0){
                    console.log("true")
                    moveLeftATable = true;
                };
            });
            if(moveLeftATable){
                return;
            };
            setTetrisState(
                (tetrisState) => ({
                    ...tetrisState,
                    positionActiveElement: tetrisState.positionActiveElement.map((item) => {
                        return {top: item.top, left: item.left--};
                    }),
                })
            );
        }, [tetrisState]
    )

    let moveDown = useCallback(
        () => {
            // let t = [];
            // let downIsTrue = false;
            // tetrisState.positionActiveElement.forEach((u) => t.push(u.top))
            // t.sort(function (a, b) {
            //     return a - b;
            // })
            // moveDownIsTrue = t[3];
            // setTetrisState(
            //     (tetrisState) => ({
            //         ...tetrisState,
            //         positionActiveElement: tetrisState.positionActiveElement.map((item) => {
            //             return {top: item.top++, left: item.left};
            //         }),
            //     })
            // );
        }
    )


    let fallFigure = useCallback(
        () => {
            let numberString = tableSquareVertSize;
            let newArr = [];
            while(numberString > 0){
                let newArray = coordinatesAllFallElements.filter(item => item.top === numberString);
                if(newArray.length >= tableSquareHorizonSize){
                    console.log(numberString, " удалить эту строку");
                    counterScoreTableUp();
                    let numberElement = 0;
                    newArr = coordinatesAllFallElements;
                    while(numberElement < coordinatesAllFallElements.length){
                        if(coordinatesAllFallElements[numberElement].top === numberString){
                            newArr.splice(numberElement, 1)
                            numberElement--;
                        };
                        numberElement++;
                    };
                    setCoordinatesAllFallElements(newArr);
                    helperWhileDeleteString(numberString);
                    numberString++;
                };
                numberString--;
            };
        }
    )

    let helperWhileDeleteString = useCallback(
        (numberString) => {
            let newNuumberString = 0;
            let newArrayDeleteString = coordinatesAllFallElements;
            while(newNuumberString < coordinatesAllFallElements.length){
                if(newArrayDeleteString[newNuumberString].top < numberString){
                    newArrayDeleteString[newNuumberString].top++;
                };
                newNuumberString++;
                setCoordinatesAllFallElements(newArrayDeleteString);
            }
        }
    )

    const keyUpHandler = function(event){
        switch(event.code) {
            case "ArrowLeft":
                moveLeft();
                break;
            case "ArrowUp":
                turnActiveFigure();
                break;
            case "ArrowRight":
                moveRight();
                break;
            case "ArrowDown":
                moveDown();
                break;
            default: return;
        };
    };


    useEffect(() => {
        document.addEventListener('keyup', keyUpHandler);
        return function cleanup() {
            document.removeEventListener('keyup', keyUpHandler);
        };
    }, []);

    return (
     <div>
       <div className="table">{renderTable()}</div>
       <div className="counter">{counterNumber}</div>

        <div className="allButtons">
            <button className="button" onClick={startGame}>Старт</button>
            <button className="button-left" onClick={moveLeft}>Лево</button>
            <button className="button-right" onClick={moveRight}>Право</button>
            <button className="button-turn" onClick={turnActiveFigure}>Turn</button>
            <button className="button-down" onClick={moveDown}>Вниз</button>
            <button className="button-clear" onClick={moveActiveFigure}>Next move</button>
        </div>

     </div>
    )
};

export default Settings