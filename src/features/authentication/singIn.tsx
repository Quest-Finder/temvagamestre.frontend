import { SignIn } from "@clerk/nextjs";

export default function SingIn() {
  return  <SignIn 
  appearance={{
   elements: {
     socialButtons: "flex flex-col",
     headerTitle:'flex items-center justify-center ',
     headerSubtitle:{
      display:"none"
     },
     footer:{
      display:'none'
     },
     form:{
      display:'none'
     },
     dividerText:{
      display:'none'
     }
   },
 }}/>
}