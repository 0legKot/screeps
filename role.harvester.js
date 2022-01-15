const roleBuilder = require('role.builder');
var roleHarvester = {

    run: function (creep, sourceIx) {
        if (creep.store.getFreeCapacity() > 0) {
            var sources = creep.room.find(FIND_SOURCES);
            if (creep.harvest(sources[sourceIx]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[sourceIx], { visualizePathStyle: { stroke: '#FFFF00' } });
            }
        }
        else {
            var targetSpawns = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return structure.structureType == STRUCTURE_SPAWN &&
                        structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                }
            });
            if (targetSpawns.length > 0) {
                if (creep.transfer(targetSpawns[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targetSpawns[0], { visualizePathStyle: { stroke: '#00FF00' } });
                }
            }

            var targetTowers = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return structure.structureType == STRUCTURE_TOWER &&
                        structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                }
            });
            if (targetTowers.length > 0) {
                if (creep.transfer(targetTowers[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targetTowers[0], { visualizePathStyle: { stroke: '#00FF00' } });
                }
            }

            var targetExtensions = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return structure.structureType == STRUCTURE_EXTENSION &&
                        structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                }
            });
            if (targetExtensions.length > 0) {
                if (creep.transfer(targetExtensions[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targetExtensions[0], { visualizePathStyle: { stroke: '#00FF00' } });
                }
            }

            if (targetExtensions + targetSpawns + targetTowers == 0) roleBuilder.run(creep, sourceIx);
        }
        if (creep.room.controller.level < 1) creep.moveTo(34, 0);
    }
};

module.exports = roleHarvester;