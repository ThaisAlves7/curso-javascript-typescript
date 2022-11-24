import { LightIntensityCommand } from './light-intensity-command';
import { SmartHouseApp } from './smart-house-app';
import { SmartHouseLight } from './smart-house-light';
import { LightPowerCommand } from './light-power-command';

// Receiver
const bedroomLight = new SmartHouseLight('Luz Quarto');
const bathroomLight = new SmartHouseLight('Luz Banheiro');

// Command
const bedroomLightPowerCommand = new LightPowerCommand(bedroomLight);
const bathroomLightPowerCommand = new LightPowerCommand(bathroomLight);

const bedroomIntensityCommand = new LightIntensityCommand(bedroomLight);

// Controle - Invoker
const smartHouseApp = new SmartHouseApp();
smartHouseApp.addCommand('btn-1', bedroomLightPowerCommand);
smartHouseApp.addCommand('btn-2', bathroomLightPowerCommand);
smartHouseApp.addCommand('btn-3', bedroomIntensityCommand);

smartHouseApp.executeCommand('btn-1');
smartHouseApp.undoCommand('btn-1');
console.log();
smartHouseApp.executeCommand('btn-2');
smartHouseApp.undoCommand('btn-2');
console.log();

for (let i = 0; i < 5; i++) {
  smartHouseApp.executeCommand('btn-3');
}

console.log();

for (let i = 0; i < 5; i++) {
  smartHouseApp.undoCommand('btn-3');
}

// lightPowerCommand.execute();
// lightPowerCommand.execute();
// lightPowerCommand.undo();
// lightPowerCommand.undo();
