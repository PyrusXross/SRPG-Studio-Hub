AbilityCalculator.getCritical = function (unit, weapon) {
	// Critical rate is equal to the critical rate of weapons
	return weapon.getCritical ();
};

AbilityCalculator.getCriticalAvoid = function (unit) {
	// Critical avoidance rate is always 0
	return 0;
};