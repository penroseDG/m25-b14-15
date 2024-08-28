// cấu hình các method (GET , POST , DELETE, PATCH , PUT )

import { NextResponse } from "next/server";
let users = [
    {
        id : "1",
        name : "penrose",
        address : "HaNoi"
    },
    {
        id : "2",
        name : "hoang",
        address : "Hue"
    },
    {
        id : "3",
        name : "nguyen",
        address : "Da Nang"
    }
]
export async function GET () {
      return NextResponse.json(users) ;
}
