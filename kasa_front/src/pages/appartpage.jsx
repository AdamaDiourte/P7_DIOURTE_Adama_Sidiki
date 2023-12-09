import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../styles/fichierstyles/appartpage.scss";
import appartData from "../data/data.js";
import Description from "../components/appartement/description.jsx";
import Equipement from "../components/appartement/equipements.jsx";
import TagName from "../components/appartement/tag.jsx";
import Carrousel from "../components/appartement/carrousel.jsx";
import Errorpage from "./errorpage.jsx";


function PageAppart() {
    const [appartement, setAppartement] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const { appartId } = useParams();

    useEffect(() => {
        const foundAppart = appartData.find(appart => appart.id === appartId);
        if (foundAppart) {
            setAppartement(foundAppart);
        }
        setLoading(false);
    }, [appartId]);

    return (
        <>
            {loading && <h1>Chargement...</h1>}
            {!loading && appartement && (
                <div className="pageAppart">
                    {/* Gestion du carrousel */}
                    <Carrousel 
                      pictures={appartement.pictures} 
                      currentIndex={currentIndex}
                      setCurrentIndex={setCurrentIndex}
                    />

                    <div className="appartInfo">
                        <div className="appartText">
                            <h1 className="appartName">{appartement.title}</h1>
                            <p className="locationInfo">{appartement.location}</p>
                             {/* Gestion des tags */}
                            <TagName tags={appartement.tags} />
                        </div>

                        <div className="hostEtNotation">
                            <div className="hostInfo">
                                <p className="hostInfo_Name">{appartement.host.name}</p>
                                <img
                                    className="imgHost"
                                    src={appartement.host.picture}
                                    alt={`Hôte : ${appartement.host.name}`}
                                />
                            </div>

                            <div className="rating">
                                {[...Array(parseInt(appartement.rating))].map(
                                    (_, index) => (
                                        <FontAwesomeIcon
                                            className="ratingStars"
                                            icon={faStar}
                                            key={index}
                                        />
                                    )
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="descriptionAndEquipement">
                         {/* Gestion des collapses description et équipements */}
                        <Description description={appartement.description} />
                        <Equipement equipments={appartement.equipments} />
                    </div>
                </div>
            )}
            {(!appartement && !loading) && <Errorpage />}
        </>
    );
}

export default PageAppart;
