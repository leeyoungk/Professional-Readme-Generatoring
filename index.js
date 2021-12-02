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
    {
		type: 'input',
		message: 'What is the team manager\'s Email?',
		name: 'email',
		validate: ( input ) => {
			if( input !== '' && /@/.test( input ) ) {
				return true;
			}
			return 'Please enter a valid Email.';
		}
	},
    {
		type: 'input',
		message: 'What is the team manager\'s Office Number?',
		name: 'officeNumber',
		validate: ( input ) => {
			if( input !== '' ) {
				return true;
			}
			return 'Please enter corect Office Number.';
		}
	}

];
const internQuestions = [
    {
        type: "input",
        message:"what is the team intern's name ?",
        name: "name",
        validate: ( input ) => {
			if( input !== '' && !( /\d/.test( input ) ) ) {
				return true;
			}
			return 'Enter a name with characters only';
		}
    },
    {
		type: 'input',
		message: 'What is this intern\'s ID?',
		name: 'id',
		validate: ( input ) => {
			if( input !== '' ) {
				return true;
			}
			return 'Please enter an ID.';
		}
	},
    {
		type: 'input',
		message: 'What is this intern\'s Email?',
		name: 'email',
		validate: ( input ) => {
			if( input !== '' && /@/.test( input ) ) {
				return true;
			}
			return 'Please enter a valid Email.';
		}
	},
    {
		type: 'input',
		message: 'What is this intern\'s School Name?',
		name: 'school',
		validate: ( input ) => {
			if( input !== '' ) {
				return true;
			}
			return 'Enter a School Name.';
		}
	}
];
const engineerQuestions = [
    {
        type: "input",
        message:"what is the team engineer's name ?",
        name: "name",
        validate: ( input ) => {
			if( input !== '' && !( /\d/.test( input ) ) ) {
				return true;
			}
			return 'Please enter a name with characters only.';
		}
    },
    {
		type: 'input',
		message: 'What is this engineer\'s ID?',
		name: 'id',
		validate: ( input ) => {
			if( input !== '' ) {
				return true;
			}
			return 'Enter an ID.';
		}
	},
    {
		type: 'input',
		message: 'What is this engineer\'s Email?',
		name: 'email',
		validate: ( input ) => {
			if( input !== '' && /@/.test( input ) ) {
				return true;
			}
			return 'Enter a valid Email.';
		}
	},
    {
		type: 'input',
		message: 'What is this engineer\'s GitHub Username?',
		name: 'github',
		validate: ( input ) => {
			if( input !== '' ) {
				return true;
			}
			return 'Enter correct GitHub Username.';
		}
	}

];
const whatsNextQuestions = [
    {
        type: "list",
        message:"Would you like to add more team members ?",
        name: "nextQuestion",
        choices: ['Engineer', 'Intern','Finished']
    }
];

let nextQuestions = [];
let cardString = '';

const askEngineerInfo = () => {
	return inquirer
		.prompt( engineerQuestions )
		.then( ( engineerAnswers ) => {

			
			nextQuestions.push( new Engineer( engineerAnswers ) );

			return nextTeamMember();
		} );
};

const askInternInfo = () => {
	return inquirer
		.prompt( internQuestions )
		.then( ( internAnswers ) => {

			
			nextQuestions.push( new Intern( internAnswers ) );

			return nextTeamMember();
		} );
};

const nextTeamMember = () => {
	return inquirer
		.prompt( whatsNextQuestions )
		.then( ( nextTeamMemberAnswer ) => {

			switch( nextTeamMemberAnswer.nextQuestion ) {

			case 'Engineer':
				return askEngineerInfo();

			case 'Intern':
				return askInternInfo();

			default:
				return;
			}
		} );
};

const renderHeadHTML = () => {
	return fs.readFileSync( './src/head.html', 'utf8', ( err, data ) => {
		if( err ) {
			console.error( err );
			return;
		}
		return data;
	} );
};

const renderfooterHTML = () => {
	return fs.readFileSync( './src/footer.html', 'utf8', ( err, data ) => {
		if( err ) {
			console.error( err );
			return;
		}
		return data;
	} );
};


const readCard = ( type ) => {
	return fs.readFileSync( `./src/${type}Card.html`, 'utf8', ( err, data ) => {
		if( err ) {
			console.error( err );
			return;
		}
		return data;
	} );
};

const changeDataNames = ( obj, string ) => {
	string = string.replace( '[NAME]', obj.getName() );
	string = string.replace( '[IDNUMBER]', obj.getId() );
	string = string.replace( '[EMAIL]', obj.getEmail() );
	string = string.replace( '[EMAIL]', obj.getEmail() );
	return string;
};

const renderHTMLCards = () => {
	cardString = '';

	for( let i = 0; i < nextQuestions.length; i++ ) {

		let appendCard = '';
		const employeeType = nextQuestions[i].constructor.name;

		switch( employeeType ) {

		case 'Manager':
			appendCard = readCard( employeeType );
			appendCard = appendCard.replace( '[OFFICENUMBER]', nextQuestions[i].getOfficeNumber() );
			break;

		case 'Engineer':
			appendCard = readCard( employeeType );
			appendCard = appendCard.replace( '[GITHUB]', nextQuestions[i].getGithub() );
			appendCard = appendCard.replace( '[GITHUB]', nextQuestions[i].getGithub() );
			break;

		case 'Intern':
			appendCard = readCard( employeeType );
			appendCard = appendCard.replace( '[SCHOOLNAME]', nextQuestions[i].getSchool() );
			break;
		}

		cardString += changeDataNames( nextQuestions[i], appendCard );
	}

	return cardString;
};

const generateHTML = () => {
	return renderHeadHTML() +
        renderHTMLCards() +
        renderfooterHTML();
};

const generateStyleCSS = () => {
	return fs.readFileSync( './src/style.css', 'utf8', ( err, data ) => {
		if( err ) {
			console.error( err );
			return;
		}
		return data;
	} );
};

const writeToFile = ( fileName, string ) => {
	fs.writeFile( `./dist/${fileName}`, string, ( err ) => err ? console.error( err ) : console.log( 'Success!' ) );
};

const init = () => {
	inquirer
		.prompt( managerQuestions )
		.then( ( managerAnswers ) => {

			
			nextQuestions.push( new Manager( managerAnswers ) );

			return nextTeamMember();
		} )
		.then( () => {

			const htmlString = generateHTML();
			writeToFile( 'index.html', htmlString );

			const cssString = generateStyleCSS();
			writeToFile( 'style.css', cssString );
		} )
		.catch( ( error ) => {
			console.log( error );
		} );
};

init();