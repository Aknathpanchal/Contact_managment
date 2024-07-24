'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleSignIn = () => {
    router.push('/dashboard');
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-cover bg-center" style={{ backgroundImage: "url('path-to-your-background-image.jpg')" }}>
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        <div className="flex flex-col justify-center md:p-14">
          <img src="https://astppbilling.org/wp-content/uploads/2023/03/ASTPP-logo-01.png" alt="Company Logo" className="m-auto h-12" />
          <span className="mb-2 m-auto text-2xl font-bold">Welcome back</span>
          <span className="font-light text-gray-400 mb-2">
            Welcome back! Please enter your details
          </span>
          <div className="py-2">
            <span className="mb-2 text-md">Email</span>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="email"
              id="email"
            />
          </div>
          <div className="py-4">
            <span className="mb-2">Password</span>
            <input
              type="password"
              name="pass"
              id="pass"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
            />
          </div>
          <button 
            className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
            onClick={handleSignIn}
          >
            Sign in
          </button>
          <button className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white">
            <img src="google.svg" alt="Google Logo" className="w-6 h-6 inline mr-2" />
            Sign in with Google
          </button>
        </div>
      </div>
    </main>
  );
}
