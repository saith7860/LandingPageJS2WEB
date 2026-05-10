// components/SignupForm.tsx
import { useState } from "react";

interface SignupFormProps {
  slug: string;
}

const SignupForm = ({ slug }: SignupFormProps) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleSubmit = async () => {
    if (!name || !email) {
      setMessage({ type: 'error', text: 'Name and email are required.' });
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, slug }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setMessage({ type: 'success', text: 'Success! Please check your email to verify and get your roadmap.' });
      setName('');
      setEmail('');
    } catch (error: any) {
      setMessage({ type: 'error', text: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#14162b] p-6 rounded-xl w-full max-w-md">
      <h2 className="text-white mb-4">
        Enter your name and email to get your free roadmap
      </h2>

      {message && (
        <div className={`p-3 mb-4 rounded text-sm ${message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {message.text}
        </div>
      )}

      <input
        className="w-full p-2 mb-3 rounded bg-white text-black"
        placeholder="First Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={loading}
      />

      <input
        className="w-full p-2 mb-4 rounded bg-white text-black"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={loading}
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded disabled:opacity-50"
      >
        {loading ? 'Sending...' : 'Get the Resource'}
      </button>

      <p className="text-xs text-gray-400 mt-3">
        No spam. Unsubscribe anytime.
      </p>
    </div>
  );
}
export default SignupForm;