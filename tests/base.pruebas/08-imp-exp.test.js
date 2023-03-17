import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from '../../src/data/heroes'


describe("Pruebas en 08-imp-exp.js", () => {
  test("getHeroeByID debe de retonar un heroa por ID", () => {
    const id = 1;
    const hero = getHeroeById(id);

    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("getHeroeByID debe de retonar undefined si noexiste", () => {
    const id = 100;
    const hero = getHeroeById(id);

    //expect(hero).toBe(undefined);
    expect(hero).toBeFalsy();
  });

  //Tarea:
  //debe de retonar un arreglo de los héros de DC
  //Length === 3
  //toEqueal al arreglo filtrado
  test("getHeroesByOwner debe de regresar heroes de DC", () => {
    const owner = "DC";
    const _hereos = getHeroesByOwner(owner);

    expect(_hereos.length).toBe(3);
    // expect(_hereos).toEqual([
    //   {
    //     id: 1,
    //     name: "Batman",
    //     owner: "DC",
    //   },
    //   {
    //     id: 3,
    //     name: "Superman",
    //     owner: "DC",
    //   },
    //   {
    //     id: 4,
    //     name: "Flash",
    //     owner: "DC",
    //   },
    // ]);
    expect(_hereos).toEqual(heroes.filter((hero) => hero.owner === owner));
  });


  //deb de retonar un arreglo con los heroes de marvel
  //length === 2
  test("getHeroesByOwner debe de regresar heroes de Marvel", () => {
    const owner = "Marvel";
    const _hereos = getHeroesByOwner(owner);

    expect(_hereos.length).toBe(2);
    expect(_hereos).toEqual(heroes.filter((hero) => hero.owner === owner));
  });
});
