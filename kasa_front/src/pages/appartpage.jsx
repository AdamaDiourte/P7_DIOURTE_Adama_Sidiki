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
    const [loading, setLoading] = useState(false);
    const { appartId } = useParams();

    useEffect(() => {
        setLoading(true);
        const foundAppart = appartData.find((appart) => appart.id === appartId);
        if (foundAppart) {
            setAppartement(foundAppart);
        }
        setLoading(false);
    }, [appartId]);

    return (
        <>
            {loading && <h1>Chargement...</h1>}
            {appartement && !loading && (
                <div className="pageAppart">
                    <Carrousel pictures={appartement.pictures} />

                    <div className="appartInfo">
                        <div className="appartText">
                            <h1 className="appartName">{appartement.title}</h1>
                            <p className="locationInfo">
                                {appartement.location}
                            </p>
                            <TagName />
                        </div>

                        <div className="hostEtNotation">
                            <div className="hostInfo">
                                <p className="hostInfo_Name">
                                    {appartement.host.name}
                                </p>
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
