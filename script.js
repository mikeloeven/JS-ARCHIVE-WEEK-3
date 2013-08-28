/*JASON INITIALISATION*/
                    var ad_metadata = {
                        'ad0' : "ad 1",
                        'ad1' : "ad 2",
                        'ad2' : "ad 3",
                        'ad3' : "ad 4",
                        'ad4' : "ad 5"                                
                    };
                   
					/*function for displaying random ads*/
                    function rand_ad_display() {
                        var ad_div = document.getElementById("ad");
                        var ad_keys = [];
                        var ad_key = "";
                    /*pushes the JASON into the working variable*/    
                        for ( ad_key in ad_metadata ) {   
                            ad_keys.push(ad_key);
                        }
                    
                        var ad_keys_len = ad_keys.length;
                        var rand_ad_key = getRandAdKey(ad_keys.length);  
                        var ad_key_value = ad_keys[rand_ad_key];                    
                        var ad_metadata_value = ad_metadata[ad_key_value];
                        /* sets the webpage display to current ad value*/
                        ad_div.innerHTML = ad_metadata_value
						document.title = ad_metadata_value;
                   
                        }
                    
                        function getRandAdKey ( len ) {
                            /*gets random number, 0 to len;*/
                            return Math.floor(Math.random()* len);
                        }
