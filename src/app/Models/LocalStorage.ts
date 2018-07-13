import { UserSignUp } from "./UserSignUp.class";

export function KiemTraLocal(obj):boolean{
    let flag = localStorage.getItem(obj);
    if(flag != null){
        return true;
    }
    return false;
}

export function LayThongTinLocal(obj):UserSignUp{
    if(localStorage.getItem(obj)){
        return JSON.parse(localStorage.getItem(obj));
    }
    return null;
}
export function DangXuat(obj){
    localStorage.removeItem(obj);
}







