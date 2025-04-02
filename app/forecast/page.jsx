import { styles } from "@/styles";
import Input from "@/components/Input";
import { Icons } from "@/components/Icons";
import Image from "next/image";
import OuterContainer from "@/components/OuterContainer";
import CityPreview from "@/components/CityPreview";
import SearchInput from "@/components/SearchInput";
import CurrentGeolocation from "@/components/CurrentGeolocation";
import UserLocation from "@/components/UserLocation";

export default function ForecastPage() {
  return (
    <OuterContainer
      className={`flex lg:h-[calc(100vh-8rem)] ${styles.verticalPadding}`}
    >
      <div className={`flex h-full flex-col basis-1/4 ${styles.gaps}`}>
        <UserLocation />
        {/*<Icons.CloudSunRun className={"text-[10rem]"} />*/}
        <Image src={"/weather/01d.svg"} alt={"cos"} height={200} width={200} />
        <div>
          <span className={"text-5xl"}>12°C</span>
          <span>
            Monday, <span className={"text-neutral-400"}>16:00</span>
          </span>
        </div>

        <div className={"flex flex-col gap-4"}>
          <ShortInfo icon={<Icons.Cloud />} content={"Mostly Cloudly"} />
          <ShortInfo icon={<Icons.Rain />} content={"Rain - 30%"} />
        </div>
        <CityPreview cityName={"New york"} />
      </div>
    </OuterContainer>
  );
}

const ShortInfo = ({ icon, content, className = "" }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <span className={"w-5 aspect-square"}>{icon}</span>
    <span className={"text-nowrap"}>{content}</span>
  </div>
);
