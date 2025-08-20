import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "../components/common/Header";
import FooterWrapper from "../components/wrappers/FooterWrapper";
import { AuthProvider } from '../contexts/AuthContext';
import { LoadingProvider } from '../contexts/LoadingContext';
import SWRProvider from '../contexts/SWRProvider';
import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen min-w-[var(--min-width)] max-w-[var(--max-width)] mx-auto">
        <AuthProvider>
          <LoadingProvider>
            <SWRProvider>
              <Header />
              <main className="py-5 px-[5rem] mt-[7rem] flex-1">{children}</main>
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
              <FooterWrapper />
            </SWRProvider>
          </LoadingProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
