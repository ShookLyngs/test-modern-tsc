import { Animal, createAnimal } from './animal';

export interface Cat extends Animal {
  meow(): void;
}

export function createCat(name: string): Cat {
  const animal = createAnimal(name);
  return {
    ...animal,
    meow() {
      console.log('meow');
    },
  };
}
