			$('Input_tag_selector').focus(function() {
                // turn on timer
                startTimer();
            }).blur(function() {
                // turn off timer
                endTimer();
            });
			
			var lastValue = $('Input_tag_selector').val(),
            $selector = $('Input_tag_selector'),
			timerCheckCount = 0,
			
			checkInputChange = function(){
				timerCheckCount += 1;
				if(lastValue !== $selector.val()){ //!== check value and type
					//Your custom event.
					
					lastValue = $selector.val();
				}
				
				
			},
			timer = undefined,
			startTimer = function() {
                timer = setInterval(checkInputChange, 200); // check input field every 200 ms (1/5 sec)
            },
            endTimer = function() {
                clearInterval(timer);
                timerCheckCount = 0;
            };