const student = {
    name: "Aryan Kumar",
    rollNumber: 101,
    marks: {
        Math: 80,
        Science: 65,
        English: 50,
        History: 70,
    },
    
    getAverageMarks: function() {
        let totalMarks = 0;
        let subjectCount = 0;
        
        for (let subject in this.marks) {
            totalMarks += this.marks[subject];
            subjectCount++;
        }
        
        return totalMarks / subjectCount;
    },
    
    checkPassOrFail: function() {
        return this.getAverageMarks() > 40 ? "Passed" : "Failed";
    }
};

console.log("Student Name:", student.name);
console.log("Roll Number:", student.rollNumber);
console.log("Average Marks:", student.getAverageMarks());
console.log("Result:", student.checkPassOrFail());
