import * as React from "react";
import Image from "next/image";
import { OpenSeaIcon } from "../Icons";

const MarketPlaceLinks = ({ id }: { id: string }) => {
	return (
		<div className="flex items-center justify-star space-x-1 mt-3 mb-5">
				<>
					<a
						className="text-gray-600 dark:text-gray-300 flex flex-row items-center rounded-md hover:bg-gray-100  dark:hover:bg-gray-700 border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-600 px-3 py-1.5 border transition-colors text-xs xs:text-base ease-in-out opacity-90 shadow-sm"
						href={`https://www.spacescan.io/xch/nft/collection/col1z0ef7w5n4vq9qkue67y8jnwumd9799sm50t8fyle73c70ly4z0ws0p2rhl`}
						target="_blank"
						rel="noopener noreferrer nofollow"
					>
						<div className="flex items-center">
							<span className="mr-2">
							<Image src="/spacescan.png" width="20px" height="20px" />
							</span>
							Spacescan
						</div>
					</a>
					<a
						className="text-gray-600 dark:text-gray-300 flex flex-row items-center rounded-md hover:bg-gray-100  dark:hover:bg-gray-700 border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-600 px-3 py-1.5 border transition-colors text-xs xs:text-base ease-in-out opacity-90 shadow-sm"
						href={`https://dexie.space/offers/col1z0ef7w5n4vq9qkue67y8jnwumd9799sm50t8fyle73c70ly4z0ws0p2rhl/xch`}
						target="_blank"
						rel="noopener noreferrer nofollow"
					>
						<div className="flex items-center">
							<span className="mr-2">
								<Image src="/dexie.png" width="20px" height="20px" />
							</span>
							Dexie Space
						</div>
					</a>
					{/* <a
						className="text-gray-600 dark:text-gray-300 flex flex-row items-center rounded-md hover:bg-gray-100  dark:hover:bg-gray-700 border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-600 px-3 py-1.5 border transition-colors text-xs xs:text-base ease-in-out opacity-90 shadow-sm"
						href={`https://etherscan.io/token/${process.env.NEXT_PUBLIC_COLLECTION_TOKEN}?a=${id}`}
						target="_blank"
						rel="noopener noreferrer nofollow"
					>
						<div className="flex items-center">
							<span className="mr-2">
								<Image
									src="/etherscan-logo-circle.png"
									width="20px"
									height="20px"
								/>
							</span>
							Etherscan
						</div>
					</a> */}
				</>
		</div>
	);
};

export default MarketPlaceLinks;
