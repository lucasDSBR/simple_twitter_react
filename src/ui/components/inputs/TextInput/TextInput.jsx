import styles from './TextInput.module.css';

export default function TextInput({ placeholder, rows, maxLength, value, onChange}){
	return (
		<>
			<textarea placeholder={placeholder} rows={rows} maxLength={maxLength} value={value} onChange={onChange} className={styles['input']}/>
		</>
	);
}