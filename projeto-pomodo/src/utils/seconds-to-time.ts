import { zeroLeft } from './zero-left';

export function secondsToTimes(seconds: number): string {
  //Contas de conversões de minutos e segundos
  const hours = zeroLeft(seconds / 3600);
  const min = zeroLeft((seconds / 60) % 60);
  const sec = zeroLeft((seconds % 60) % 60);

  // Retorno dos minutos e segundos (tempo)
  return `${hours}:${min}:${sec}`;
}
