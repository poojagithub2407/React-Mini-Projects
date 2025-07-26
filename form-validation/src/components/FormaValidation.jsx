import { useState } from "react";
import useValidation from "../hooks/useValidation";

const FormaValidation = () => {
     const initalState = {
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
     };
     const [formData, setFormData] = useState(initalState);
     const [isSubmitting, setIsSubmitting] = useState(false);
     const [error, setError] = useState({});
     const { validateForm } = useValidation();

     const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData({ ...formData, [name]: value });
          setError((prev) => ({ ...prev, [name]: '' }))
     };

     const handleSubmit = (e) => {
          e.preventDefault();
          setIsSubmitting(true);
          const validateErrors = validateForm(formData);
          setError(validateErrors);
          if (Object.keys(validateErrors).length === 0) {
               console.log('form submitted', formData);
               setFormData(initalState)
          }
          setIsSubmitting(false)
     };

     return (
          <div className="max-w-2xl border md:mx-auto mx-4 my-12 ">
               <h1 className="text-center py-4 font-bold">Login Form</h1>
               <form onSubmit={handleSubmit}>
                    <div className="py-2 mx-12">
                         <label htmlFor="name">Enter Name</label>
                         <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="enter name"
                              className="border block outline-none w-full px-2 py-2 rounded"
                         />
                         {error.name && <p className="text-red-500">{error.name}</p>}
                    </div>
                    <div className="py-2 mx-12">
                         <label htmlFor="email">Enter Email Id</label>
                         <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="enter email"
                              className="border block outline-none w-full px-2 py-2 rounded"
                         />
                         {error.email && <p className="text-red-500">{error.email}</p>}

                    </div>
                    <div className="py-2 mx-12">
                         <label htmlFor="password">Enter Password</label>
                         <input
                              type="password"
                              name="password"
                              value={formData.password}
                              onChange={handleChange}
                              placeholder="enter password"
                              className="border block outline-none w-full px-2 py-2 rounded"
                         />
                         {error.password && <p className="text-red-500">{error.password}</p>}

                    </div>
                    <div className="py-2 mx-12">
                         <label htmlFor="confirmPassword">Enter Confirm Password</label>
                         <input
                              type="password"
                              name="confirmPassword"
                              value={formData.confirmPassword}
                              onChange={handleChange}
                              placeholder="enter confirm password"
                              className="border block outline-none w-full px-2 py-2 rounded"
                         />
                         {error.confirmPassword && <p className="text-red-500">{error.confirmPassword}</p>}

                    </div>
                    <div className="py-2 mx-12">
                         <button
                              disabled={isSubmitting}
                              type="submit"
                              className={`text-white px-4 py-2 rounded transition 
    ${isSubmitting
                                        ? "bg-blue-500 opacity-50 cursor-not-allowed"  // fainted appearance
                                        : "bg-blue-500 hover:bg-blue-600 cursor-pointer"
                                   }`}
                         >
                              {isSubmitting ? "Submitting..." : "Create an Account"}
                         </button>

                    </div>
               </form>
          </div>
     );
};

export default FormaValidation;

// className=""
