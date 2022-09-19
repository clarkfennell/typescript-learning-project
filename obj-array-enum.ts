
enum Role { ADMIN, READ_ONLY, AUTHOR };

const person: {
  name: string,
  age: number,
  hobbies: string[],
  role: Role
} = {
  name: 'Clark',
  age: 33,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
};

console.log(person);