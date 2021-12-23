function GetStudentInfo(cls,sec,rollno){
    return cls+sec+rollno;
}
var info=GetStudentInfo("5th","A",40);
function GetStudentInfocurry(cls){
    return function(sec){
        return function(rollno){
            return cls+sec+rollno;
        }
    }
}

console.log(info);