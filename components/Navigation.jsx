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

const Navigation = () => {
  const dispatch = useDispatch();
  const pathname = usePathname();

  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  const pathLinks = [
    { pathname: "/", name: "Weather" },
    ...(!isAuthenticated ? [{ pathname: "/auth", name: "Authorization" }] : []),
  ];

  const selectUserHomeLocation = async () => {
    const response = await fetch("/api/user/home", {
      method: "POST",
      body: JSON.stringify({ user }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <OuterContainer
      className={`flex md:flex-row flex-col md:gap-0 gap-3 justify-between items-center py-3`}
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
            <div
              className={`flex gap-4 items-center ${styles.borderColor} border-[1px] rounded-xl px-3 py-2`}
            >
              {/*will be used in the further implementation*/}
              {/*<Selector*/}
              {/*  items={[{ item: "nana" }, { item: "nana" }]}*/}
              {/*  render={(item) => <div key={item.item}>{item.item}</div>}*/}
              {/*>*/}
              {/*  <Icons.Star className={"text-amber-400"} />*/}
              {/*</Selector>*/}
              <ActionButton
                className={"text-xl"}
                onClick={selectUserHomeLocation}
              >
                <Icons.Home />
              </ActionButton>
              <ActionButton className={"text-xl"} onClick={handleLogout}>
                <Icons.Logout />
              </ActionButton>
            </div>
            <div
              className={"rounded-full bg-neutral-100 w-10 aspect-square"}
            ></div>
          </>
        )}
      </div>
    </OuterContainer>
  );
};

export default Navigation;
