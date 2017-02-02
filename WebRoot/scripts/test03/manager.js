define(["../test02/class", "../test02/student"], function(clazz, student){
	return{
		addNewStudent : function(name, gender) {
			clazz.addToClass(student.createStudent(name, gender));
		},
		getClassSize : function() {
			return clazz.getClassSize();
		}
	};
});
