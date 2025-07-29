import { Groups, SengilStudents, SengilTeacher, Students, Teachers } from "../pages";
import { PATH } from "./path";

export const PageRouteList = [
    {
        id: 1,
        path: PATH.teachers,
        element: <Teachers />,
        title: "Teachers",
        children: []
    },
    {
        id: 2,
        path: PATH.students,
        element: <Students />,
        title: "Students",
        children: []
    },
    {
        id: 3,
        path: PATH.groups,
        element: <Groups />,
        title: "Groups",
        children: []
    },
    {
        id: 4,
        path: PATH.sengilTeacher,
        element: <SengilTeacher />,
        title: null,
        children: []
    },
    {
        id: 5,
        path: PATH.sengilStudent,
        element: <SengilStudents/>,
        title: null,
        children: []
    }
]