import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faCloudSunRain,
  faDroplet,
} from "@fortawesome/free-solid-svg-icons";

export const Icons = {
  Rain: ({ className = "" }) => (
    <FontAwesomeIcon
      className={`text-blue-700 ${className}`}
      icon={faDroplet}
    />
  ),
  Cloud: ({ className = "" }) => (
    <FontAwesomeIcon
      className={`text-neutral-300 ${className}`}
      icon={faCloud}
    />
  ),
  CloudSunRun: ({ className = "" }) => (
    <FontAwesomeIcon
      className={`text-neutral-300 ${className}`}
      icon={faCloudSunRain}
    />
  ),
};
