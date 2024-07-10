export interface Animal {
  name: string;
}

export function createAnimal(name: string): Animal {
  return {
    name,
  };
}
