import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faCloudSunRain,
  faDroplet,
  faLocationCrosshairs,
  faMagnifyingGlass,
  faXmark,
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
  MagnifyingGlass: ({ className = "" }) => (
    <FontAwesomeIcon
      className={`text-neutral-300 ${className}`}
      icon={faMagnifyingGlass}
    />
  ),
  Close: ({ className = "" }) => (
    <FontAwesomeIcon
      className={`text-neutral-300 ${className}`}
      icon={faXmark}
    />
  ),
  Location: ({ className = "" }) => (
    <FontAwesomeIcon
      className={`text-neutral-300 ${className}`}
      icon={faLocationCrosshairs}
    />
  ),
};
