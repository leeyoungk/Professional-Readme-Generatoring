const Employee = require( '../lib/Employee' );

describe( 'Employee class', () => {
	describe( 'Constructor', () => {
		it( 'creates an object with \'name\', \'id\', and \'email\'', () => {
			const name = 'employeeName';
			const id = 1;
			const email = 'email@email.com';
			const obj = new Employee( name, id, email );

			expect( obj.name ).toEqual( name );
			expect( obj.id ).toEqual( id );
			expect( obj.email ).toEqual( email );
		} );
	} );

	describe( 'getName', () => {
		it( 'returns the name of the employee', () => {
			const name = 'employeeName';
			const id = 1;
			const email = 'email@email.com';
			const obj = new Employee( name, id, email );

			expect( obj.getName() ).toEqual( name );
		} );
	} );

	describe( 'getId', () => {
		it( 'returns the id of the employee', () => {
			const name = 'employeeName';
			const id = 1;
			const email = 'email@email.com';
			const obj = new Employee( name, id, email );

			expect( obj.getId() ).toEqual( id );
		} );
	} );

	describe( 'getEmail', () => {
		it( 'returns the email of the employee', () => {
			const name = 'employeeName';
			const id = 1;
			const email = 'email@email.com';
			const obj = new Employee( name, id, email );

			expect( obj.getEmail() ).toEqual( email );
		} );
	} );

	describe( 'getRole', () => {
		it( 'returns the role of the employee', () => {
			const name = 'employeeName';
			const id = 1;
			const email = 'email@email.com';
			const obj = new Employee( name, id, email );

			expect( obj.getRole() ).toEqual( 'Employee' );
		} );
	} );
} );