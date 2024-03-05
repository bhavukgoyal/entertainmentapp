import axios from 'axios';
import './SignupForm.css'; // Import your CSS file here


const SignupForm = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {
            username: formData.get('username'),
            email: formData.get('email'),
            password: formData.get('password')
        };
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValidEmail = emailPattern.test(data.email);

        if( data.username.trim() !== '' && isValidEmail && data.password.length >= 8){

        try {
            const response = await axios.post('https://backend-r5n4.onrender.com/signup', data);
            console.log(response.data);
            window.location.href = '/Home';
        } catch (error) {
            console.error(error);
        }}
    };

    return (
        <div className="signup-container">
            <form  onSubmit={handleSubmit}>
                <input className="input-field" type="text" name="username" placeholder="Username" />
                <input className="input-field" type="email" name="email" placeholder="Email" />
                <input className="input-field" type="password" name="password" placeholder="Password" />
                <button className="submit-button" type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignupForm;