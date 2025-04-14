"use client";
import React from "react";
import Link from "next/link";
import { styles } from "@/styles";
import { usePathname } from "next/navigation";
import OuterContainer from "@/components/OuterContainer";
import LinedButtons from "@/components/LinedButtons";
import ActiveIndicator from "@/components/ActiveIndicator";
import { Icons } from "@/components/Icons";
import { logout } from "@/redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import ActionButton from "@/components/ActionButton";
import { showPopUp } from "@/redux/popUpSlice";
import { fetchWeatherData } from "@/redux/weatherSlice";
import OverlayContainer from "@/components/OverlayContainer";
import BorderContainer from "@/components/BorderContainer";

const Navigation = () => {
  const dispatch = useDispatch();
  const pathname = usePathname();

  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(
      showPopUp({ message: "You have been logged out.", type: "success" }),
    );
  };

  const pathLinks = [
    { pathname: "/", name: "Weather" },
    ...(!isAuthenticated ? [{ pathname: "/auth", name: "Authorization" }] : []),
  ];

  const selectUserHomeLocation = async () => {
    if (user.homeLocation === null) {
      dispatch(
        showPopUp({
          message: "You haven't set your home location yet!",
          type: "info",
        }),
      );
      return;
    }

    console.log(user.homeLocation);
    dispatch(fetchWeatherData(user.homeLocation.coord));
  };

  return (
    <OuterContainer
      className={`flex relative md:flex-row flex-col md:gap-0 gap-3 justify-between items-center py-3`}
    >
      <div className={`md:absolute lg:left-8 left-4`}>
        <Link href={"/"} className={`text-2xl ${styles.textDefault}`}>
          Pogodynka
        </Link>
      </div>
      <LinedButtons
        className={`sm:mx-auto`}
        items={pathLinks}
        render={(link) => (
          <ActiveIndicator
            key={link.name}
            layoutId={"navigationActiveLink"}
            active={pathname === link.pathname}
          >
            <Link className={`${styles.textDefault}`} href={link.pathname}>
              {link.name}
            </Link>
          </ActiveIndicator>
        )}
      />
      <div
        className={
          "md:absolute lg:right-8 right-4 md:flex hidden items-center gap-4"
        }
      >
        {isAuthenticated && (
          <>
            <BorderContainer
              className={`flex gap-4 items-center rounded-xl px-4 py-2`}
            >
              {/*will be used in the further implementation*/}
              {/*<Selector*/}
              {/*  items={[{ item: "nana" }, { item: "nana" }]}*/}
              {/*  render={(item) => <div key={item.item}>{item.item}</div>}*/}
              {/*>*/}
              {/*  <Icons.Star className={"text-amber-400"} />*/}
              {/*</Selector>*/}
              <ActionButton
                className={"text-lg"}
                onClick={selectUserHomeLocation}
              >
                <Icons.Home />
              </ActionButton>
              <ActionButton className={"text-lg"} onClick={handleLogout}>
                <Icons.Logout />
              </ActionButton>
            </BorderContainer>
            <BorderContainer className={`rounded-full h-[2rem] aspect-square`}>
              <span className={"text-xl text-center inline-block w-full"}>
                {user.name.substring(0, 1).toUpperCase()}
              </span>
            </BorderContainer>
          </>
        )}
      </div>
    </OuterContainer>
  );
};

export default Navigation;
