const useValidation = () => {
     const validateForm = ({ name, email, password, confirmPassword }) => {
          const error = {};
          if (!name) error.name = 'name is required';
          if (!email) error.email = 'email is required';
          if (!password) error.password = 'password is required';
          if (!confirmPassword) error.confirmPassword = 'password is required';
          if (password && confirmPassword && password !== confirmPassword) {
               error.confirmPassword = 'password do not match'
          }
          return error;
     }
     return { validateForm }

}
export default useValidation