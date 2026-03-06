
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Hero from './components/Hero';
import DashboardPreview from './components/DashboardPreview';
import Features from './components/Features';
import Stats from './components/Stats';
import About from './components/About';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import Services from './components/Services';
import Products from './components/Products';
import Solutions from './components/Solutions';
import Testimonials from './components/Testimonials';
import ContactCTA from './components/ContactCTA';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import K12 from './pages/services/K12';
import HigherEducation from './pages/services/HigherEducation';
import CorporateLearning from './pages/services/CorporateLearning';
import MathAcademy from './pages/MathAcademy';
import LMS from './pages/products/LMS';
import WhyNobleNexus from './pages/WhyNobleNexus';
import AdaptiveNeuralNetworks from './pages/capabilities/AdaptiveNeuralNetworks';
import IntelligentAdministration from './pages/capabilities/IntelligentAdministration';
import PredictiveAnalytics from './pages/capabilities/PredictiveAnalytics';
import BorderlessEducation from './pages/capabilities/BorderlessEducation';
import MeetingLobby from './pages/meeting/MeetingLobby';
import MeetingRoom from './pages/meeting/MeetingRoom';

import SocialSection from './components/SocialSection';

import WhatsAppChatWidget from './components/WhatsAppChatWidget';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './pages/dashboard/Dashboard';

import { Toaster } from 'react-hot-toast';

// Layout Wrapper
const Layout = ({ children }) => (
  <div className="bg-[#FFFFFF] min-h-screen text-[#111111] font-body selection:bg-[#0F766E] selection:text-white relative overflow-x-hidden">
    {children}
    <WhatsAppChatWidget />
    <Toaster position="top-right" />
  </div>
);

// Home Page Composition
const Home = () => (
  <>
    <Hero />
    <DashboardPreview />
    <Features />
    <Stats />
    <About />
    <Services />
    <SocialSection />
    <Testimonials />
    <ContactCTA />
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/why-noble-nexus" element={<WhyNobleNexus />} />
          <Route path="/math-academy" element={<MathAcademy />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/k12" element={<K12 />} />
          <Route path="/services/higher-education" element={<HigherEducation />} />
          <Route path="/services/corporate-learning" element={<CorporateLearning />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/lms" element={<LMS />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/adaptive-neural-networks" element={<AdaptiveNeuralNetworks />} />
          <Route path="/intelligent-administration" element={<IntelligentAdministration />} />
          <Route path="/predictive-analytics" element={<PredictiveAnalytics />} />
          <Route path="/borderless-education" element={<BorderlessEducation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/meet" element={<MeetingLobby />} />
          <Route path="/meet/:roomName" element={<MeetingRoom />} />

          {/* Protected Routes */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
        </Routes>
        <Feedback />
        <Footer />
      </Layout>
    </Router>
  );
}

export default App;