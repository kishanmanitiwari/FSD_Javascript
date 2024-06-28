
// We are given array of marks of students. Filter our of the marks of students that scored 90+.

let marks = [77,88,94,91,99,56,72];

const marksGreaterThanNinty = marks.filter((mark)=>{
    return mark>90;
});


console.log(marksGreaterThanNinty);