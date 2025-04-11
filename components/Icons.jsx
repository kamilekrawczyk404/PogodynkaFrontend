import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faArrowDown,
  faArrowUp,
  faExclamationTriangle,
  faEye,
  faHome,
  faInfo,
  faLocationArrow,
  faLocationCrosshairs,
  faMagnifyingGlass,
  faRightFromBracket,
  faSquare,
  faSquareCheck,
  faSquareXmark,
  faStar,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { styles } from "@/styles";

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
  Success: ({ className = "" }) => (
    <FontAwesomeIcon className={`${className}`} icon={faSquareCheck} />
  ),
  Error: ({ className = "" }) => (
    <FontAwesomeIcon className={`${className}`} icon={faSquareXmark} />
  ),
  Info: ({ className = "" }) => (
    <div className={`flex items-center justify-center relative ${className}`}>
      <FontAwesomeIcon className={`${className}`} icon={faSquare} />
      <FontAwesomeIcon
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${styles.textAccent} text-lg`}
        icon={faInfo}
      />
    </div>
  ),
  Warning: ({ className = "" }) => (
    <FontAwesomeIcon className={`${className}`} icon={faExclamationTriangle} />
  ),
};
