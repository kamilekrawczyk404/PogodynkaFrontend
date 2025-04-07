import { styles } from "@/styles";
import OuterContainer from "@/components/OuterContainer";
import WeatherForecast from "@/components/WeatherForecast";

export default function ForecastPage() {
  return (
    <OuterContainer className={`h-full ${styles.verticalPadding}`}>
      <WeatherForecast />
    </OuterContainer>
  );
}
