(function() {

	var isPrimeNumber = function( number ) {
		if ( number == 1 || number == 2 ) {
			return true;
		}
		for ( var i = 2; i < number; i++ ) {
	
			if ( number % i == 0 ) {
				return false;
			}
		} 
		return true;
	};
	
	var unique = function( arr ) {
		return arr.reduce(function( p, c ) {
			if ( p.indexOf( c ) < 0 ) {
				p.push( c );	
			}
			return p; 
		}, []);
	};

	var nextPrime = function( number ) {
		var n;
		if( number % 2 == 0 ) {
			number++;
		}
		
		for( n = number; !isPrimeNumber( n ); n += 2 ) {
			
		}
		return n;
	};
	
	document.addEventListener( "DOMContentLoaded", function() {
		var form = document.querySelector( "#prime" ),
			output = document.querySelector( "#output" );
			
		form.addEventListener( "submit", function( e ) {
			e.preventDefault();
			var n = document.querySelector( "#knop1" ).value;
			var text = [];
			for( var i = 0; i < n; ++i ) {
				text.push( nextPrime( i ) );	
			}
			output.innerHTML = unique( text ).join( " " );
		}, false);
		
	});
	
	
})();
