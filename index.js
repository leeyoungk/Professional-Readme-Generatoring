const inquirer = require( 'inquirer' );
const Manager = require( './lib/Manager' );
const Engineer = require( './lib/Engineer' );
const Intern = require( './lib/Intern' );
const fs = require( 'fs' );



const managerQuestions = [
    {
        type: "input",
        message:"what is the team manager\'s name ?",
        name: "name",
        validate: ( input ) => {
			if( input !== '' && !( /\d/.test( input ) ) ) {
				return true;
			}
			return 'Enter a name with characters only.';
		}
    },
    {
		type: 'input',
		message: 'What is the team manager\'s ID?',
		name: 'id',
		validate: ( input ) => {
			if( input !== '' ) {
				return true;
			}
			return 'Please enter an ID.';
		}
	},

];
const internQuestions = [
    {
        type: "input",
        message:"what is the team intern's name ?",
        name: "name"
    }
];
const engineerQuestions = [
    {
        type: "input",
        message:"what is the team engineer's name ?",
        name: "name"
    }
];
const whatsNextQuestions = [
    {
        type: "input",
        message:"what is the team engineer's name ?",
        name: "list",
        options: []
    }
];