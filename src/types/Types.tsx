import React from 'react';

//intial user interface/template
export interface User {
    userName: string,
    email: string,
};


//user attribute template/interface
export interface UserAttribute {
    Name: string,
    Value: string
}


//rental space information template/interface
export interface Space {
    spaceId: string, 
    spaceName: string,
    address: string,
    photoUrl?: string,
    // children?: React.ReactNode
}