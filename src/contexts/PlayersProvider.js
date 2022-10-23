import React, { useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage'

const PlayersContext = React.createContext()

export function usePlayers() {
    return useContext(PlayersContext)
}

export function PlayersProvider({ children }) {
    const [players, setPlayers] = useLocalStorage('players', [])

    function addPlayer(id, name) {
        setPlayers(prevPlayers => {
            return [...prevPlayers, { id, name }]
        })
    }
  return (
    <PlayersContext.Provider value={{ players, addPlayer }}>
        {children}
    </PlayersContext.Provider>
  )
}
