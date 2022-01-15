const names = require('names');
var totalEnergy = Game.rooms[names.room].energyCapacityAvailable;

var body = [WORK, WORK, CARRY, MOVE];
switch (totalEnergy) {
    case 300:
        body = [WORK, WORK, CARRY, MOVE];
        break;
    case 350:
        body = [WORK, WORK, CARRY, MOVE, MOVE];
        break;
    case 400:
        body = [WORK, WORK, WORK, CARRY, MOVE];
        break;
    case 450:
        body = [WORK, WORK, WORK, CARRY, MOVE, MOVE];
        break;
    case 500:
        body = [WORK, WORK, WORK, WORK, CARRY, MOVE];
        break;
    case 550:
        body = [WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE];
        break;
    case 600:
        body = [WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE];
        break;
    case 650:
        body = [WORK, WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE];
        break;
    case 700:
        body = [WORK, WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE, MOVE];
        break;
    case 750:
        body = [WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE];
        break;
    case 800:
        body = [WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE];
        break;
    case 850:
        body = [WORK, WORK, WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE, MOVE, MOVE];
        break;
    case 900:
        body = [WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE];
        break;
    case 950:
        body = [WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE, MOVE, MOVE];
        break;
    case 1000:
        body = [WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE];
        break;
    case 1050:
        body = [WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE];
        break;
    case 1100:
        body = [WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE];
        break;
    case 1150:
        body = [WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE];
        break;
    case 1200:
        body = [WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE];
        break;
    case 1250:
        body = [WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE];
        break;
    case 1300:
        body = [WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE];
        break;
    default:
        console.log(totalEnergy);
}

var workCount = body.filter(part => part == WORK).length;
var attackerBody = Array(workCount * 2).fill(TOUGH).concat(body.map(part => part == WORK ? ATTACK : part));

var upgraderBody = [WORK, CARRY, CARRY, MOVE, MOVE];

var exportedBody = { default: body, attacker: attackerBody, upgrader: upgraderBody };
module.exports = exportedBody;