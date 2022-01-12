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

    spawn.newCreep(names.upgraderRole, 1, [WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE]);
    spawn.newCreep(names.builderRole, 7, [WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE]);
    spawn.newCreep(names.harvesterRole, 2, [WORK, WORK,WORK, CARRY, CARRY, CARRY, MOVE]);

    spawn.visualize();

    defense.useTower();

    for (var name in Game.creeps) {
        var creep = Game.creeps[name];
        if (creep.memory.role == names.harvesterRole) {
            roleHarvester.run(creep, 0);
        }
        if (creep.memory.role == names.upgraderRole) {
            roleUpgrader.run(creep, 0);
        }
        if (creep.memory.role == names.builderRole) {
            roleBuilder.run(creep, 1);
        }
    }
}