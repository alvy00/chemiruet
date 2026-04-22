export interface Alumni {
    name: string;
    email: string;
    currentJob: string;
    hometown: string;
    phone: string;
    photo?: string;
    series: number;
}

export interface FacultyMember {
    name: string;
    designation: string;
    email: string;
    onLeave: boolean;
    photo: string;
}
