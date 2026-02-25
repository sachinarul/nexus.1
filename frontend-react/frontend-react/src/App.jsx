
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
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
import LMS from './pages/products/LMS';
import WhyNobleNexus from './pages/WhyNobleNexus';

import SocialSection from './components/SocialSection';

import WhatsAppChatWidget from './components/WhatsAppChatWidget';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './pages/dashboard/Dashboard';

// Layout Wrapper
const Layout = ({ children }) => (
  <div className="bg-navy min-h-screen text-white font-body selection:bg-teal selection:text-navy relative">
    {children}
    <WhatsAppChatWidget />
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
    <Feedback />
  </>
);

function App() {
  return (
    <Router>
      <Layout>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/why-noble-nexus" element={<WhyNobleNexus />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/k12" element={<K12 />} />
          <Route path="/services/higher-education" element={<HigherEducation />} />
          <Route path="/services/corporate-learning" element={<CorporateLearning />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/lms" element={<LMS />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Routes */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
        </Routes>
        <Footer />
      </Layout>
    </Router>
  );
}

export default App;