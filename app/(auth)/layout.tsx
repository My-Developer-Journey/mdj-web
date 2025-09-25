import Header from "@/components/common/Header";
import { LoadingProvider } from "@/providers/LoadingContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../globals.css";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen min-w-[var(--min-width)] max-w-[var(--max-width)] mx-auto">
        <LoadingProvider>
          <GoogleOAuthProvider clientId="1234567890-fakeid.apps.googleusercontent.com">
            <Header />
            <main className="p-5 flex-1">{children}</main>
          </GoogleOAuthProvider>
          <ToastContainer
            toastClassName="font-medium min-h-[4rem] rounded-lg shadow-md"
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </LoadingProvider>
      </body>
    </html>
  );
}
