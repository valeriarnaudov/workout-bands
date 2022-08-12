	Protected and public pages included.

	Authentication:
		=> Sign up with profile picture
			=> Error handling when fields are empty with a notification toasty
		=> Sign in
			=> Error handling when fields are empty with a notification toasty
		=> Sign out
	
	Posts:
		=> Create new post with picture or video in .mp4 format
			=> Error handling when fields are empty with a notification toasty
			=> Successfully created notification displayed
		=> Edit post (only if owner or admin)
			=> Edit confirmation message displayed
			=> Error handling when fields are empty with a notification toasty
			=> Successfully edited notification displayed
		=> Delete posts (only if owner or admin)
			=> Delete confirmation message displayed
			=> Successfully deleted notification displayed
		=> See posts(main page)
			=> Search for posts by title (the X button clear all filters)
			=> Sort by title, date and likes (ascending or descending order)
			=> Filter posts by group
			=> Likes displayer (to like a post, go to details)
			=> Go to post owner’s profile
		=> See post details
			=> Edit and delete displayed only if you’re owner
			=> Like option is only displayed if authenticated
			=> Comments only displayed if authenticated
			=> Go to post owner’s profile
		=> Like post (only authenticated users)
			=> Buttons are not displayed for guests
		=> Comment on post (only authenticated users)
			=> A message is displayed to sign in if you want to see comments
			=> Create new comment
			=> Like option hidden if already liked
			=> Comments sorted by newest
			=> Delete comment if creator (only owner)
		=> Like comments (only authenticated users)
			=> Only displayed when user is logged in
	
		=> Search posts
			=> Not able to submit if there aren’t results
		=> Sort by name or date (searched included)
		=> Filter by muscle group
			=> Message displayed when the aren’t results
	
		For owners: 
			=> Edit post (owner and admin)
				=> Alert for confirmation to edit the post
			=> Delete post (owner and admin)
				=> Alert for confirmation to delete the post
	
	Profile: 
		=> Go to anyone’s profile
		=> See the posts of the owner sorted by date
	
		For authenticated:
			=> Go from other profile to your’s
		
		For owners:
			=> Edit profile
				=> Alert for confirmation to edit the post
				=> Error handling when fields are empty with a notification toasty
				=> Successfully edited notification displayed
	
	Others:
		=> Loading spinner
		=> Toastify notifications
		=> Infinite scroll on main page

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
