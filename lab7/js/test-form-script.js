function checkTestForm(form) {
	var inputs = form.getElementsByTagName('input');
	var selects = form.getElementsByTagName('select');
    for (var i = 0; i < inputs.length; i++) {
        if(inputs[i].value == ""){        	
            alert("Не все поля были заполнены");
            inputs[i].focus();
            return false;
        }        
    }
    for (i = 0; i < selects.length; i++) {
        if(selects[i].value == ""){        	
            alert("Не все поля были заполнены");
            selects[i].focus();
            return false;
        }        
    }
    var nameField = document.getElementsByName('name')[0];
    const nameRegex = /^(?:[A-Za-zА-Яа-я]+ ){2}[A-Za-zА-Яа-я]+$/;
    if (!(nameRegex.test(nameField.value)))
    {
        alert("Поле ФИО должно содержать 3 слова, разделенных пробелами");
        nameField.focus();
        return false;
    }
    var answerSelect = document.getElementsByName('awnser3')[0];
    if (answerSelect.selectedOptions.length<3)
    {
        alert("Должно быть установленно не менее трех переключателей");
        answerField.focus();
        return false;
    }
    return true;
}
