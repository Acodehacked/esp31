import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-background min-h-screen px-6 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 h-full">

          {/* Left Side - Main Text and Features */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <h1 className="text-foreground md:text-6xl text-4xl font-bold leading-tight">
                Secure Health
                <div className="flex items-center gap-4 mt-2">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <span>Management &</span>
                </div>
                <div className="flex items-center gap-4 mt-2">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                    </svg>
                  </div>
                  <span>Medicine Tracking</span>
                </div>
              </h1>

              <p className="text-muted-foreground text-lg max-w-md">
                Connecting doctors and patients with secure medical record access, real-time verification, and AI-powered adherence tracking
              </p>

              {/* CTA Buttons */}
              <div className="flex gap-4 pt-4">
                <button className="healthcare-button px-6 py-3 rounded-lg font-medium">
                  Get Started
                </button>
                <button className="border border-gray-200 dark:border-gray-800 text-muted-foreground hover:text-foreground hover:border-foreground px-6 py-3 rounded-lg font-medium transition-colors">
                  Learn More
                </button>
              </div>
            </motion.div>

            {/* OTP Verification Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="healthcare-card rounded-2xl p-6 max-w-md"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                  <span className="text-foreground font-medium">Secure Access</span>
                </div>
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              </div>

              <p className="text-muted-foreground text-sm mb-4">Patient verification required</p>

              {/* OTP Input */}
              <div className="flex gap-2 mb-4">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-12 bg-muted rounded-lg flex items-center justify-center text-foreground font-bold border"
                  >
                    {i < 4 ? Math.floor(Math.random() * 10) : ''}
                  </div>
                ))}
              </div>

              <div className="text-sm text-muted-foreground mb-2">
                <span>Generated: 2 min ago</span>
                <span className="float-right text-destructive">Expires in 3:24</span>
              </div>

              <button className="w-full healthcare-button py-2 rounded-lg text-sm font-medium">
                Verify & Grant Access
              </button>
            </motion.div>

            {/* Platform Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-4"
            >
              <div className="flex flex-wrap gap-3">
                <span className="bg-blue-500/20 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-full text-sm border border-blue-500/30">🔒 Secure Records</span>
                <span className="bg-green-500/20 text-green-600 dark:text-green-300 px-4 py-2 rounded-full text-sm border border-green-500/30">💊 Prescription Tracking</span>
                <span className="bg-purple-500/20 text-purple-600 dark:text-purple-300 px-4 py-2 rounded-full text-sm border border-purple-500/30">📅 Appointments</span>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className="bg-orange-500/20 text-orange-600 dark:text-orange-300 px-4 py-2 rounded-full text-sm border border-orange-500/30">📸 Medicine Verification</span>
                <span className="bg-red-500/20 text-red-600 dark:text-red-300 px-4 py-2 rounded-full text-sm border border-red-500/30">🚨 Smart Reminders</span>
                <span className="bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 px-4 py-2 rounded-full text-sm border border-cyan-500/30">🤖 AI Monitoring</span>
              </div>

              <div className="flex items-center gap-2 text-foreground">
                <span>Core platform features</span>
                <button className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors">
                  <svg className="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Healthcare Dashboard */}
          <div className="flex flex-col items-start justify-center  lg:mt-0 space-y-6 lg:space-y-8">

            {/* Top Cards Row - Desktop Only */}
            <div className="hidden lg:flex gap-4 xl:gap-6 w-full justify-center">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="bg-card border rounded-xl p-4 shadow-lg w-48 xl:w-52"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 7V3a1 1 0 012 0v4h4V3a1 1 0 012 0v4h2a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2h2z"/>
                    </svg>
                  </div>
                  <span className="text-card-foreground font-medium text-sm">Next Appointment</span>
                </div>
                <p className="text-muted-foreground text-sm mb-1">Dr. Johnson</p>
                <p className="text-purple-400 dark:text-purple-300 text-sm mb-3">Tomorrow 2:30 PM</p>
                <button className="bg-purple-500/20 text-purple-300 px-3 py-2 rounded-lg text-sm w-full hover:bg-purple-500/30 transition-colors">
                  Join Video Call
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="bg-card border rounded-xl p-4 shadow-lg w-48 xl:w-52"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9.5 2a5.5 5.5 0 00-5.5 5.5V9h7V7.5a5.5 5.5 0 00-5.5-5.5z"/>
                    </svg>
                  </div>
                  <span className="text-card-foreground font-medium text-sm">AI Health Score</span>
                </div>
                <div className="text-center">
                  <p className="text-cyan-400 dark:text-cyan-300 text-2xl font-bold mb-2">92</p>
                  <div className="w-full bg-muted rounded-full h-2 mb-2">
                    <div className="bg-cyan-500 h-2 rounded-full" style={{width: '92%'}}></div>
                  </div>
                  <p className="text-muted-foreground text-sm">Excellent Status</p>
                </div>
              </motion.div>
            </div>

            {/* Central Healthcare Hub
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="w-64 h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-3xl flex items-center justify-center border border-gray-700 shadow-xl"
            >
              <div className="text-center">
                <div className="text-5xl lg:text-6xl xl:text-7xl mb-4">🏥</div>
                <p className="text-white font-medium text-sm lg:text-base xl:text-lg">Healthcare Hub</p>
                <p className="text-gray-400 text-xs lg:text-sm">Doctor-Patient Connection</p>
              </div>
            </motion.div> */}

            {/* Bottom Cards Row - Desktop Only */}
            <div className="hidden lg:flex gap-4 xl:gap-6 w-full justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
                className="bg-card border rounded-xl p-4 shadow-lg w-56 xl:w-60"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                    </svg>
                  </div>
                  <span className="text-card-foreground font-medium text-sm">Active Prescriptions</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">Metformin 500mg</span>
                    <span className="text-green-500 text-sm">✓ Taken</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">Lisinopril 10mg</span>
                    <span className="text-orange-500 text-sm">⏰ Due 2PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">Atorvastatin 20mg</span>
                    <span className="text-red-500 text-sm">⚠ Missed</span>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <span className="text-blue-400 text-sm font-medium">85% Adherence Rate</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="bg-card border rounded-xl p-4 shadow-lg w-48 xl:w-52"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
                    </svg>
                  </div>
                  <span className="text-card-foreground font-medium text-sm">Photo Verification</span>
                </div>
                <div className="text-center">
                  <p className="text-orange-400 dark:text-orange-300 text-lg font-bold mb-3">3 pending</p>
                  <div className="flex gap-2 justify-center mb-3">
                    <div className="w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div className="w-6 h-6 bg-orange-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs">⏰</span>
                    </div>
                    <div className="w-6 h-6 bg-red-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs">⚠</span>
                    </div>
                  </div>
                  <button className="bg-orange-500/20 text-orange-300 px-3 py-2 rounded-lg text-sm w-full hover:bg-orange-500/30 transition-colors">
                    Review Photos
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Mobile Cards Grid - Only visible on mobile */}
            <div className="lg:hidden grid grid-cols-2 gap-4 w-full max-w-lg px-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="bg-card border rounded-xl p-4 shadow-lg"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-green-500 rounded-lg flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                    </svg>
                  </div>
                  <span className="text-card-foreground font-medium text-xs">Prescriptions</span>
                </div>
                <p className="text-blue-500 text-xs">85% Adherence</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="bg-card border rounded-xl p-4 shadow-lg"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-purple-500 rounded-lg flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 7V3a1 1 0 012 0v4h4V3a1 1 0 012 0v4h2a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2h2z"/>
                    </svg>
                  </div>
                  <span className="text-card-foreground font-medium text-xs">Appointment</span>
                </div>
                <p className="text-purple-400 dark:text-purple-300 text-xs">Tomorrow 2:30</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0, duration: 0.6 }}
                className="bg-card border rounded-xl p-4 shadow-lg"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-orange-500 rounded-lg flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
                    </svg>
                  </div>
                  <span className="text-card-foreground font-medium text-xs">Photos</span>
                </div>
                <p className="text-orange-400 dark:text-orange-300 text-xs">3 pending</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="bg-card border rounded-xl p-4 shadow-lg"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 bg-cyan-500 rounded-lg flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9.5 2a5.5 5.5 0 00-5.5 5.5V9h7V7.5a5.5 5.5 0 00-5.5-5.5z"/>
                    </svg>
                  </div>
                  <span className="text-card-foreground font-medium text-xs">AI Score</span>
                </div>
                <p className="text-cyan-400 dark:text-cyan-300 text-xs font-bold">92 - Excellent</p>
              </motion.div>
            </div>

            {/* Medical Records Card - Full Width */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="bg-card border rounded-xl p-4 lg:p-6 shadow-lg w-full max-w-lg lg:max-w-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>
                <div>
                  <span className="text-card-foreground font-medium text-sm lg:text-base">Medical Records Access</span>
                  <p className="text-muted-foreground text-xs lg:text-sm">Last accessed by Dr. Smith - Today, 10:30 AM</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs lg:text-sm">Diabetes</span>
                <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-xs lg:text-sm">Hypertension</span>
                <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-xs lg:text-sm">Allergy: Penicillin</span>
              </div>
              <button className="w-full bg-blue-500/20 border border-blue-500/30 text-blue-300 px-4 py-2 rounded-lg text-sm hover:bg-blue-500/30 transition-colors">
                Request Patient Access via OTP
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
