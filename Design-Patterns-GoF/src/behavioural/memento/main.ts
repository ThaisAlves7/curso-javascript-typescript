import { ImageEditor } from './image-editor';
import { imageEditorBackupManager } from './image-editor-backup';

const imageEditor = new ImageEditor('/media/imagem.png', 'png');
const backupManager = new imageEditorBackupManager(imageEditor);

backupManager.backup();
imageEditor.convertFormatTo('gif'); // Convertendo a imagem
// backupManager.undo(); // Desfazendo a conversão da imagem

backupManager.backup();
imageEditor.convertFormatTo('bmp');

backupManager.backup();
imageEditor.convertFormatTo('jpg');

console.log(imageEditor); // jpg
backupManager.undo();
console.log(imageEditor); // bmp
backupManager.undo();
console.log(imageEditor); // gif
backupManager.undo();
console.log(imageEditor); // png
backupManager.undo(); // no mementos
console.log(imageEditor); // png
