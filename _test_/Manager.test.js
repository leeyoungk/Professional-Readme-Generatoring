const Manager = require( '../lib/Manager' );

describe( 'Manager class', () => {
	describe( 'Constructor', () => {
		it( 'creates an object with \'name\', \'id\', \'email\', and \'officeNumber\'', () => {
			const manager = {
				name: 'employeeName',
				id: 1,
				email: 'email@email.com',
				officeNumber: 1
			};
			const obj = new Manager( manager );

			expect( obj.name ).toEqual( manager.name );
			expect( obj.id ).toEqual( manager.id );
			expect( obj.email ).toEqual( manager.email );
			expect( obj.officeNumber ).toEqual( manager.officeNumber );
		} );
	} );

	describe( 'getOfficeNumber', () => {
		it( 'returns the office number of the manager', () => {
			const manager = {
				name: 'employeeName',
				id: 1,
				email: 'email@email.com',
				officeNumber: 1
			};
			const obj = new Manager( manager );

			expect( obj.getOfficeNumber() ).toEqual( manager.officeNumber );
		} );
	} );

	describe( 'getName', () => {
		it( 'returns the name of the employee', () => {
			const manager = {
				name: 'employeeName',
				id: 1,
				email: 'email@email.com',
				officeNumber: 1
			};
			const obj = new Manager( manager );

			expect( obj.getName() ).toEqual( manager.name );
		} );
	} );

	describe( 'getId', () => {
		it( 'returns the id of the employee', () => {
			const manager = {
				name: 'employeeName',
				id: 1,
				email: 'email@email.com',
				officeNumber: 1
			};
			const obj = new Manager( manager );

			expect( obj.getId() ).toEqual( manager.id );
		} );
	} );

	describe( 'getEmail', () => {
		it( 'returns the email of the employee', () => {
			const manager = {
				name: 'employeeName',
				id: 1,
				email: 'email@email.com',
				officeNumber: 1
			};
			const obj = new Manager( manager );

			expect( obj.getEmail() ).toEqual( manager.email );
		} );
	} );

	describe( 'getRole', () => {
		it( 'returns the role of the employee', () => {
			const manager = {
				name: 'employeeName',
				id: 1,
				email: 'email@email.com',
				officeNumber: 1
			};
			const obj = new Manager( manager );

			expect( obj.getRole() ).toEqual( 'Manager' );
		} );
	} );
} );

