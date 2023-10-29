import "./about.scss";
import Collapse from '../../components/collapse/Collapse';
import React, { useState } from 'react';
import Banner from '../../components/banner/Banner'; 
import Img from '../../Assets/ImageSource2.png';


export default function ParentComponent() {
   
	const items = [
		{
			"id": "0",
			"title": "Fiabilité",
			"content": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
		},
		{
			"id": "1",
			"title": "Respect",
			"content": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.."
		},
		{
			"id": "2",
			"title": "Service",
			"content": "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.."
		},
		{
			"id": "3",
			"title": "Sécurité",
			"content": "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
		}
	]

    return (
		<main>
		<Banner bannerImg={Img} text="" alt="Bannière de la page About" />
        <section>
          {items.map((item) => (
            <Collapse
              key={item.id}
              title={item.title}
              content={item.content}
            />
          ))}
        </section>
		</main>
	)
}
