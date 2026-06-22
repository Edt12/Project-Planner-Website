'use client'
import { Show, useAuth } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {

  //getting userId from clerk
  const { userId } = useAuth();
    const userProjectsLink:string = `/projects/${userId}`
  return (
    <Show
      fallback={
        <div>
          <div className="text-center font-bold text-[60px]">
            Welcome to Project Planner
          </div>
          <div className="text-center">Please Sign in to continue</div>
        </div>
      }
      when={"signed-in"}
    >
      <div className=" grid grid-cols-1  grid-rows-2 justify-items-center">
        <div className="text-center font-bold text-[60px]">
          Welcome to Project Planner
        </div>
        <Link href={userProjectsLink} >
          test
        </Link>
      </div>
    </Show>
  );
}


