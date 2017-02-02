/**
 * 学生模块。
 */
define(function(){
	return{
		createStudent:function(name, gender) {
			return {
				name : name,
				gender : gender
			};
		}
	};
});
