
'use client'

import { useEffect, useRef, useState } from "react";

const WINNING_COMBO = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const board = {
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
}

const boardSize = 9;


function TicTacToe() {
    const [xTurn, setXTurn] = useState(true);
    const [win, setWin] = useState(false);
    const [tie, setTie] = useState(false);
    const [winner, setWinner] = useState('');
    const [cells, setCells] = useState(boardSize);

    const [boardData, setBoardData] = useState<Record<number, string>>(board);
    useEffect(() => {
        checkWinner();
    }, [boardData]);

    

    const startGame = () => {
        setWin(false);
        setWinner('');
        setXTurn(true);
        setBoardData(board);
        setCells(boardSize);
        setTie(false);
    }

    const updateBoardData = (idx: number) => {
        if (!boardData[idx]) {
            setCells(cells - 1);
            //will check whether specify idx is empty or not
            let value = xTurn === true ? "X" : "O";
            setBoardData({ ...boardData, [idx]: value });
            setXTurn(!xTurn);
        }

    };

    const checkWinner = () => {
        let winner = '';
        for (const [a, b, c] of WINNING_COMBO) {
            if (boardData[a] &&
                boardData[a] == boardData[b] &&
                boardData[a] == boardData[c]) {
                    winner = boardData[a]
                    break;
            }
        }

        if (winner) {
            setWin(true);
            setWinner(winner);
        } else {
            if (cells === 0) {
                setTie(true)
            }
        }
    };

    return (
        <div className="max-w-screen-sm mx-auto text-center">
            {win && !tie &&
                <div className="flex h-screen">
                    <div className="m-auto">
                        <div className="font-bold text-5xl text-green-600 mb-4">Player {winner} won!</div>
                        <button type="button" className="btn bg-red-500 text-white p-2"
                            onClick={() => {
                                startGame();
                            }}>Play again</button>
                    </div>
                </div>
            }
            {tie && !win &&
                <div className="flex h-screen">
                    <div className="m-auto">
                        <div className="font-bold text-5xl text-green-600 mb-4">It is a tie!</div>
                        <button type="button" className="btn bg-red-500 text-white p-2"
                            onClick={() => {
                                startGame();
                            }}>Play again</button>
                    </div>
                </div>
            }
            {
                <div>
                    <p className="font-bold">{xTurn === true ? "X Turn" : "O Turn"}</p>

                    <div className="grid grid-cols-3 grid-rows-3 gap-4 my-5">
                        {[...Array(9)].map((v, idx) => {
                            return (
                                <div
                                    key={idx}
                                    className="w-full aspect-square flex items-center justify-center shadow-lg rounded-xl bg-white"
                                    onClick={() => {
                                        updateBoardData(idx);
                                    }}>
                                    <span className="text-9xl text-bold">{boardData[idx]}</span>
                                </div>
                            );
                        })}

                    </div>
                </div>
            }
        </div>
    )
}

export default TicTacToe;