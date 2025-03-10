'use client';

import { motion } from 'framer-motion';

const SignInPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h1 className="text-2xl font-bold text-center mb-4">Sign in</h1>
        <p className="text-gray-400 text-center mb-6">Choose your preferred authentication method</p>
        
        <div className="space-y-4">
          <button className="flex items-center justify-center w-full px-4 py-2 rounded-md bg-white/20 hover:bg-white/30 transition">
            <GoogleIcon />
            <span className="ml-3">Continue with Google</span>
          </button>
          <button className="flex items-center justify-center w-full px-4 py-2 rounded-md bg-white/20 hover:bg-white/30 transition">
            <GitHubIcon />
            <span className="ml-3">Continue with GitHub</span>
          </button>
        </div>
        
        <p className="text-xs text-gray-500 text-center mt-4">
          By continuing, you agree to our <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>
        </p>
      </motion.div>
    </div>
  );
};

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 48 48" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M44.5 20H24V28H36.9C35.3 34.1 29.3 38 23 38C14.8 38 8 31.2 8 23C8 14.8 14.8 8 23 8C27.2 8 31.1 9.6 34.1 12.5L40.6 6C35.6 1.2 29 0 23 0C10.3 0 0 10.3 0 23C0 35.7 10.3 46 23 46C35.7 46 46 35.7 46 23C46 21.3 44.8 20 44.5 20Z" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.5 2 2 6.5 2 12C2 16.5 5 20.3 8.9 21.5C9.4 21.6 9.6 21.3 9.6 21V18.9C6.7 19.5 6.2 17.6 6.2 17.6C5.8 16.5 5.3 16.2 5.3 16.2C4.5 15.7 5.4 15.8 5.4 15.8C6.3 15.9 6.8 16.8 6.8 16.8C7.6 18.1 8.9 17.7 9.5 17.5C9.6 16.9 9.9 16.5 10.2 16.2C7.6 15.9 4.8 15 4.8 10.6C4.8 9.4 5.2 8.4 5.9 7.6C5.8 7.3 5.5 6.2 6 4.8C6 4.8 6.9 4.5 9.6 6.2C10.5 5.9 11.5 5.8 12.4 5.8C13.3 5.8 14.3 5.9 15.2 6.2C17.9 4.5 18.8 4.8 18.8 4.8C19.3 6.2 19 7.3 18.9 7.6C19.6 8.4 20 9.4 20 10.6C20 15 17.2 15.9 14.6 16.2C15 16.6 15.3 17.3 15.3 18.3V21C15.3 21.3 15.5 21.6 16 21.5C19.9 20.3 23 16.5 23 12C23 6.5 18.5 2 12 2Z" />
  </svg>
);


export default SignInPage;