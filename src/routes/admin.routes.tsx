import { AcademicSemester } from "../pages/admin/academicManagement/academicSemester";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Academic Management",
    children: [
      {
        name: "get academic semester",
        path: "academic-semester",
        element: <AcademicSemester />,
      },
    ],
  },
  {
    name: "User Management",
    children: [
      {
        name: "create admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "create faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "create student",
        path: "create-student",
        element: <CreateStudent />,
      },
    ],
  },
];

//! hard coded way
/*
export const adminPaths = [
  {
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "create-admin",
    element: <CreateAdmin />,
  },
  {
    path: "create-student",
    element: <CreateStudent />,
  },
  {
    path: "create-faculty",
    element: <CreateFaculty />,
  },
];
*/
