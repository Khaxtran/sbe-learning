import React, { useState } from "react";
import "./GameCards.css";
import GameModal from "../GameModal";
import { games } from "../Games/Games";
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

      <Container className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {games &&
              games.map((game) => (
                <li key={game.id} className='cards__item'>
                  <Card className='cards__item__link' style={{border: "none"}}>
                    <Card.Img
                      key={game.id}
                      className='cards__item__img p-5' style={{cursor: "pointer"}}
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
                </li>
              ))}
          </ul>
        </div>

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
