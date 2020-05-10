var dayNames = ["Sunday", "Monday", "Tuseday", "Wenersday", "Thursday", "Friday", "Sarturday"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
function calculateDayValue() {
    year = document.getElementById("year").value;
    CC = parseInt(year.substring(0, 2));
    YY = parseInt(year.substring(2, 4));
    MM = parseInt(document.getElementById("month").value);
    DD = parseInt(document.getElementById("date").value);


    d = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;

    return (Math.floor(d));>
}
function getGender() {
    var gendenders = document.getElementsByName("gender");
    if (gendenders[0].checked == true) {
        var gender = "male";

    } else if (gendenders[1].checked == true) {
        var gender = "female";

    }
    else {
        return false;
    }
    switch (gender) {
        case "male":
            if (dayValue == 1) {
                alert(`BORN ON ${dayNames[0]} AND YOUR AKRA NAME IS ${maleNames[0]}`);
            }
            else if (dayValue == 2) {
                alert(`BORN ON ${dayNames[1]} AND YOUR AKRA NAME IS ${maleNames[1]}`);
            }
            else if (dayValue == 3) {
                alert(`BORN ON ${dayNames[2]} AND YOUR AKRA NAME IS ${maleNames[2]}`);
            }
            else if (dayValue == 4) {
                alert(`BORN ON ${dayNames[3]} AND YOUR AKRA NAME IS ${maleNames[3]}`);
            }
            else if (dayValue == 5) {
                alert(`BORN ON ${dayNames[4]} AND YOUR AKRA NAME IS ${maleNames[4]}`);
            }
            else if (dayValue == 6) {
                alert(`BORN ON ${dayNames[5]} AND YOUR AKRA NAME IS ${maleNames[5]}`);
            }
            else if (dayValue == -0) {
                alert(`BORN ON ${dayNames[6]} AND YOUR AKRA NAME IS ${maleNames[6]}`);
            }

            break;
        case "female":
            if (dayValue == 1) {
                alert(`BORN ON ${dayNames[0]}AND YOUR AKRA NAME IS ${femaleNames[0]}`);
            }
            else if (dayValue == 2) {
                alert(`BORN ON ${dayNames[1]} AND YOUR AKRA NAME IS ${femaleNames[1]}`);
            }
            else if (dayValue == 3) {
                alert(`BORN ON ${dayNames[2]} AND YOUR AKRA NAME IS ${femaleNames[2]}`);
            }
            else if (dayValue == 4) {
                alert(`BORN ON ${dayNames[3]} AND YOUR AKRA NAME IS ${femaleNames[3]}`);
            }
            else if (dayValue == 5) {
                alert(`BORN ON ${dayNames[4]} AND YOUR AKRA NAME IS ${femaleNames[4]}`);
            }
            else if (dayValue == 6) {
                alert(`BORN ON ${dayNames[5]} AND YOUR AKRA NAME IS ${femaleNames[5]}`);
            }
            else if (dayValue == -0) { 
                alert(`BORN ON ${dayNames[6]} AND YOUR AKRA NAME IS ${femaleNames[6]}`);
            }
            break
        default:
    }
}

function findName() {
    dayValue = calculateDayValue();
    getGender();
}
