import { SignIn } from "@clerk/nextjs";

export default function SingIn() {
  return  <SignIn 
  appearance={{
    elements:{
      footer:'hidden',
      socialButtons:'flex flex-col',
      form:'hidden',
      dividerText:'hidden',
      header:'flex items-center',
      headerSubtitle:'hidden'
    }
  }}
 />
}