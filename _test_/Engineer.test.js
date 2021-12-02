const Engineer = require( '../lib/Engineer' );


describe( 'Engineer class', () => {
	describe( 'Constructor', () => {
		it( 'creates an object with \'name\', \'id\', \'email\', and \'github\'', () => {
			const engineer = {
				name: 'employeeName',
				id: 1,
				email: 'email@email.com',
				github: 'githubName'
			};
			const obj = new Engineer( engineer );

			expect( obj.name ).toEqual( engineer.name );
			expect( obj.id ).toEqual( engineer.id );
			expect( obj.email ).toEqual( engineer.email );
			expect( obj.github ).toEqual( engineer.github );
		} );
	} );

	describe( 'getGithub', () => {
		it( 'returns the github username of the engineer', () => {
			const engineer = {
				name: 'employeeName',
				id: 1,
				email: 'email@email.com',
				github: 'githubName'
			};
			const obj = new Engineer( engineer );

			expect( obj.getGithub() ).toEqual( engineer.github );
		} );
	} );

	describe( 'getName', () => {
		it( 'returns the name of the employee', () => {
			const engineer = {
				name: 'employeeName',
				id: 1,
				email: 'email@email.com',
				github: 'githubName'
			};
			const obj = new Engineer( engineer );

			expect( obj.getName() ).toEqual( engineer.name );
		} );
	} );

	describe( 'getId', () => {
		it( 'returns the id of the employee', () => {
			const engineer = {
				name: 'employeeName',
				id: 1,
				email: 'email@email.com',
				github: 'githubName'
			};
			const obj = new Engineer( engineer );

			expect( obj.getId() ).toEqual( engineer.id );
		} );
	} );

	describe( 'getEmail', () => {
		it( 'returns the email of the employee', () => {
			const engineer = {
				name: 'employeeName',
				id: 1,
				email: 'email@email.com',
				github: 'githubName'
			};
			const obj = new Engineer( engineer );

			expect( obj.getEmail() ).toEqual( engineer.email );
		} );
	} );

	describe( 'getRole', () => {
		it( 'returns the role of the employee', () => {
			const engineer = {
				name: 'employeeName',
				id: 1,
				email: 'email@email.com',
				github: 'githubName'
			};
			const obj = new Engineer( engineer );

			expect( obj.getRole() ).toEqual( 'Engineer' );
		} );
	} );
} );