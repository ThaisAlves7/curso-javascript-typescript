import { zeroLeft } from './zero-left';

export function secondsToMinutes(seconds: number): string {
  //Contas de conversões de minutos e segundos
  const min = zeroLeft((seconds / 60) % 60);
  const sec = zeroLeft((seconds % 60) % 60);

  // Retorno dos minutos e segundos (tempo)
  return `${min}:${sec}`;
}
