export default function Alert({ type, message }) {
	return <div className={`alert alert-${type} text-center p-2`}>{message}</div>;
}
