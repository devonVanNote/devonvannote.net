"use client";
import { Navigation } from "../components/nav";


export default function Example() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 lg:gap-16">
					<span className="text-lg font-medium duration-150 lg:text-xl text-zinc-200 group-hover:text-white font-display">
					Greetings! <br></br><br></br>My Name is Devon VanNote.
					</span>
					<span className="text-lg font-small duration-150 lg:text-s text-zinc-100 group-hover:text-white font-display">
						I currently work as a Senior Software Engineer for ADTRAV by day. &nbsp;Outside of that I love to write / cover music, write screenplays, exercise in the gym, watch film, and help make / play video games.
						<br></br><br></br>
						I grew up in southern Illinois for my most of life until the age of 26 when I moved up to Chicago which is where I currently reside with my girlfriend and our two dogs.
						<br></br><br></br>
						If you'd like to work together on something feel free to hit me up on any of my socials or my email!
						<br></br><br></br>
						In the meantime, stay rad!
					</span>
				</div>
			</div>
		</div>
	);
}
