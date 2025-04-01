"use client";
import OuterContainer from "@/components/OuterContainer";
import { styles } from "@/styles";
import Image from "next/image";
import Link from "next/link";
import AuthenticationForms from "@/components/AuthenticationForms";
import PopUpContainer from "@/components/PopUpContainer";

export default function Auth() {
  return (
    <OuterContainer className={"lg:h-[calc(100vh-8rem)] h-fit"}>
      <div
        className={`relative flex lg:flex-row flex-col-reverse justify-center h-full ${styles.gaps} ${styles.verticalPadding} ${styles.bgColor}`}
      >
        <PopUpContainer
          className={`relative overflow-hidden brightness-80 basis-1/2 rounded-2xl min-h-[10rem] h-full ${styles.bodyBgColor}`}
        >
          <div
            className={`absolute w-fit lg:left-8 lg:top-8 md:left-4 md:top-4 top-2 left-2 bg-neutral-700/50 px-3 py-1 rounded-xl z-[10] ${styles.textDefault}`}
          >
            <Link href={"/forecast"}>Back to main page</Link>
          </div>
          <Image
            src={"/authenticationBackground.jpg"}
            alt={"Login form image background"}
            fill
          />
        </PopUpContainer>
        <AuthenticationForms className={"basis-1/2"} />
      </div>
    </OuterContainer>
  );
}
