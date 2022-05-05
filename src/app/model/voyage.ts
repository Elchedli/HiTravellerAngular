import { User } from "./user";

export class Voyage {
    idVoyage!:number
    destination!:string;
    departureDate!:Date;
    arrivelDate!:Date;
    periode!:number;
    subject!:string;
    domain!:string;
    program!:string;
    imageName!:string;
    picture!:File;
    price!:number;
    entreprise!:User;
}
