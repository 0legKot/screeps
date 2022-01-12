const roleHarvester = require('role.harvester');
const roleUpgrader = require('role.upgrader');
const roleBuilder = require('role.builder');
const cleanup = require('cleanup');
const spawn = require('spawn');
const names = require('names');
const defense = require('defense');



module.exports.loop = function () {
    console.log('--------------------------------------');

    cleanup.clearMemory();

    /*var totalEnergy = Game.rooms[names.room].energyCapacityAvailable;
    var builderBody = Array(0|totalEnergy / 200).fill(WORK)
        .concat(Array(0|totalEnergy / 150).fill(MOVE))
        .concat(Array(0|totalEnergy / 300).fill(CARRY));*/

    spawn.newCreep(names.builderRole, 3, [WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE]);
    spawn.newCreep(names.upgraderRole, 9, [WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE]);
    spawn.newCreep(names.harvesterRole, 3, [WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE]);

    spawn.visualize();

    defense.useTower();

    for (var name in Game.creeps) {
        var creep = Game.creeps[name];
        if (creep.memory.role == names.harvesterRole) {
            roleHarvester.run(creep, 0);
        }
        if (creep.memory.role == names.upgraderRole) {
            roleUpgrader.run(creep, 1);
        }
        if (creep.memory.role == names.builderRole) {
            roleBuilder.run(creep, 0);
        }
    }
}