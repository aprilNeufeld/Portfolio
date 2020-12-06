import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../styles';
import { Parallax } from 'react-parallax';
import moment from 'moment';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

const Footer: React.FC = () => {

	const styles = useStyles();

	return (
		<Paper className={styles.footerPaper}>
			<Parallax bgImage={require("../images/background.png")} blur={1} strength={-100} className={styles.footerParallax}>
				<Container maxWidth="md" className={styles.footer}>
					<Typography variant="body2" style={{ color: "#ffffff" }}>
						{/*	Eventually I'll have the date of each deploy in a database
							and show it automatically below, but for now I'll update
							it manually {moment().format('MMMM Do YYYY, h:mm:ss a')} */}
						Last Updated December 06 2020, 11:57 AM
					</Typography>
				</Container>
			</Parallax>
		</Paper>

	)

};

export default Footer;
