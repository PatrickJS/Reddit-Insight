function fixStuff() {
	var nouns = db.GamingAllNouns.find();
	nouns.forEach(function(doc) {
		db.GamingAllNouns.update({ _id: doc._id }, {
			$set: {
				noun: doc.nouns
			},
			$unset: {
				nouns: 1
			}
		});
	});
}