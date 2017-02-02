/**
 * 班级模块。
 */
define(function(){

	var allStudent = [];
	return {
		classID : "001",
		department : "computer",
		addToClass : function(student){

			allStudent.push(student);
		},
		getClassSize : function(){

			return allStudent.length;
		}
	};
});