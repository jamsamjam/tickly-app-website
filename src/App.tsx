// App.tsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

// -----------------------
// Tickly Landing Page
// -----------------------
function TicklyLandingPage() {
  return (
    <div className="bg-white text-gray-800 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-gray-50">
        <h1 className="text-5xl font-bold mb-4">Tickly</h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          A smart habit that helps you spend your time right.
        </p>
        <div className="mt-8 space-x-4">
          <a
            href="#"
            className="bg-[#6495ed] hover:bg-[#4169e1] text-white font-semibold py-2 px-6 rounded-xl shadow-md"
          >
            Download for iOS
          </a>
          {/* <a
            href="#"
            className="border border-[#6495ed] text-[#6495ed] hover:bg-[#6495ed] hover:text-white font-semibold py-2 px-6 rounded-xl"
          >
            Download for Android
          </a> */}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">What Tickly Does</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-left">
            <div>
              <h3 className="text-xl font-semibold text-[#4169e1] mb-2">Track & Reflect</h3>
              <p>Log your time by category and compare it to your daily goals.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#4169e1] mb-2">Smart Suggestions</h3>
              <p>Get personalized timing recommendations based on your productivity patterns.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#4169e1] mb-2">Energy-Based Planning</h3>
              <p>Align your tasks with your natural focus zones — morning, afternoon, or evening.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#4169e1] mb-2">Goal Alignment</h3>
              <p>Compare how you want to spend your time vs. how you actually do.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshot Section */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">See Tickly in Action</h2>
          <div className="flex justify-center">
          <video
            src="/preview.mp4"
            controls
            autoPlay
            loop
            muted
            playsInline
            className="rounded-xl shadow-xl max-w-lg"
          />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-10 bg-white">
        <p>© 2025 Sam Lee. All rights reserved.</p>
        <p className="mt-2">
          Music: &quot;Carefree&quot; Kevin MacLeod (incompetech.com)
          <br />
          Licensed under Creative Commons: By Attribution 4.0 License
        </p>
        <div className="mt-4">
          <Link to="/privacy" className="text-blue-500 hover:underline mr-4">Privacy Policy</Link>
          <Link to="/terms" className="text-blue-500 hover:underline">Terms & Conditions</Link>
        </div>
      </footer>
    </div>
  )
}

// ---------------------------
// Privacy Policy
// ---------------------------
function PrivacyPolicy() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-2">Effective Date: April 2, 2025</p>
      <p className="mb-4">
        Tickly ("we", "our", or "us") respects your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our app.
      </p>
      <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><strong>Time Logs:</strong> Activity data you log in the app (task name, duration, category).</li>
        <li><strong>Usage Data:</strong> Basic anonymized analytics to understand app performance.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Data</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>To provide time-based suggestions and improve your productivity experience.</li>
        <li>To help you compare your actual time usage with your goals.</li>
        <li>To improve and personalize the app's features.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Storage</h2>
      <p className="mb-4">Your time logs are stored locally on your device. We do not share or sell your data to third parties.</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">4. Your Rights</h2>
      <p className="mb-4">You may delete your data at any time from within the app. You may contact us to request removal or export of your records.</p>
      <h2 className="text-xl font-semibold mt-6 mb-2">5. Contact</h2>
      <p>If you have any questions, contact us at: hello@tickly.app</p>
    </div>
  )
}

// ---------------------------
// Terms & Conditions (Updated)
// ---------------------------
function TermsAndConditions() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
      <p className="mb-2">Effective Date: April 2, 2025</p>
      <p className="mb-4">
        By using Tickly, you agree to the following terms and conditions. If you do not agree, please do not use the app.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Use of Service</h2>
      <p className="mb-4">Tickly is a productivity tool for personal time tracking and suggestion-based planning. You are responsible for your use of the app and the data you enter.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Intellectual Property</h2>
      <p className="mb-4">All content and features in the app are owned by Tickly and may not be copied or redistributed without permission.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Limitations</h2>
      <p className="mb-4">Tickly provides suggestions based on data, but results are not guaranteed. We are not liable for any losses or decisions made based on the app’s suggestions.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Changes</h2>
      <p className="mb-4">We may update these Terms from time to time. Continued use of the app means you accept any changes.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Paid & Premium Features</h2>
      <p className="mb-4">We may introduce or remove paid features (e.g., premium themes, advanced analytics) at any time. If you choose to purchase any premium feature or subscription, you agree to the applicable pricing, payment terms, and renewal policies, which we will make available before you complete a purchase.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Contact</h2>
      <p>For any questions, reach us at: typing-wariest.4b@icloud.com</p>
    </div>
  )
}

// ---------------------------
// App - Main Export
// ---------------------------
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TicklyLandingPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
      </Routes>
    </Router>
  )
}
