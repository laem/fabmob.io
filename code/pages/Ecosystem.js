import React, { useState } from 'react'
import { Link } from 'Components/Lang'
import colors from 'Components/colors'
import ecosystème from 'Content/ecosystème.yaml'
import Emoji from 'Components/Emoji'
import Page from 'Components/Page'
import { shuffle } from '../utils'
import Adhérents from 'Pages/Adhérents'
import { ArticleStyle } from '../UI'

export default () => {
	const [filter, setFilter] = useState({})
	return (
		<ArticleStyle
			colors={[colors.bleu, colors.bleuClair]}
			css="max-width: 1000px"
		>
			<h1>L'ecosystème FabMob</h1>
			<Présentation filter={filter} />
		</ArticleStyle>
	)
}

let Présentation = ({ filter }) => (
	<main>
		<section
			css={`
				aside {
					width: 10rem;
					text-align: center;
					padding: 0.4rem;
					display: flex;
					align-items: center;
					justify-content: center;
					overflow: auto;
				}
				@media (max-width: 800px) {
					aside {
						width: 8rem;
						margin: 0.4rem;
					}
				}
				aside h3 {
					margin: 0.3rem;
					text-align: center;
				}
				aside img {
					width: 10rem;
					margin: 0.4rem;
					filter: grayscale(1);
				}
				aside p {
					margin: 0.3rem;
				}
			`}
		>
			<h2>L'équipe</h2>
			<Members data={ecosystème["L'équipe"]} />
			<h2>Le conseil d'administration</h2>

			<Members data={ecosystème["Le conseil d'administration"]} />

			<h2>Nos 10 derniers adhérents</h2>
			<div css="text-align: center"></div>
			<Adhérents />
		</section>
		<AutresFabriques />
	</main>
)

const Members = ({ data }) => (
	<div css="display:flex; justify-content: center;flex-wrap: wrap">
		{shuffle(data).map(({ nom, image, rôle }) => (
			<aside>
				<img src={image} title={nom} />
				<h3>{nom}</h3>
				<p>{rôle}</p>
			</aside>
		))}
	</div>
)

const AutresFabriques = () => (
	<div>
		<h2>Les autres fabriques</h2>
		<p css="text-align: center">
			Le modèle de la fabrique, initié en France sur la mobilité, se réplique
			dans d'autres pays et domaines.
		</p>
		<div
			css={`
				display: flex;
				justify-content: center;
				align-items: center;
				> a {
					width: 16rem;
					padding: 0.6rem;
					margin: 1rem;
					font-weight: bold;
					text-transform: uppercase;
					background: ${colors.bleu};
					border: none;
					border-radius: 0.3rem;
					text-align: center;
				}
				img {
					border-radius: 0.3rem;
					height: 6rem;
					display: block;
				}
			`}
		>
			<a href="https://wiki.lafabriquedesmobilites.fr/wiki/Centre_d’excellence_des_technologiques_ouvertes_pour_la_mobilité">
				<img src="https://images.unsplash.com/photo-1558489580-faa74691fdc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"></img>
				<span>La FabMob Québec</span>
			</a>
			<a href="https://fabsan.mystrikingly.com">
				<img src="https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_100/3323786/137041_142635.png"></img>
				<span>La Fabrique des Santés</span>
			</a>
		</div>
	</div>
)
