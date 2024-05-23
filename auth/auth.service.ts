import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})
export class AuthService{
    private iaAuth: boolean = false;
    private points: number = 0;

    constructor(){}
    
    setPoints(points:number):void{
        this.points = points;
        const user= JSON.parse(localStorage.getItem('user') || '{}')
        user.points = points;
    }
    getPoints(){
        return this.points;
    }

    regirest(username:string, passvord: string){
        localStorage.setItem('user', JSON.stringify({username,passvord}))
    }

    login(username:string, passvord: string){
        const user= JSON.parse(localStorage.getItem('user') || '{}')
        if(passvord === user.passvord && username === user.username){
            this.iaAuth = true;
            this.points = user.points;
            return true
        }
        return false
    }

    logout():void{
        this.iaAuth = false;
    }
}