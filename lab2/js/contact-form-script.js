function checkContactForm(form) {
	var inputs = form.getElementsByTagName('input');
	var textareas = form.getElementsByTagName('textarea');
    for (var i = 0; i < inputs.length; i++) {
        if(inputs[i].value == ""){        	
            alert("Не все поля были заполнены");
            inputs[i].focus();
            return false;
        }        
    }
    for (i = 0; i < textareas.length; i++) {
        if(textareas[i].value == ""){        	
            alert("Не все поля были заполнены");
            textareas[i].focus();
            return false;
        }        
    }
    var nameField = document.getElementById('name');
    const nameRegex = /^(?:[A-Za-zА-Яа-я]+ ){2}[A-Za-zА-Яа-я]+$/;
    if (!(nameRegex.test(nameField.value)))
    {
        alert("Поле ФИО должно содержать 3 слова, разделенных пробелами");
        nameField.focus();
        return false;
    }
    var phoneField = document.getElementById('phone');
    const phoneRegex = /^((\+7)|(\+3))[0-9]{8,10}$/;
    if (!(phoneRegex.test(phoneField.value)))
    {
        alert("Поле телефон должно начинаться с +7 или +3, не должно содержать пробелов и должно содержать от 9 до 11 цифр");
        nameField.focus();
        return false;
    }
    return true;
}