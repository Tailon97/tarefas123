$(document).ready(function(){

    $('ul').on('click', 'li', function() { 
        $(this).find('.texto-tarefa').toggleClass('tarefa-concluida'); 
    });

    $('#formulario').on('submit', function(e){
        e.preventDefault();
        
        const valorTarefa = $('#valor-tarefa').val();

    if(valorTarefa.trim() !== ''){

        const textoSpan = $('<span></span>').addClass('texto-tarefa').text(valorTarefa);

        const NovaTarefa = $('<li></li>').append(textoSpan);

        const deleteButton = $('<button class="delete-btn">Excluir</button>');

        $(NovaTarefa).append(deleteButton)

        $(NovaTarefa).appendTo('ul');
        $(NovaTarefa).fadeIn(1000);
        $('#valor-tarefa').val('');
    }else {
            alert('Por favor, digite uma tarefa!');
        }
    })

        $('ul').on('click', '.delete-btn', function(e) {
            e.stopPropagation();
        $(this).parent().fadeOut(500, function() {
        $(this).remove();
        });
    });
})