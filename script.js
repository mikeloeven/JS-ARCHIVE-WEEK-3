/*JASON INITIALISATION*/
                    var ad_metadata = {
                        'ad0' : "Cheap Viagra \n Because your not Getting any younger!!",
                        'ad1' : "Get Rich Instantly with my new book \n money from suckers ",
                        'ad2' : "Find out if your wife is cheating on you \n use VirtualPI.com",
                        'ad3' : "Spy on your neighbors with our new remote drones",
                        'ad4' : "Click me for a Free Virus"                                
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
					// this block here concatenates the random number with the prefix "ad" to create the key string
                        var ad_keys_len = ad_keys.length;
                        var rand_ad_key = getRandAdKey(ad_keys.length);  
                        var ad_key_value = ad_keys[rand_ad_key];                    
                        var ad_metadata_value = ad_metadata[ad_key_value];
                        /* sets the webpage display to current ad value*/
                        ad_div.innerHTML = ad_metadata_value
						document.title = ad_metadata_value.substr(0,15);
                   
                        }
                    
                        function getRandAdKey ( len ) {
                            /*gets random number, 0 to len;*/
                            return Math.floor(Math.random()* len);
                        }