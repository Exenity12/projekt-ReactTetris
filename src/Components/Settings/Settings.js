import { React, useCallback, useState } from 'react';
import './Settings.css';
import TetrisTurn from './TetrisTurn.js'
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

const Settings = () => {

    const [counterNumber, setCounterNumber] = useState(0);
    const [fallIsTrue, setfallIsTrue] = useState(false);
    const [coordinatesAllFallElements, setCoordinatesAllFallElements] = useState([{top: 15, left: 15}]);//костыль

    const [tetrisState, setTetrisState] = useState({
        positionActiveElement: [],
        directionActiveFigure: 0,
        shapeActiveFigure: "snake",
    });

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
            // let counter = document.querySelector('.counter');
            // setCounterNumber(prev => prev++)
            // counter.innerHTML = counterNumber;
        }, []
    );


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
            // global.timer = setInterval(moveActiveFigure, 500);
        }, [tetrisState]
    );


    let moveActiveFigure = useCallback(
        () => {
            setfallIsTrue(false)
            setTetrisState(
                (tetrisState) => ({
                    ...tetrisState,
                    positionActiveElement: tetrisState.positionActiveElement.map((item) => {
                        return {top: item.top++, left: item.left};
                    }),
                })
            );
            nextElement();
            checkDropOnAnotherElement();
            fallFigure();
            // global.timer = setTimeout(moveActiveFigure, 500);
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

    let nextElement = useCallback(
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
            setTetrisState(
                (tetrisState) => ({
                    ...tetrisState,
                    positionActiveElement: tetrisState.positionActiveElement.map((item) => {
                        return {top: item.top, left: item.left++};
                    }),
                })
            );
        }, []
    );

    const moveLeft = useCallback(
        () => {
            setTetrisState(
                (tetrisState) => ({
                    ...tetrisState,
                    positionActiveElement: tetrisState.positionActiveElement.map((item) => {
                        return {top: item.top, left: item.left--};
                    }),
                })
            );
        }
    )

    let moveDown = useCallback(
        // () => {
        //     let t = [];
        //     let downIsTrue = false;
        //     tetrisState.positionActiveElement.forEach((u) => t.push(u.top))
        //     t.sort(function (a, b) {
        //         return a - b;
        //     })
        //     moveDownIsTrue = t[3];
        //     setTetrisState(
        //         (tetrisState) => ({
        //             ...tetrisState,
        //             positionActiveElement: tetrisState.positionActiveElement.map((item) => {
        //                 return {top: item.top++, left: item.left};
        //             }),
        //         })
        //     );
        // }
    )




    let fallFigure = useCallback(
        () => {
            let numberString = tableSquareVertSize;
            while(numberString > 0){
                let newArray = coordinatesAllFallElements.filter(item => item.top === numberString);
                console.log(newArray)
                if(newArray.length >= tableSquareHorizonSize){
                    console.log(numberString, " удалить эту строку");
                    let numberElement = 0;
                    while(numberElement < coordinatesAllFallElements.length){
                        if(coordinatesAllFallElements[numberElement].top === numberString){
                            console.log(numberElement, coordinatesAllFallElements.length)
                            setCoordinatesAllFallElements(
                                [
                                    ...coordinatesAllFallElements.slice(0, numberElement),
                                    ...coordinatesAllFallElements.slice(numberElement + 1),
                                ]
                            );
                        };
                        numberElement++;
                    };
                };
                numberString--;
            };
        }
    )




    const keyUpHandler = function(event){
        switch(event.code) {
            case "ArrowLeft":
                moveLeft();
                break;
            case "ArrowUp":
                TetrisTurn();
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
       <div className="counter">0</div>

        <div className="allButtons">
            <button className="button" onClick={startGame}>Старт</button>
            <button className="button-left" onClick={moveLeft}>Лево</button>
            <button className="button-right" onClick={moveRight}>Право</button>
            <button className="button-turn" onClick={TetrisTurn}>Turn</button>
            <button className="button-down" onClick={moveDown}>Вниз</button>
            <button className="button-clear" onClick={moveActiveFigure}>Next move</button>
        </div>

     </div>
    )
};

export default Settings