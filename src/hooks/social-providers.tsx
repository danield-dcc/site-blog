import { FiLinkedin } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiSlack } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

export interface ShareConfig {
  url: string;
  title?: string;
  text?: string;
}

export type SocialProvider = "linkedin" | "facebook" | "slack" | "twitter";

export const SOCIAL_PROVIDERS = {
  linkedin: {
    name: "LinkedIn",
    icon: <FiLinkedin className="h-4 w-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(config.url)}`,
  },
  facebook: {
    name: "Facebook",
    icon: <FiFacebook className="h-4 w-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://www.facebook.com/sharer/sharer.php?url=${encodeURIComponent(config.url)}`,
  },
  slack: {
    name: "Slack",
    icon: <FiSlack className="h-4 w-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://slack.com/share?url=${encodeURIComponent(config.url)}&text=${encodeURIComponent(config.title || "")}`,
  },
  twitter: {
    name: "Twitter",
    icon: <FaXTwitter className="h-4 w-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://x.com/intent/tweet?url=${encodeURIComponent(config.url)}&text=${encodeURIComponent(config.title || "")}`,
  },
};
