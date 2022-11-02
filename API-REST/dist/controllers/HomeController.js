"use strict";Object.defineProperty(exports, "__esModule", {value: true});class HomeController {
  async index(req, res) {
    // const novoAluno = await Aluno.create({
    //   nome: 'Beatriz',
    //   sobrenome: 'Souza',
    //   email: 'beatriz.souza@js.com',
    //   idade: 22,
    //   peso: 50,
    //   altura: 1.5,
    // })
    res.json("Index");
  }
}

exports. default = new HomeController();
