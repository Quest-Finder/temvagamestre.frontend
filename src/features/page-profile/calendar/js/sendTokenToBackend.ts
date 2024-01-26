export function useSendTokenToBackend() {
   async function sendTokenToBackend(token:string) {
        try {
          const response = await fetch('', {
            method: 'POST',
            headers: {
              'Content-Security-Policy-Report-Only':
                'script-src https://accounts.google.com/gsi/client; frame-src https://accounts.google.com/gsi/; connect-src https://accounts.google.com/gsi/;',
            },
            body: JSON.stringify({ token }),
          });
          const data = await response.json();
        } catch (error) {
        }
      }
    return{sendTokenToBackend}
  }

