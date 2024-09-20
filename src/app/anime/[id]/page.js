'use client'


import Pagina from "@/app/components/Pagina";
import apiAnime from "@/services/apiAnime";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button, Card, CardImg, Col, Image, Row } from "react-bootstrap";
import { IoMdArrowBack } from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";



export default function Page({ params }) {

    const [anime, setAnime] = useState({})

    useEffect(() => {
        apiAnime.get(`anime/${params.id}`).then(resultado => {
            setAnime(resultado.data.data)
        })
    }, [])

    return (
        <Pagina titulo={anime.title}>
            {anime.mal_id &&
                <>
                    <Row>
                        <Col md={4}>
                            <Card border="danger">
                                <Card.Header className="bg-danger text-white">Foto</Card.Header>
                                <Card.Body>
                                    <Card.Img src={anime.images.jpg.image_url} />
                                    <a href={anime.images.jpg.image_url} className="mt-3 btn btn-primary" target="blank" ><FaExternalLinkAlt />Ampliar</a>
                                </Card.Body>
                            </Card>
                            <Link className="mt-3 btn btn-success" href={`/anime`}><IoMdArrowBack />
                                Voltar
                                </Link>
                        </Col>
                        <Col md={8}>
                            <Card border="danger">
                                <Card.Header className="bg-danger text-white">{anime.title}</Card.Header>
                                <Card.Body>
                                    <p><b>Episódios: </b>{anime.episodes}</p>
                                    <p><b>Status: </b>{anime.status}</p>
                                    <p><b>Ano: </b>{anime.year}</p>
                                    <p><b>Duração: </b>{anime.duration}</p>
                                    <p><b>Score: </b>{anime.score}</p>
                                    <p>{anime.synopsis}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </>
            }

        </Pagina>
    )

}