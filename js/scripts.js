	$(document).ready(function() {
        switch (document.title) {
            case 'Pierre Morisse - Présentation':
            case 'Pierre Morisse - Home':
                $('#navigation #CV #accueil').addClass('active');
                break;
            case 'Pierre Morisse - Enseignement':
            case 'Pierre Morisse - Teaching':
                $('#navigation #CV #enseignement').addClass('active');
                break;
            case 'Pierre Morisse - Recherche':
            case 'Pierre Morisse - Research':
                $('#navigation #CV #recherche').addClass('active');
                break;
            case 'Pierre Morisse - Publications & Communications':
                $('#navigation #CV #publications').addClass('active');
                break;
        }
		});
