import Image from 'next/image';
import Link from "next/link";
import Particles from "./components/particles";

const navigation = [
	{ name: "About", href: "/about" },
	{ name: "Music", href: "/music" },
	{ name: "YouTube", href: "/youtube"},
	{ name: "Socials", href: "/socials" },
	{ name: "Contact", href: "/contact" },
];

const imageStyle = {
	borderRadius: '75%',
	border: '3px solid rgb(5, 126, 36)',
	margin: '15px'
}

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			<nav className="my-16 animate-fade-in">
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={1000}
			/>
			<h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
				Devon VanNote
			</h1>				
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />			<Image
			src="/DevonVanNoteSydneyOperaHouse.jpeg"
			width={500}
			height={500}
			style={imageStyle}
			alt="Picture of Devon VanNote in front of the Sydney Opera House"
			/>
			<div className="my-16 text-center animate-fade-in">

				<div className="text-lg text-zinc-500 ">
					<ul>
						<li>Senior Software Engineer at{" "}
							<Link
								target="_blank"
								href="https://adtrav.com"
								className="underline duration-500 hover:text-zinc-300"
							>
								ADTRAV
							</Link>
						</li>
						<li>General Programming / UI / Audio at{" "}
							<Link
								target="_blank"
								href="https://blitzkrieg.games"
								className="underline duration-500 hover:text-zinc-300"
							>
								Blitzkrieg Games
							</Link>
						</li>
						<li>Original music streaming on{" "}
							<Link
								target="_blank"
								href="https://open.spotify.com/artist/7JrGxAb6xYZ65xcI6b6ECI?si=yYZTYmBvT5WWYlvFqwkYpQ"
								className="underline duration-500 hover:text-zinc-300"
							>
								Spotify
							</Link>
							,{" "}
							<Link
								target="_blank"
								href="https://music.apple.com/us/artist/devon-vannote/1328640580"
								className="underline duration-500 hover:text-zinc-300"
							>
								Apple Music
							</Link>
							, {" "}
							<Link
								target="_blank"
								href="https://music.amazon.com/artists/B08WG1ZB2T/devon-vannote?refMarker=null"
								className="underline duration-500 hover:text-zinc-300"
							>
								Amazon Music, 
							</Link>
							&nbsp;and everywhere else.
						</li>
						<li>Guitar covers on{" "}
							<Link
								target="_blank"
								href="https://www.youtube.com/channel/UCsNs3P85ix_Z4c4hjXTfjvA"
								className="underline duration-500 hover:text-zinc-300"
							>
								YouTube
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
