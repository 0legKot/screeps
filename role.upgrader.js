var roleUpgrader = {

    run: function (creep, sourceIx) {

        if (creep.memory.upgrading && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.upgrading = false;
        }
        if (!creep.memory.upgrading && creep.store.getFreeCapacity() == 0) {
            creep.memory.upgrading = true;
        }

        if (creep.memory.upgrading) {
            if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller, { visualizePathStyle: { stroke: '#800080' } });
            }
        }
        else {
            var sources = creep.room.find(FIND_SOURCES);
            if (creep.harvest(sources[sourceIx]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[sourceIx], { visualizePathStyle: { stroke: '#757500' } });
            }
        }
        if (creep.room.controller.level < 1) creep.moveTo(34, 0);
    }
};

module.exports = roleUpgrader;