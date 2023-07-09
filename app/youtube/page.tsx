"use client";
import Iframe from 'react-iframe';
import { Navigation } from "../components/nav";

export default function Example() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen mx-auto">
                <Iframe         
                    width="920px"
                    height="518px" 
                    url="https://www.youtube.com/embed/videoseries?list=PLOplhiRuRE3c3z6RJUr1YpT8mZEmtw4Xo"/>
			</div>
		</div>
	);
}