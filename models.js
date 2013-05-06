angular.module('crm').service('models', function() {
	persistence.store.websql.config(
		persistence,
		'crm', 'CRM Database', 5*1024*1024
	);
	var orm = {};

	orm.Customer = persistence.define('customer', {
		name: 'TEXT',
		surname: 'TEXT',
		street: 'TEXT',
		code: 'TEXT',
		phone: 'TEXT',
		email: 'TEXT'
	});

	orm.House = persistence.define('house', {
		number_of_earth: 'INT',
		number_of_gutter: 'INT',
		color_of_gutter: 'TEXT',
		price: 'FLOAT',
		notes: 'TEXT',
		status: 'INT',
		warnings: 'TEXT'
	});

	orm.SoilType = persistence.define('soil_type', {
		name: 'TEXT'
	});

	orm.CoverageType = persistence.define('coverage_type', {
		name: 'TEXT'
	});

	orm.HouseType = persistence.define('house_type', {
		name: 'TEXT'
	});

	orm.InstallationType = persistence.define('installation_type', {
		name: 'TEXT'
	});

	orm.MaterialType = persistence.define('material_type', {
		name: 'TEXT'
	});

	orm.House.hasOne('soil_type', orm.SoilType);
	orm.House.hasOne('coverage_type', orm.CoverageType);
	orm.House.hasOne('house_type', orm.HouseType);
	orm.House.hasOne('installation_type', orm.InstallationType);
	orm.House.hasOne('material_type', orm.MaterialType);
	orm.Customer.hasMany('houses', orm.House, 'customer');
	persistence.schemaSync();
	return orm;
});
