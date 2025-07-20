import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../components/Footer";
import Header from "../components/Header";
import { AuthProvider } from '../contexts/AuthContext';
import { LoadingProvider } from '../contexts/LoadingContext';
import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen min-w-[80rem] max-w-[100rem] mx-auto">
        <AuthProvider>
          <LoadingProvider>
            <Header/>
            <main className="py-5 px-[5rem] mt-[8rem] flex-1">{children}</main>
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
            <Footer/>
          </LoadingProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
