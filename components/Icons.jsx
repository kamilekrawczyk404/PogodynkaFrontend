import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faArrowDown,
  faArrowUp,
  faEye,
  faHome,
  faLocationArrow,
  faLocationCrosshairs,
  faMagnifyingGlass,
  faRightFromBracket,
  faStar,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export const Icons = {
  WindDirection: ({ className = "" }) => (
    <FontAwesomeIcon className={`${className}`} icon={faLocationArrow} />
  ),
  MagnifyingGlass: ({ className = "" }) => (
    <FontAwesomeIcon className={`${className}`} icon={faMagnifyingGlass} />
  ),
  Close: ({ className = "" }) => (
    <FontAwesomeIcon className={`${className}`} icon={faXmark} />
  ),
  Location: ({ className = "" }) => (
    <FontAwesomeIcon className={`${className}`} icon={faLocationCrosshairs} />
  ),
  Eye: ({ className = "" }) => (
    <FontAwesomeIcon className={`${className}`} icon={faEye} />
  ),
  Arrow: ({ className = "" }) => (
    <FontAwesomeIcon className={`${className}`} icon={faArrowUp} />
  ),
  AngleDown: ({ className = "" }) => (
    <FontAwesomeIcon className={`${className}`} icon={faAngleDown} />
  ),
  Home: ({ className = "" }) => (
    <FontAwesomeIcon className={`${className}`} icon={faHome} />
  ),
  Star: ({ className = "" }) => (
    <FontAwesomeIcon className={`${className}`} icon={faStar} />
  ),
  Logout: ({ className = "" }) => (
    <FontAwesomeIcon className={`${className}`} icon={faRightFromBracket} />
  ),
};
