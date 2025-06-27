import { SignUpView } from "@/modules/auth/ui/views/sign-up-view"

const page = () => {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <SignUpView />
    </div>
  )
}

export default page