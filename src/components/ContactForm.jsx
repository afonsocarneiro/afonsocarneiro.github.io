import { RiArrowRightLine } from 'react-icons/ri';
import { useState, useEffect } from 'react';

// Função para validar os valores do formulário
const validateValues = values => {
	const errors = {};
	if (!values.name) errors.name = 'Your name is mandatory';
	if (!values.email) errors.email = 'You forgot to add an email';
	else if (!/\S+@\S+\.\S+/.test(values.email)) errors.email = 'Email not valid';
	if (!values.message) errors.message = 'Please add a message';
	return errors;
};

/* https://web3forms.com/ -> generate Access Key */
const ContactForm = () => {
	const accessKey = 'e96d969a-cae4-4695-94d0-0017cadf7056';
	const [result, setResult] = useState('');
	const [values, setValues] = useState({
		name: '',
		email: '',
		phone: '',
		message: '',
	});
	const [errors, setErrors] = useState({});

	// Lidar com as mudanças no formulário
	const handleChange = e => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
		const updatedErrors = validateValues({ ...values, [name]: value });
		setErrors(updatedErrors);
	};

	// Envio do formulário
	const onSubmit = async event => {
		event.preventDefault();
		const validationErrors = validateValues(values);
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			return;
		}

		setResult('Sending....');
		const formData = new FormData();
		Object.keys(values).forEach(key => formData.append(key, values[key]));
		formData.append('access_key', accessKey);

		try {
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				body: formData,
			});
			const data = await response.json();

			if (data.success) {
				setResult('Form Submitted Successfully');
				setValues({ name: '', email: '', phone: '', message: '' });
			} else {
				setResult(data.message);
			}
		} catch (error) {
			setResult('Error submitting the form');
		}
	};

	useEffect(() => {
		if (result === 'Form Submitted Successfully') {
			const timer = setTimeout(() => {
				setResult('');
			}, 5000);

			// Cleanup timeout if component unmounts
			return () => clearTimeout(timer);
		}
	}, [result]);

	return (
		<form onSubmit={onSubmit}>
			<div className='contact__form__field'>
				<label htmlFor='name'>Name</label>
				<input type='text' name='name' placeholder='Tell me your name...' value={values.name} onChange={handleChange} />
				{errors.name && <small>{errors.name}</small>}
			</div>

			<div className='contact__form__field'>
				<label htmlFor='email'>Email</label>
				<input type='text' name='email' placeholder='Write your email please...' value={values.email} onChange={handleChange} />
				{errors.email && <small>{errors.email}</small>}
			</div>

			<div className='contact__form__field'>
				<label htmlFor='phone'>Phone</label>
				<input type='text' name='phone' placeholder='If you want, tell me your number...' value={values.phone} onChange={handleChange} />
			</div>

			<div className='contact__form__field'>
				<label htmlFor='message'>Message</label>
				<textarea id='message' name='message' placeholder='Chat with me...' value={values.message} onChange={handleChange}></textarea>
				{errors.message && <small>{errors.message}</small>}
			</div>

			<button type='submit' className='button'>
				Send message <RiArrowRightLine />
			</button>

			{result && <p>{result}</p>}
		</form>
	);
};

export default ContactForm;
