import React, { useState } from "react";
import "./GameCards.css";
import GameModal from "../GameModal";
import { games } from "../Games";
import { Container, Card } from "react-bootstrap";

function GameCards() {
  const [modalShow, setModalShow] = useState(false);

  const [game, setGame] = useState({
    id: 0,
    title: "",
    description: "",
    thumbnail: "",
  });

  const handleClick = (e) => {
    setModalShow(true);
    const { key, name, alt, src } = e.target;

    setGame({
      id: key,
      title: name,
      description: alt,
      thumbnail: src,
    });
  };

  return (
    <div className="cards">
      <h1>Select Games</h1>

      <Container
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          width: "100%",
          justifyContents: "center",
          alignItems: "center",
        }}
      >
        {games &&
          games.map((game) => (
            <div key={game.id}>
              <Card
                className="m-2 shadow p-3 mb-5 bg-white rounded"
                style={{
                  height: "30rem",
                  width: "20rem",
                  border: "none",
                }}
              >
                <Card.Img
                  key={game.id}
                  className="p-5"
                  variant="top"
                  src={game.img}
                  name={game.title}
                  alt={game.description}
                  onClick={handleClick}
                />
                <Card.Body>
                  <Card.Title>{game.title}</Card.Title>
                  <Card.Text>
                    <b>Age range:</b> {game.ageRange}
                  </Card.Text>

                  <Card.Text>
                    <b>Accquired skills:</b>
                    {game.skills.map((skill) => (
                      <div
                        style={{
                          margin: "3px",
                          width: "auto",
                          display: "inline-flex",
                          flexWrap: "wrap",
                          borderRadius: "20px",
                          backgroundColor: "rgba(192,192,192,0.3)",
                        }}
                      >
                        <span
                          style={{
                            margin: "auto",
                            padding: "12px",
                            width: "auto",
                            fontSize: "12px",
                            lineHeight: "0.1",
                            textAlign: "justify",
                          }}
                        >
                          {skill}
                        </span>
                      </div>
                    ))}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        <GameModal
          key={game.id}
          title={game.title}
          description={game.description}
          thumbnail={game.thumbnail}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Container>
    </div>
  );
}

export default GameCards;
