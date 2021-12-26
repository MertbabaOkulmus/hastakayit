Hastakayit = new Mongo.Collection('Hastakayit');
PatientIndex = new EasySearch.Index({
	engine: new EasySearch.MongoDB({
		sort: function() {
			return { createdAt: -1 };
		},
		selector: function(searchObject, options, aggregation) {
			let selector = this.defaultConfiguration().selector(searchObject, options, aggregation),
			categoryFilter = options.search.props.categoryFilter;
			if(_.isString(categoryFilter) && !_.isEmpty(categoryFilter)) {
				selector.category = categoryFilter;
			}
			return selector;
		}
	}),
	collection: Hastakayit,
	fields: ['tcno'],
	defaultSearchOptions: {
		limit: 2000000000000000
	},
	permission: () => {
		return true;
	}
});
