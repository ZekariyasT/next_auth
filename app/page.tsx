"use server";
import { auth } from "@/auth";
import { SignInButton } from "./components/sign-in-button";
import Image from "next/image";

export default async function Home() {
  const session = await auth();
  if (session?.user) {
    return (
      <div>
        <h1> NextAuth v5 + Next 15</h1>
        <p>User signed in with name:{session.user.name}</p>
        <p>User signed in with email: {session.user.email}</p>
        {session.user.image && (
          <Image
            src={session.user.image}
            width={48}
            height={48}
            alt={session.user.name ?? "Avator"}
            style={{ borderRadius: "50%" }}
          />
        )}
      </div>
    );
  }
  return (
    <div>
      <p>You Are not Signed In</p>
      <SignInButton />
    </div>
  );
}
