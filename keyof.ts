// https://github.com/Microsoft/TypeScript/pull/11929
//  Static types for dynamically named properties (keyof T and T[K])

// keyof
interface IUser{
    id: string;
    name: string;
}
type K1 = keyof IUser;
type K2 = keyof IUser[];
type K3 = keyof {[x:string]: IUser};

// get/setProperty
function getProperty1(obj, key){}

function getProperty2<T, K extends keyof T>(obj: T, key: K){
    return obj[key];
}

function getProperty2Demo(){
    let u1:IUser = {id:"1", name:"2"};
    let p = getProperty2(u1, "id");
    console.log(p);
}
getProperty2Demo();