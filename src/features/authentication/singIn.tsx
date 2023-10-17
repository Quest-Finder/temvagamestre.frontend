import { SignIn } from "@clerk/nextjs";

export default function SingIn() {
  return  <SignIn 
  appearance={{
    elements:{
      footer:'hidden',
      socialButtons:'flex flex-col',
      dividerText:'hidden',
      header:'flex items-center',
    }
  }}
  />
}