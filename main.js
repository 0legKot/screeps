const roleHarvester = require('role.harvester');
const roleUpgrader = require('role.upgrader');
const roleBuilder = require('role.builder');
const roleAttacker = require('role.attacker');
const cleanup = require('cleanup');
const spawn = require('spawn');
const names = require('names');
const defense = require('defense');
const body = require('body');



module.exports.loop = function () {
    console.log('--------------------------------------');

    cleanup.clearMemory();
    //console.log(body.default.length);
    spawn.newCreep(names.builderRole, 4, body.default);
    spawn.newCreep(names.upgraderRole, 1, body.upgrader);
    spawn.newCreep(names.harvesterRole, 8, body.default);
    spawn.newCreep(names.attackerRole, 2, body.attacker);

    spawn.visualize();

    defense.useTower();

    for (var name in Game.creeps) {
        var creep = Game.creeps[name];
        var srcIx = creep.memory.srcIx;
        var tmp = creep.room.find(FIND_SOURCES)[1]
        if (tmp && tmp.energy < 1)
            srcIx = 0;
        if (creep.memory.role == names.harvesterRole) {
            roleHarvester.run(creep, srcIx);
        }
        if (creep.memory.role == names.upgraderRole) {
            roleUpgrader.run(creep, srcIx);
        }
        if (creep.memory.role == names.builderRole) {
            roleBuilder.run(creep, srcIx);
        }
        if (creep.memory.role == names.attackerRole) {
            roleAttacker.run(creep);
        }
    }
}