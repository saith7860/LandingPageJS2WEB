// components/SignupForm.tsx
import { useState } from "react";

const SignupForm=()=> {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = () => {
    alert(`Name: ${name}, Email: ${email}`);
  };

  return (
    <div className="bg-[#14162b] p-6 rounded-xl w-full max-w-md">
      <h2 className="text-white mb-4">
        Enter your name and email to get your free roadmap
      </h2>

      <input
        className="w-full p-2 mb-3 rounded bg-white text-black"
        placeholder="First Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="w-full p-2 mb-4 rounded bg-white text-black"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded"
      >
        Send Me the Roadmap
      </button>

      <p className="text-xs text-gray-400 mt-3">
        No spam. Unsubscribe anytime.
      </p>
    </div>
  );
}
export default SignupForm;