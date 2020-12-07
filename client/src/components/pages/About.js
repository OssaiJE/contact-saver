import React, { Fragment } from "react";

const About = () => {
	return (
		<Fragment>
			<h1>About this app</h1>
			<p className="my-1">
				This is an app that is used primarily to save your contacts.
			</p>
			<p className="my-1">It is your online phone book</p>
			<p className="bg-dark p">
				<b>Version: 0.1.0</b>
			</p>
		</Fragment>
	);
};

export default About;
