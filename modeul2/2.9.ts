{
    //conditional type
    type Sheik = {
        bike: string,
        car: string,
        ship: string,
        plane: string
    }

    //keyof chck korbe "bike"|"car"| "ship"

    //car aci kena | bike aci kena | ship aci | plane aci
    type CheckVicle<T> = T extends keyof Sheik ? true : false;
    type HasePlane = CheckVicle<"plane">
}