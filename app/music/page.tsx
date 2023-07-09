"use client";
import Link from "next/link";
import Iframe from 'react-iframe';
import { Navigation } from "../components/nav";

export default function Example() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex flex-col items-center justify-center min-h-screen mx-auto">
				<span className="text-lg font-small duration-150 lg:text-s text-zinc-100 group-hover:text-white font-display">
					I've been playing guitar for over 16 years and have picked up other instruments along the way.&nbsp;In high school I was in a Rock 101 class (think School of Rock) and that lead to formation of a pop punk band, Which Way, that I played in throughout my college years.
				</span>
				<br></br>
				<span className="text-lg font-small duration-150 lg:text-s text-zinc-100 group-hover:text-white font-display">
					Since then I've released solo music under my name and worked with other musicians such as Emily Retsas (Phoebe Bridgers, Fiona Apple) for bass and Angelou Wazowski for additional vocals on a few songs.
				</span>
				<br></br>
				<span className="text-lg font-small duration-150 lg:text-s text-zinc-100 group-hover:text-white font-display">
					I am currently working on the in-game music for {" "}							
							<Link
								target="_blank"
								href="https://store.steampowered.com/app/1865260/Petrified/"
								className="underline duration-500 hover:text-zinc-300"
							>
									Petrified,&nbsp;
							</Link>
							a game I am developing with two friends under the indie studio {" "}
							<Link
									target="_blank"
									href="https://blitzkrieg.games"
									className="underline duration-500 hover:text-zinc-300"
								>
									Blitzkrieg Games.
							</Link>
						</span>
						<br></br>
                <Iframe         
                    width="500px"
                    height="500px" 
                    url="https://open.spotify.com/embed/artist/7JrGxAb6xYZ65xcI6b6ECI?utm_source=generator"/>
			</div>
		</div>
	);
}