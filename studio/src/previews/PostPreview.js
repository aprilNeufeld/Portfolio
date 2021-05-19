import React from "react";
import styles from "./IframePreview.css";
import { secret } from '../secret';

export default function PostPreview(props) {
	const { displayed } = props.document;
	
	if (!displayed?.slug?.current) {
		return <div>The post needs a slug before it can be previewed.</div>;
	}

	const url = process.env.NODE_ENV === "production"
		? `../..`
		: `http://localhost:3000`;

	return (
		<div className={styles.componentWrapper}>
			<div className={styles.iframeContainer}>
				<iframe
					src={`${url}/api/preview?secret=${secret}&slug=${displayed?.slug?.current}`}
					frameBorder={"0"}
				/>
			</div>
		</div>
	);
}