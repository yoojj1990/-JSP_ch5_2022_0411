/**
 * 
 */
 
 
function gradeCheck()
{
	alert("추천도서 : " + document.gradeForm.book.value +"\n"
	+ "평점 : " + document.gradeForm.grade.value);
}

function loginChcek()
{
	var f = document.loginForm;
	
	for(i = 0; i < f.id.value.length; i++)
	{
		var ch = f.id.value.charAt(i);
		if((ch < 'A' || ch > 'Z')&&(ch > 'a' || ch < 'z')&&(ch > '0' || ch < '9'))
		{
			alert("아이디는 모두 대문자로 입력해야합니다.");
			f.id.focus();
			return false;
		}
	}
	
	if(f.id.value =="")
	{
		alert("아이디는 필수 입력사항 입니다.")
		f.id.focus();
		return false;
	}
	else if(f.id.value.length < 4 || f.id.value.length > 15)
	{
		alert("아이디는 4~15자 사이로 입력해주세요.")
		f.id.focus();
		return false;
	}
	else if(f.id.value.length < 4 || f.id.value.length > 15)
	{
		
		alert("아이디는 영문 대문자로만 입력해주세요.")
		f.id.focus();
		return false;
	}
	
	else if(f.pw.value =="")
	{
		alert("비밀번호는 필수 입력사항 입니다.")
		f.pw.focus();
		return false;
	}
	else if(f.pw.value.length < 6 || f.pw.value.length > 10)
	{
		alert("비밀번호는 6~10자 사이로 입력해주세요.")
		f.pw.focus();
		return false;
	}
	else if(isNaN(f.pw.value))
	{
		alert("비밀번호는 숫자만 입력 가능합니다.")
		f.pw.focus();
		return false;
	}
	else
	{
		return true;b
	}
	
}