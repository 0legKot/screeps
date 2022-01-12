var roleUpgrader = {

    run: function (creep, sourceIx) {

        if (creep.memory.upgrading && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.upgrading = false;
            creep.say('🔄 harvest');
        }
        if (!creep.memory.upgrading && creep.store.getFreeCapacity() == 0) {
            creep.memory.upgrading = true;
            creep.say('⚡ upgrade');
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
    }
};

module.exports = roleUpgrader;