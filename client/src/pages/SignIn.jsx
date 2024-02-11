import React, { useState } from 'react';
import { cooperation ,logo} from '../assets/index.js';
import { Link, useHistory } from 'react-router-dom';

const SignIn = () => {
  const history = useHistory(); 
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'formateur', 
  });

  const { email, password, role } = formData;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //HNA ON VERIFIE
    const isAuthenticated = true; 

    if (isAuthenticated) {
      console.log('Form Data:', formData);
      history.push('/catalogue'); 
    }
  };

  return (
    <div className="flex h-screen">
   
       <div className="bg-color-blue flex-shrink-0 w-1/2 flex items-center justify-center">
        <img src={cooperation} alt="frame" className="w-[700px] h-[700px] object-cover" />
        </div>

     
      <div className="flex-shrink-0 w-1/2 bg-white p-8 rounded shadow-md flex flex-col gap-8 items-center justify-center " style={{ marginTop: '-70px'}}>
      
      <div className='flex flex-col  items-center justify-center mt-1 '>
          <h2 className='font-semibold text-[22px]'>Bienvennu dans</h2>
          <img src={logo} alt="frame" className="w-[270px] h-[120px] "/>

        </div>
      
        
        <form className="w-full max-w-md" onSubmit={handleSubmit} style={{ marginTop: '20px'}}>
          <div className="mb-8">
            <label htmlFor="email" className="block text-gray-700 text-base font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md text-base focus:outline-none focus:border-blue"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-8">
            <label htmlFor="password" className="block text-gray-700 text-base font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md text-base focus:outline-none focus:border-blue"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-8">
            <label htmlFor="role" className="block text-gray-700 text-base font-medium mb-2">
              Vous êtes un:
            </label>
            <select
              id="role"
              name="role"
              value={role}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md text-base focus:outline-none focus:border-blue"
              required
            >
              <option value="formateur">Formateur</option>
              <option value="partenaire">Partenaire</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-color-blue text-white p-2 rounded-md text-base hover:bg-green-400 transition duration-300"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
