import { Show } from "@clerk/nextjs"
import { auth, getAuth } from "@clerk/nextjs/server"

export default async function UserProjects({
  params,
}: {
  params: Promise<{ userId: string }>
}) {
  const { userId } = await params
  //Protects the clerk route from being accessed by someone not signed in as this user
  await auth.protect()
  return (
    <div>
    
      <p>{userId}</p>
    </div>
  )
}