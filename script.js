function submitForm() {
		var ERR=0;
		var Fname = document.getElementById('Fname');
		if (!Fname.value.length){FNE.className="error";FNE.innerHTML = "Cannot Be Blank"; Fname.className="fail"; ERR=1;}
			else{FNE.className="confirm";FNE.innerHTML = "Success"; Fname.className="success";}
		
		var Bday = document.getElementById('birthday');
		if (!Bday.value.length){BDE.className="error";BDE.innerHTML = "Cannot Be Blank"; Bday.className="fail"; ERR=1;}
			else{BDE.className="confirm";BDE.innerHTML = "Success"; Bday.className="success";}
			
		var Email = document.getElementById('email');
		if (!Email.value.length){EME.className="error";EME.innerHTML = "Cannot Be Blank"; Email.className="fail"; ERR=1;}
		else {
		if (Email.value.indexOf("@") === -1 || Email.value.indexOf(".") === -1 ){EME.className="error";EME.innerHTML = "Invalid Format"; Email.className="fail"; ERR=1;}
			else{EME.className="confirm";EME.innerHTML = "Success"; Email.className="success";}
			}
		
		
		
		var Comm = document.getElementById('comment');
		if (!Comm.value.length){COMME.className="error";COMME.innerHTML = "Cannot Be Blank"; Comm.className="fail"; ERR=1;}
			else{COMME.className="confirm";COMME.innerHTML = "Success";Comm.className="success";}
                        
			
		
               if (ERR===0){CONF.className="contentbox"; 
                   
                    fnameout.innerHTML = Fname.value;
                    birthout.innerHTML = Bday.Value;
                    EmailOut.innerHTML = Email.value;
                    commout.innerHTML = Comm.value;
                    MAIN.style.display = "none";        
                    CONF.style.display = "block";
                    
                    
                }
	}