const roleUpgrader = require('role.upgrader');
var roleBuilder = {

    run: function (creep, sourceIx) {

        if (creep.memory.building && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.building = false;
        }
        if (!creep.memory.building && creep.store.getFreeCapacity() == 0) {
            creep.memory.building = true;
        }

        if (creep.memory.building) {
            var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if (targets.length) {
                if (creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], { visualizePathStyle: { stroke: '#FFA500' } });
                }
            } else roleUpgrader.run(creep, sourceIx);
        }
        else {
            var sources = creep.room.find(FIND_SOURCES);
            if (creep.harvest(sources[sourceIx]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[sourceIx], { visualizePathStyle: { stroke: '#D1D100' } });
            }
        }
        if (creep.room.controller.level < 1) creep.moveTo(34, 0);
    }
};

module.exports = roleBuilder;