import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import './login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:9000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const result = await response.text(); // car le backend renvoie un simple String

      if (response.ok && result === 'Connection réussie') {
        navigate('/reservation'); // rediriger si tout est ok
      } else {
        setError(result); // afficher le message d'erreur retourné
      }
    } catch (err) {
      console.error(err);
      setError('Erreur lors de la connexion');
    }
  };

  return (
    <>
      <Header />
      <section className="login-section min-h-[90vh] flex items-center pt-20">
        <div className="container flex justify-center mx-auto px-6 w-full">
          <div className="form-container w-[350px] h-[300px] border p-4">
            <form onSubmit={handleSubmit} className="flex flex-col justify-center p-4 gap-3">
              <label htmlFor="username">Username</label>
              <input
                className="border h-10 px-3 rounded-md"
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label htmlFor="password">Password</label>
              <input
                className="border h-10 px-3 rounded-md"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button className="bg-primary text-amber-400 py-2 rounded-md" type="submit">
                Login
              </button>
              {error && <p className="text-red-600">{error}</p>}
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
