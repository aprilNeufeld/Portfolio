import { createSlice } from '@reduxjs/toolkit'

// Define the user object so that we don't push any
// information we don't need to the redux store
export interface UserState {
	basics: {
		name: string;
		label: string;
		summary: string;
		username: string;
	};
	skills: {
		name: string;
	}[];
	interests: {
		name: string;
		keywords: string[];
	}[];
}

export const initialState: UserState = {
    basics: {
        label: 'Full Stack Web & Android App Developer',
        name: 'April',
        summary: 'I\'m a full-stack web developer based in Manitoba, Canada. I\'m dedicated to creating elegant frameworks and readable code.  Programming should be fun and accessible to all people, and I\'m passionate about breaking down barriers and myths around this career path.\n\nI\'ve been coding in Java for nearly a decade, and more recently graduated with my web development diploma. I love building well-tested databases (SQL/MongoDB/Android Room) and APIs as well as robust, reusable front-end components for both mobile and web applications. ',
        username: 'tricksterCodess'
    },
    interests: [
        {
            name: '2SLGBTQ+ Advocacy',
            keywords: [
                '🌈',
                'rainbow'
            ]
        },
        {
            name: 'Watercolour Painting',
            keywords: [
                '🎨',
                'painting'
            ]
        },
        {
            name: 'Camping',
            keywords: [
                '⛺',
                'camping'
            ]
        },
        {
            name: 'Video Games',
            keywords: [
                '🎧',
                'headset',
                '💻',
                'computer'
            ]
        },
        {
            name: 'Dungeons & Dragons (ask me about my artificer!) ',
            keywords: [
                '🧙',
                'mage'
            ]
        },
        {
            name: 'My Pets',
            keywords: [
                '🐕',
                'dog',
                '🐈',
                'cat'
            ]
        }
    ],
    skills: [
        {
            name: 'Java'
        },
        {
            name: 'React'
        },
        {
            name: 'Redux'
        },
        {
            name: 'TypeScript'
        },
        {
            name: 'NextJS'
        },
        {
            name: 'Material UI'
        },
        {
            name: 'VB.NET'
        },
        {
            name: 'Kotlin'
        },
        {
            name: '.NET Core'
        }
    ]
}

/*
export const initialState: UserState = {
	basics: {
		label: "",
		name: "",
		summary: "",
		username: ""
	},
	interests: [],
	skills: []
};
*/

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
})

export default userSlice.reducer