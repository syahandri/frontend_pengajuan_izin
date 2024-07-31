import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import PengajuanService from "../../service/pengajuan-service";
import Alert from "../../components/alert";

export default function Register() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirmation, setPasswordConfirmation] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [validation, setValidation] = useState("");

	const navigate = useNavigate();

	const handleRegsiter = async (e) => {
		e.preventDefault();
		const res = await PengajuanService.register(name, email, password, passwordConfirmation);
		if (res.status === 200) {
			console.log(res.data);
		} else if (res.status === 422) {
			setValidation(res.data.errors);
		} else {
			setErrorMessage(res.data.message);
		}
	};

	return (
		<div className='container p-5'>
			<div className='row justify-content-center'>
				<div className='col-md-6'>
					<div className='card rounded shadow-sm'>
						<div className='card-body'>
							<h3 className='text-center'>Buat Akun</h3>
							<hr />

							{errorMessage && <Alert type='danger' message={errorMessage} />}

							<form onSubmit={handleRegsiter}>
								<div className='mb-3'>
									<label className='form-label'>Nama Lengkap</label>
									<input type='name' className={`form-control ${validation.name && "is-invalid"}`} value={name} onChange={(e) => setName(e.target.value)} placeholder='Masukkan Nama Lengkap' />
									{validation.name && <div className='invalid-feedback'>{validation.name[0]}</div>}
								</div>
								<div className='mb-3'>
									<label className='form-label'>Email</label>
									<input type='email' className={`form-control ${validation.email && "is-invalid"}`} value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Masukkan Alamat Email' />
									{validation.email && <div className='invalid-feedback'>{validation.email[0]}</div>}
								</div>
								<div className='mb-3'>
									<label className='form-label'>Password</label>
									<input type='password' className={`form-control ${validation.password && "is-invalid"}`} value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Masukkan Password' />
									{validation.password && <div className='invalid-feedback'>{validation.password[0]}</div>}
								</div>
								<div className='mb-3'>
									<label className='form-label'>Konfirmasi Password</label>
									<input type='password' className='form-control' value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} placeholder='Masukkan Password' />
								</div>
								<div className='d-grid mt-4'>
									<button type='submit' className='btn btn-primary'>
										Daftar
									</button>

									<p className='mb-0 mt-3 text-center'>
										Sudah punya akun?{" "}
										<Link to={"/"} className='text-decoration-none'>
											Login
										</Link>
									</p>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
