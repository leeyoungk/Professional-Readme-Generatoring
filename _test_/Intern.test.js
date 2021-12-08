const Intern = require( '../lib/Intern' );


describe( 'Intern class', () => {
	describe( 'Constructor', () => {
		it( 'creates an object with \'name\', \'id\', \'email\', and \'school\' ', () => {
			const intern = {
				name: 'employeeName',
				id: 1,
				email: 'email@email.com',
				school: 'schoolName'
			};
			const obj = new Intern( intern );

			expect( obj.name ).toEqual( intern.name );
			expect( obj.id ).toEqual( intern.id );
			expect( obj.email ).toEqual( intern.email );
			expect( obj.school ).toEqual( intern.school );
		} );
	} );

	describe( 'getSchool', () => {
		it( 'returns the school name of the intern', () => {
			const intern = {
				name: 'employeeName',
				id: 1,
				email: 'email@email.com',
				school: 'schoolName'
			};
			const obj = new Intern( intern );

			expect( obj.getSchool() ).toEqual( intern.school );
		} );
	} );

	describe( 'getName', () => {
		it( 'returns the name of the employee', () => {
			const intern = {
				name: 'employeeName',
				id: 1,
				email: 'email@email.com',
				school: 'schoolName'
			};
			const obj = new Intern( intern );

			expect( obj.getName() ).toEqual( intern.name );
		} );
	} );

	describe( 'getId', () => {
		it( 'returns the id of the employee', () => {
			const intern = {
				name: 'employeeName',
				id: 1,
				email: 'email@email.com',
				school: 'schoolName'
			};
			const obj = new Intern( intern );

			expect( obj.getId() ).toEqual( intern.id );
		} );
	} );

	describe( 'getEmail', () => {
		it( 'returns the email of the employee', () => {
			const intern = {
				name: 'employeeName',
				id: 1,
				email: 'email@email.com',
				school: 'schoolName'
			};
			const obj = new Intern( intern );

			expect( obj.getEmail() ).toEqual( intern.email );
		} );
	} );

	describe( 'getRole', () => {
		it( 'returns the role of the employee', () => {
			const intern = {
				name: 'employeeName',
				id: 1,
				email: 'email@email.com',
				school: 'schoolName'
			};
			const obj = new Intern( intern );

			expect( obj.getRole() ).toEqual( 'Intern' );
		} );
	} );
} );