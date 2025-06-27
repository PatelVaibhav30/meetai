import { SignInView } from "@/modules/auth/ui/views/sign-in-view"

const page = () => {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <SignInView />
    </div>
  )
}

export default page