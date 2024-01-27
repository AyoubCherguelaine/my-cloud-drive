"use client"

import { User } from "../users";
import { File_ } from "./files";

export class Dashboard {
    private static instance:Dashboard;

    constructor(private user: User | null) {
        // Constructor logic here
    }

    static getInstance():Dashboard{
        if(Dashboard.instance == null){
            
            let user = User.getUserByToken("fdf")
            Dashboard.instance = new Dashboard(user) 
        }
        return Dashboard.instance
    }

    getHome():Array<File_> | null{
        return null
    }

    getShared():Array<File_> | null{
        return null
    }

    getRecent():Array<File_> | null{
        return null
    }

}
