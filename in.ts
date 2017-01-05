// interface BooleanifiedPerson {
//     name: boolean;
//     age: boolean;
// }

type BooleanifiedPerson  = {
    [P in "name"|"id"]: boolean;
}

var b: BooleanifiedPerson  = { id: true, name: false };