
## env setting
> npm install -g typescript ts-node


# what is type?
type is easy way to refer to the different properties and functions that a value has

```typescript
// Todo is an object that has an id, title, completed properties
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const todo = response.data as Todo;
console.log(todo.id);
console.log(todo.title);
console.log(todo.completed);
```

# why do we care about types?
1. Types are used by the typescript compiler to analyze our code for errors.
2. types allow other engineers to understand what values are flowing arround our codebase.


# type annotations
code we add to tell typescript what type of value a variable will refer to.

## when do e use Type annotation?
1. when a function returns the `any` type and we neeed to clarify the value.
2. when we declare a variable on one line then initialize it later.
3. when we want a variable to have a type that can't be inferred.


# type inference
typescript tries to figure out what type of value a variable refers to.   

## when do we use type inference?
**always!!**
