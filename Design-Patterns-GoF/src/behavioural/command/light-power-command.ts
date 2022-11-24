import { SmartHouseCommand } from './smart-house-command';
import { SmartHouseLight } from './smart-house-light';

export class LightPowerCommand implements SmartHouseCommand {
  constructor(private readonly light: SmartHouseLight) {}

  execute(): void {
    if (this.light.getPowerStatus() === 'ON') return;
    this.light.on();
  }

  undo(): void {
    if (this.light.getPowerStatus() === 'OFF') return;
    this.light.off();
  }
}
