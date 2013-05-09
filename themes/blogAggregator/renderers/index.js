var render = function (theme, data, meta, require) {
    theme('1-column-simple', {
        title: [
			{ partial:'title', context: data.title}
		],
		body: [
			{ partial:'body', context: data.body}
		]
    });
};

