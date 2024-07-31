import http from "./http-req";

class PengajuanService {
   // Service Auth
	register(name, email, password, password_confirmation) {
		return http
			.post("auth/register", { name, email, password, password_confirmation })
			.then((res) => res)
			.catch((err) => err.response);
	}

	login(email, password) {
		return http
			.post("auth/login", { email, password })
			.then((res) => res)
			.catch((err) => err.response);
	}

	logout(authToken) {
		http.defaults.headers.common["Authorization"] = authToken;
		return http
			.post("auth/logout")
			.then((res) => res)
			.catch((err) => err.response);
	}

   // Service Admin

   // Service Verifikator

   // Service User
}

export default new PengajuanService();
