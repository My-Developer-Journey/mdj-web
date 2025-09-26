import AdminSideBar from "@/components/admin/AdminSideBar";
import AdminTopCrumb from "@/components/admin/AdminTopCrumb";
import { AuthProvider } from "@/providers/AuthContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoadingProvider } from "../../providers/LoadingContext";
import "../globals.css";

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen">
        <AuthProvider>
          <LoadingProvider>
            <GoogleOAuthProvider clientId="1234567890-fakeid.apps.googleusercontent.com">
              <div className="grid grid-cols-[16rem_1fr] w-full">
                {/* Sidebar */}
                <AdminSideBar />

                {/* Main content */}
                <div className="flex flex-col bg-white w-full">
                  <AdminTopCrumb />
                  <main className="flex-1 p-6 bg-white">{children}</main>
                </div>
              </div>
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
        </AuthProvider>
      </body>
    </html>
  );
}
