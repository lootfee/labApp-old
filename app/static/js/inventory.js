$(document).ready(function() {
    $("#reg_company_form").hide();
	$("#register_company").click(function(){
		$("#reg_company_form").show();
	});
});

$(document).ready(function() {
    $("#edit_company_profile_form").hide();
	$("#edit_company_profile").click(function(){
		$("#edit_company_profile_form").show();
		$("#company_profile").hide();
	});
});

$(document).ready(function() {
	$("#cancel").click(function(){
		window.history.go(-1);
		return false;
	});
});