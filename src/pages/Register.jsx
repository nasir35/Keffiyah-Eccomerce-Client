import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {

  const [pass, setPass] = useState(null);
  const [flag, setFlag] = useState(false);
  const validatePass = (e) => {    
    if(e.target.value.length >= 6 && e.target.value === pass){      
      document.getElementById("register-btn").removeAttribute("disabled");
      setFlag(false);
    }
    else{
      setFlag(true);
      document.getElementById("register-btn").setAttribute("disabled", "disabled");
    }
  }

  const handleRegister = e => {
    e.preventDefault();
    const data = {
      email : e.target.querySelector('input[type="email"]').value,
      pass
    }
    console.log(data);
  }
  return (
    <div className="hero py-10 bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
            deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
          <form className="card-body space-y-2" onSubmit={handleRegister}>
            <div className="grid grid-cols-12">
              <label className="label col-span-4">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" className="col-span-8 input input-bordered" required />
            </div>
            <div className="grid grid-cols-12">
              <label className="label col-span-4">
                <span className="label-text">New Password</span>
              </label>
              <input type="password" placeholder="password" className="col-span-8 input input-bordered" required onChange={ e => setPass(e.target.value)} />
            </div>
            <div className="grid grid-cols-12">
              <label className="label col-span-4">
                <span className="label-text">Confirm Password</span>
              </label>
              <input type="password" placeholder="password" className="col-span-8 input input-bordered" onChange={validatePass} required />
            </div>
            {
              flag && <p className="text-red-500 text-xs">Error! password didn't match or shorter han 6 character!</p>
            }
            <label className="label">
                <p className="label-text-alt">
                  By registering, you will agree to our <button className="text-blue-600">terms and policy.</button>
                </p>
              </label>
            <div className="form-control">
              <button className="btn btn-primary" id="register-btn" disabled>Register</button>
            </div>
            <div className="form-control">
              <button className="btn bg-orange-600 text-white">Sign Up with Google</button>
            </div>
            <div>
              <p className="text-sm">Already have an account? <Link to={"/login"} className="text-blue-600">Log in here</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
