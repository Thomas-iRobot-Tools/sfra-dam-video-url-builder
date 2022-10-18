  //US VERSION
  // 
	function get_values(e){
		document.querySelector("form").addEventListener("submit", get_values );
		var formReturn = document.getElementById('videoURL-form');

		const vidSourceCheck = document.getElementById("vid-source").value;
		const vidURLCheck = document.getElementById("videoURL").value;
		// Video Source Select
		switch (vidSourceCheck) {
			// DAM SELECTED
			case "DAM":
			// SWITCH TO DETERMINE WHAT WAS INPUTTED
				var vidCheckSplit = vidURLCheck.split('/');

				switch (vidCheckSplit[0]){
					//CASE 1
					case 'https:':
					
						//ANOTHER SWITCH
							switch (vidCheckSplit[3]){
								case "s":
									var vidURLSplit = vidURLCheck.split('/');
									var vidID = vidURLSplit[4];
									var vidName = vidURLSplit[5];
									document.getElementById('code-display').innerHTML = 'https://irobot.widen.net/content/' + vidID +'/mp4/' + vidName +'.mp4?quality=hd&u=d9oziz';
									console.log('vid id:' + vidID + ' ' + 'vid name:' +vidName);
									break;
								case "view":
									var vidURLSplit = vidURLCheck.split('/');
									var vidID = vidURLSplit[5];
									var vidNameSplit = vidURLSplit[6].split('.');
									var vidName = vidNameSplit[0].toLowerCase();	
									document.getElementById('code-display').innerHTML = 'https://irobot.widen.net/content/' + vidID +'/mp4/' + vidName +'.mp4?quality=hd&u=d9oziz';
									console.log('vid id:' + vidID + ' ' + 'vid name:' +vidName);
									break;
								default:
									console.log('default');
								}
						break;
					case '<div style="position:relative;width:100%;height:0;padding-bottom:56.25%;"><iframe src="https:':
						var vidURLSplit = vidURLCheck.split('/');
						var vidID = vidURLSplit[5];
						var vidNameSplit = vidURLSplit[6].split('.');
						var vidName = vidNameSplit[0].toLowerCase();	
						document.getElementById('code-display').innerHTML = 'https://irobot.widen.net/content/' + vidID +'/mp4/' + vidName +'.mp4?quality=hd&u=d9oziz';
						console.log('vid id:' + vidID + ' ' + 'vid name:' +vidName);
						break;
					default:
					console.log(vidURLSplit);
				}
			
		    e.preventDefault(formReturn)
		    break;
	    // BRIGHTCOVE SELECTED
		  case "Brightcove":
		    console.log("Brightcove");
		    e.preventDefault(formReturn)
		    break;
	    // YOUTUBE SELECTED
	    case "Youtube":
		    console.log("Youtube");
		    e.preventDefault(formReturn)
		    break;
	    // NONE SELECTED
	    default:
	    	console.log("Source not selected");
	    	e.preventDefault(formReturn)
		}


	}

	 function tooltipOn(){
        document.getElementById('tooltip-copy').style.display = "inline-block"
        }

        function tooltipOff()
        {
        document.getElementById('tooltip-copy').style.display = "none"
        }