// const arr = [1, 2, 3, 4, 5];

// const result = arr.reduce((acc, item) => {
//   acc.push(acc + item);
//   return acc;
// }, []);

// console.log("final result", result);

// export const adminPath2 = [
//   {
//     name: "Dashboard",
//     path: "dashboard",
//     element: "admin dashboard",
//   },
//   {
//     name: "User Management",
//     children: [
//       {
//         name: "create admin",
//         path: "create-admin",
//         element: "create admin",
//       },
//       {
//         name: "create faculty",
//         path: "create-faculty",
//         element: "create faculty",
//       },
//       {
//         name: "create student",
//         path: "create-student",
//         element: "create student",
//       },
//     ],
//   },
// ];

// /*
// const newArray = adminPath2.reduce((acc, item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }


//   if(item.children) {
//     item.children.forEach(child => {
//       acc.push({
//         path: child.path,
//         element : child.element
//       })
//     })
//   }

//   return acc;
// }, []);

// console.log(newArray);
// */

// const newArray = adminPath2.reduce((acc, item) => {
//   if (item.name && item.path) {
//     acc.push({
//       key: item.name,
//       label: "navlink",
//     });
//   }

//   if (item.children) {
//     acc.push({
//       key: item.name,
//       label: item.name,
//       children: item.children.map((child) => ({
//         key: child.name,
//         label: child.name,
//       })),
//     });
//   }

//   return acc;
// }, []);

// console.log(JSON.stringify(newArray));



