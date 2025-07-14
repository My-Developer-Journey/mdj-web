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
      <body className="flex flex-col min-h-screen">
        <AuthProvider>
          <LoadingProvider>
            <Header/>
            <main className="p-5 flex-1">{children}</main>
            <ToastContainer
              toastClassName="font-medium min-h-[4rem] rounded-lg shadow-md"
              position="top-left"
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
