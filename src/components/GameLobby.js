import React from 'react'
import { usePlayers } from '../contexts/PlayersProvider'
import { Card, Container } from 'react-bootstrap'

export default function GameLobby({ gamecode }) {
    const { players } = usePlayers()
  return (
    <Card>
        <Container>
            <h1>Game code {gamecode}</h1>
            {players && players.map(player => (
                <p key={player.id}>{player.name}</p>
            ))}
        </Container>
    </Card>
  )
}
