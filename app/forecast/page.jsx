import { styles } from "@/styles";
import Input from "@/components/Input";
import { Icons } from "@/components/Icons";
import Image from "next/image";
import OuterContainer from "@/components/OuterContainer";

export default function ForecastPage() {
  return (
    <OuterContainer
      className={`flex lg:h-[calc(100vh-8rem)] ${styles.verticalPadding}`}
    >
      <div className={`flex h-full flex-col basis-1/4 ${styles.gaps}`}>
        <Input />
        <Icons.CloudSunRun className={"w-1/2"} />
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

const CityPreview = ({ cityName }) => (
  <div
    className={
      "relative flex-1 max-h-[12rem] mt-auto text-center rounded-xl overflow-hidden"
    }
  >
    <Image src={"/city.jpg"} alt={"City image"} fill />
    <span className={"z-10"}>{cityName}</span>
  </div>
);
