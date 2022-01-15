var names = require('names');

var spawn = {
    newCreep: function (role, maxCount, body) {
        var creeps = _.filter(Game.creeps, (creep) => creep.memory.role == role);
        var creepsSrc0 = _.filter(Game.creeps, (creep) => creep.memory.srcIx == 0);
        var creepsSrc1 = _.filter(Game.creeps, (creep) => creep.memory.srcIx == 1);
        console.log(role + ' ' + creeps.length)
        if (creeps.length < maxCount) {
            var newName = role + Game.time;
            //console.log('spawning '+ role)
            var srcix = 0 + ((2 * creepsSrc0.length) > creepsSrc1.length);
            Game.spawns[names.spawn].spawnCreep(
                body,
                newName,
                { memory: { role: role, srcIx: srcix } });
        }
    },

    visualize: function () {
        if (Game.spawns[names.spawn].spawning) {
            var spawningCreep = Game.creeps[Game.spawns[names.spawn].spawning.name];
            Game.spawns[names.spawn].room.visual.text(
                '🛠️' + spawningCreep.memory.role,
                Game.spawns[names.spawn].pos.x + 1,
                Game.spawns[names.spawn].pos.y,
                { align: 'left', opacity: 0.8 });
        }
    }
}
module.exports = spawn;