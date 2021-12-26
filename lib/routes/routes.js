Router.configure({
	layoutTemplate: 'main_layout',
});
Router.map(function(){
	this.route('hastaKayit', {
		path: '/hastaKayit',
		template: 'hastaKayit'
	});

	this.route('bilgiler', {
		path: '/bilgiler',
		template: 'bilgiler'
	});
	this.route('akimsuregrafigi', {
		path: '/akimsuregrafigi',
		template: 'akimsuregrafigi'
	});

	this.route('hastaarama', {
		path: '/hastaarama',
		template: 'hastaarama'
	});
	this.route('beckgrafik', {
		path: '/beckgrafik',
		template: 'beckgrafik'
	});
	this.route('hamiltongrafik', {
		path: '/hamiltongrafik',
		template: 'hamiltongrafik'
	});
	this.route('montgomerygrafik', {
		path: '/montgomerygrafik',
		template: 'montgomerygrafik'
	});
	this.route('montrealgrafik', {
		path: '/montrealgrafik',
		template: 'montrealgrafik'
	});
	this.route('tedaviekle', {
		path: '/tedaviekle',
		template: 'tedaviekle'
	});
	// Login
	this.route('login', {
		path: '/',
		template: 'login'
	});
	// Signup
	this.route('signup', {
		path: '/signup',
		template: 'signup'
	});
	this.route('seanssuregrafigi', {
		path: '/seanssuregrafigi',
		template: 'seanssuregrafigi'
	});
});
