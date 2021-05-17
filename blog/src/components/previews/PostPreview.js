import React from "react";
import styles from "./IframePreview.css";

export default function PostPreview(props) {
	const { displayed } = props.document;
	const secret = "OhwMaAryRw1Mcwt7C7VJvDVvCrFrSeJi";
	if (!displayed?.slug?.current) {
		return <div>The product needs a slug before it can be previewed.</div>;
	}

	const url =
		process.env.NODE_ENV === "production"
			? `../../api/preview?secret=${secret}&slug=${displayed?.slug?.current}`
			: `http://localhost:3000/api/preview?secret=${secret}&slug=${displayed?.slug?.current}`;

	return (
		<div className={styles.componentWrapper}>
			<div className={styles.iframeContainer}>
				<iframe src={url} frameBorder={"0"} />
			</div>
		</div>
	);
}