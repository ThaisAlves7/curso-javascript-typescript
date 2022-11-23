import { Radio } from './device/radio';
import { Tv } from './device/tv';
import { RemoteControl } from './remote-control/remote-control';
import { RemoteControlWithVolume } from './remote-control/remote-control-with-volume';

function clientCode(
  abstraction: RemoteControl | RemoteControlWithVolume,
): void {
  abstraction.togglePower(); // true

  // Type Guard
  if (!('volumeUp' in abstraction)) return;

  abstraction.volumeUp(); // 20
  abstraction.volumeUp(); // 30
  abstraction.volumeDown(); // 20
}

const radio = new Radio();
// const radioRemoteControl = new RemoteControl(radio);
const radioRemoteControl = new RemoteControlWithVolume(radio);
clientCode(radioRemoteControl);

console.log();

const tv = new Tv();
// const tvRemoteControl = new RemoteControl(radio);
const tvRemoteControl = new RemoteControlWithVolume(tv);

clientCode(tvRemoteControl);
