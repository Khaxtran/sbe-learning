import React, { useContext, useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import io from "socket.io-client";

const socket = io("http://localhost:5000");

const PlayersContext = React.createContext()

export function usePlayers() {
    return useContext(PlayersContext)
}

export function PlayersProvider({ children }) {
    const [players, setPlayers] = useLocalStorage('players', [])

    function addPlayer(id, name) {
        socket.emit("send-nickname", {nickName: name})

        setPlayers(prevPlayers => {
            return [...prevPlayers, { id, name }]
        })
    }

    const value = {
        players, 
        addPlayer
    }

    return (
        <PlayersContext.Provider value={value}>
            {children}
        </PlayersContext.Provider>
    )
}
