/**
 * Database example for classes.
 * Có 3 bước.
 *  -   Đầu tiên là thiết kế 1 bảng chung của đầy đủ của các đối tượng.
 * -    Tách các đối tượng ra thành các bảng khác nhau.
 * -    Đánh số id cho các thành phần trong class.
 * -    Xóa các thành phần trùng lập trong bảng chung
 * -    Kiểm tra lại đầy đủ 1 các truy xuất quan hệ giữa các bảng.
 * 
 */

var classes = [
    {   
        id: 0,
        name: '1A',
        // teacher: {
        //     name: 'Quynh',
        //     age: 40
        // },
        teacher: 0
        // students: [
        //     { name: 'Minh', height: 120 },
        //     { name: 'Minh', height: 120 },
        //     { name: 'Minh', height: 120 }
        // ]
    },
    {
        id: 1,
        name: '2A',
        // teacher: {
        //     name: 'Chinh',
        //     age: 43
        // }
        teacher: 1
    },
    {   
        id: 2,
        name: '3A',
        // teacher: {
        //     name: 'Diep',
        //     age: 47
        // }
        teacher: 2

    },
    {
        id: 3,
        name: '4A',
        // teacher: {
        //     name: 'Nguyet',
        //     age: 48
        // }
        teacher: 3
    },
    {
        id: 4,
        name: '5A',
        // teacher: {
        //     name: 'Huong',
        //     age: 65
        // }
        teacher: 4
    }
];

var teachers = [
    {
        id: 0,
        name: 'Quynh',
        age: 40
    },
    {
        id: 1,
        name: 'Chinh',
        age: 43
    },
    {
        id: 2,
        name: 'Nguyet',
        age: 48
    },
    {
        id: 3,
        name: 'Nguyet',
        age: 48
    },
    {
        id: 4,
        name: 'Huong',
        age: 65
    }
];

var students = [
    { id: 0, name: 'Minh', height: 120, class: 0},
    { id: 1, name: 'Minh', height: 120, class: 0 },
    { id: 2, name: 'Minh', height: 120, class: 0 },
    { id: 3, name: 'Huy', height: 120, class: 1 }
];


// var class1A = classes.find(function (x) {
//     return x.name === '1A';
// });

// console.log(class1A.students);

function getStudentsInClass(className) {
    var classObj = classes.find(function(x){
        return x.name === className;
    });
    var studentsInClass = students.filter(function(student){
        return student.class === classObj.id;
    });
    return studentsInClass;
}

var studentsInClass = getStudentsInClass('2A');
console.log(studentsInClass);
