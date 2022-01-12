var names = require('names');

var spawn = {
    newCreep: function (role, maxCount, body) {
        var creeps = _.filter(Game.creeps, (creep) => creep.memory.role == role);
        console.log(role+' '+creeps.length)
        if (creeps.length < maxCount) {
            var newName = role + Game.time;
            //console.log('spawning '+ role)
            Game.spawns[names.spawn].spawnCreep(
                body,
                newName,
                { memory: { role: role } });
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