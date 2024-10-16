import "./App.css";
import Home from "./Pages/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./Pages/About";
import Rooms from "./Pages/Rooms";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import Login from "./Pages/Login";
import Booking from "./Pages/Booking";
import AdminLogin from "./Pages/admin/AdminLogin";
import AdminDashboard from "./Pages/admin/AdminDashboard";
import Signup from "./Pages/Signup";
import RoomList from "./Pages/RoomList";
import BookingForm from "./Pages/BookingForm";
import { AuthProvider } from "./Pages/utilis/AuthContext";
import ProtectedRoute from "./Pages/ProtectedRoute";

function App() {
  return (
    <div>
      <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" name="Home" element={<Home />} />
        <Route path="*" element={<Navigate to="/home" />} />
        <Route path="/about" element={<About />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/roomlist"
          element={
            <ProtectedRoute>
              {" "}
              <RoomList />{" "}
            </ProtectedRoute>
          }
        />
        <Route path="/bookingform" element={<BookingForm />} />
      </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
