import * as React from "react";
import Link from "next/link";
import DarkMode from "../DarkMode";

const Header = () => {
	return (
		<div className="dark:bg-gray-900 bg-gray-50">
			<footer className="max-w-screen-xl w-full mx-auto xl:px-0 px-5">
				<div className="space-x-6 py-6 text-xs w-full flex items-center md:justify-end justify-center text-gray-500 dark:text-gray-300">
					<div>
						Made by the{" "}
						<a href="https://twitter.com/ChiaMoonbirds" target="_blank" rel="noreferrer">
							Moonbirds In Chia
						</a>
					</div>
					<div className="flex items-center justify-center space-x-1">
						<DarkMode />
					</div>
				</div>
			</footer>
		</div>
	);
};
export default Header;
