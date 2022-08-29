import * as React from 'react';
import {
  DiscordIcon,
  InstagramIcon,
  TwitterIcon,
  WebsiteLinkIcon
} from '../Icons';

const SocialLinks = () => {
  return (
    <div className="mt-2">
      <ul className="flex space-x-5">
        
          <li>
            <a
              href="https://www.chiafriends.xyz/"
              className="text-gray-500 hover:text-gray-500"
              target="__blank"
            >
              <span className="sr-only">Website</span>
              <WebsiteLinkIcon />
            </a>
          </li>
        
        
          <li>
            <a
              href="javascript:void(0)"
              className="text-gray-500 hover:text-gray-500"
              target="__blank"
            >
              <span className="sr-only">Discord</span>
              <DiscordIcon />
            </a>
          </li>
        
        
          <li>
            <a
              href="https://twitter.com/chia_friends"
              className="text-gray-500 hover:text-gray-500"
              target="__blank"
            >
              <span className="sr-only">Twitter</span>
              <TwitterIcon />
            </a>
          </li>
        
        {/* {process.env.NEXT_PUBLIC_INSTAGRAM && (
          <li>
            <a
              href={process.env.NEXT_PUBLIC_INSTAGRAM}
              className="text-gray-500 hover:text-gray-500"
            >
              <span className="sr-only">Twitter</span>
              <InstagramIcon />
            </a>
          </li>
        )} */}
      </ul>
    </div>
  );
};

export default SocialLinks;
