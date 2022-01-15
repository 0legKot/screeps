
var defense = {
    useTower: function () {
        var towers = _.filter(Game.structures, function (s) {
            return s.structureType === STRUCTURE_TOWER
        });
        if (towers) {
            towers.forEach(tower => {
                var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
                    filter: (structure) => structure.hits < structure.hitsMax && structure.structureType != STRUCTURE_WALL
                });
                if (closestDamagedStructure) {
                    tower.repair(closestDamagedStructure);
                }

                var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
                if (closestHostile) {
                    tower.attack(closestHostile);
                }

            });
        }
    }
}
module.exports = defense;