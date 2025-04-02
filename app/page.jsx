import { styles } from "@/styles";
import OuterContainer from "@/components/OuterContainer";
import WeatherForecast from "@/components/WeatherForecast";

export default function ForecastPage() {
  return (
    <OuterContainer
      className={`lg:h-[calc(100vh-8rem)] ${styles.verticalPadding}`}
    >
      <WeatherForecast />
    </OuterContainer>
  );
}
