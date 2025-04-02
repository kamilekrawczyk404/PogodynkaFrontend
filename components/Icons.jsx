import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faLocationArrow,
  faLocationCrosshairs,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export const Icons = {
  WindDirection: ({ className = "" }) => (
    <FontAwesomeIcon
      className={`text-neutral-300 ${className}`}
      icon={faLocationArrow}
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
  Eye: ({ className = "" }) => (
    <FontAwesomeIcon className={`text-neutral-300 ${className}`} icon={faEye} />
  ),
};
