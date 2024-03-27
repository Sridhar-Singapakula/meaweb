import { useHistory } from "react-router-dom";
import styles from "./styles.module.scss";
import img1 from "../../img/record.svg"
import img2 from "../../img/record.svg"

const NotFound = () => {
	const history = useHistory();

	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<div className={styles.main}>
					<h1>404s and heartbreaks</h1>
					<p>
						We couldn’t find the page you were looking for. Maybe our FAQ or
						Community can help?
					</p>
					<span onClick={() => history.push("/")}>Go Back Home</span>
				</div>
			</div>
			<div className={styles.right}>
				<img src={img1} alt="record" className={styles.record} />
				<img
					src={img2}
					alt="record-arm"
					className={styles.record_arm}
				/>
			</div>
		</div>
	);
};

export default NotFound;
