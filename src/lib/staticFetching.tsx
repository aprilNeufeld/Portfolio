
import { UserState } from "../store/userSlice";

export const fetchUserState = async (): Promise<UserState> => {
	const userResponse = await fetch(
		'https://gitconnected.com/v1/portfolio/tricksterCodess'
	);
	const user = await userResponse.json();

	return {
		user: user,
	} as UserState;
}
