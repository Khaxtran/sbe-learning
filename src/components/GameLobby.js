import React from 'react'
import { Card, Container } from 'react-bootstrap'

export default function GameLobby({ gamecode }) {
  return (
    <Card>
        <Container>
            <h1>Game code {gamecode}</h1>
        </Container>
    </Card>
  )
}
