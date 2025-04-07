// import { useForm } from 'react-hook-form';
// import './Participate.css';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// import { useState } from 'react';

// function Participateform() {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const userRegisterNumber = location.state?.user;
//   console.log(userRegisterNumber);
//   const [error1, setError1] = useState("");

//   const onSubmit = async (data) => {
//     try {
//       console.log("j", data.REGNO);
//       console.log(userRegisterNumber);

//       if (data.REGNO === userRegisterNumber) {
//         const response = await axios.post('http://localhost:520/submit-form', data);
//         console.log("k");
//         navigate('/thank');
//       } else {
//         setError1("Invalid Registration");
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     }
//   };

//   return (
//     <div className="Participate-form-container">
//       <h2>Participation Form for Nominees [Position: CR] </h2>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="Form-group">
//           <label>Name:</label>
//           <input type="text" {...register("NAME", { required: "Name is required" })} />
//           {errors.NAME && <span className="Error-message">{errors.NAME.message}</span>}
//         </div>
//         <div className="Form-group">
//           <label>Register Number:</label>
//           <input type="text" {...register("REGNO", { required: "Register number is required" })} />
//           {errors.REGNO && <span className="Error-message">{errors.REGNO.message}</span>}
//         </div>
//         <div className="Form-group">
//           <label>Skills:</label>
//           <input type="text" {...register("SKILLS", { required: "Skills are required" })} />
//           {errors.SKILLS && <span className="Error-message">{errors.SKILLS.message}</span>}
//         </div>
//         <div className="Form-group">
//           <label>Highlights:</label>
//           <textarea {...register("HIGHLIGHTS", { required: "Highlights are required" })} />
//           {errors.HIGHLIGHTS && <span className="Error-message">{errors.HIGHLIGHTS.message}</span>}
//         </div>
//         <div className="Form-group">
//           <label>Image URL:</label>
//           <input type="text" {...register("PHOTO", { required: "Image URL is required" })} />
//           {errors.PHOTO && <span className="Error-message">{errors.PHOTO.message}</span>}
//         </div>
//         <div className="Form-group">
//           <button className="p" type="submit">Submit</button>
//         </div>
//       </form>
//       {error1 && <div className="error-message">{error1}</div>}
//     </div>
//   );
// }

// export default Participateform;

import { useForm } from 'react-hook-form';
import './Participate.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Participateform() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:520/submit-form', data);
      console.log(response.data.message);
    
        navigate('/thank');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  return (
    <div className="Participate-form-container">
      <h2>Participation Form for Nominees  [Position: CR]</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="Form-group">
          <label>Name:</label>
          <input type="text" {...register("NAME", { required: "Name is required" })} />
          {errors.NAME && <span className="Error-message">{errors.NAME.message}</span>}
        </div>
        <div className="Form-group">
          <label>Register Number:</label>
          <input type="text" {...register("REGNO", { required: "Register number is required" })} />
          {errors.REGNO && <span className="Error-message">{errors.REGNO.message}</span>}
        </div>
        <div className="Form-group">
          <label>Skills:</label>
          <input type="text" {...register("SKILLS", { required: "Skills are required" })} />
          {errors.SKILLS && <span className="Error-message">{errors.SKILLS.message}</span>}
        </div>
        <div className="Form-group">
          <label>Highlights:</label>
          <textarea {...register("HIGHLIGHTS", { required: "Abilities and qualities are required" })} />
          {errors.ABILITIES && <span className="Error-message">{errors.ABILITIES.message}</span>}
        </div>
        <div className="Form-group">
         <label>Vote Symbol or Your Image URL:</label>
           <input type="text" {...register("PHOTO", { required: "Image URL is required" })} />
           {errors.PHOTO && <span className="Error-message">{errors.PHOTO.message}</span>}
        </div>
        <div className="Form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
      
    </div>
  );
}

export default Participateform;
