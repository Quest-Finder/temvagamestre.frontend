
import { GoogleOAuthProvider } from '@react-oauth/google';

interface YourComponentProps {
  children: React.ReactNode;
}

export default function GoogleProvider({ children }: YourComponentProps) {
   const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ? process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID:''

  return (
    <GoogleOAuthProvider clientId={clientId} >
      {children}
      {/* <ButtonLoginGoogle/> */}
    </GoogleOAuthProvider>
  );
}

