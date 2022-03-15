sc.OPTIONS_DEFINITION["keys-free-sp"] = {
	type: "CONTROLS",
	init: {
		key1: ig.KEY.I,
		key2: undefined
	},
	cat: sc.OPTION_CATEGORY.CONTROLS,
	hasDivider: true,
	header: "free-sp",
};

let giveSPAmount = 12;

/**
 * @inject
 * Detect when Save and Load Position/Map binds are pressed
 */
sc.Control.inject({
	freeSPPress: function () {
		return ig.input.pressed("free-sp");
	}
});

/**
 * @inject
 * Handle execution of Save and Load Position/Map keybinds
 */
ig.ENTITY.Player.inject({
	gatherInput(...args) {
		if (ig.game.isControlBlocked()) {
			return this.parent(...args);
		}

		if (!ig.interact.isBlocked()) {
			if (sc.control.freeSPPress()) {
				this.params.currentSp += giveSPAmount;
			}
		}

		return this.parent(...args);
	}
});